import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const expectedLocales = ['en', 'tr', 'es', 'de'];

const config = (await import(pathToFileURL(path.join(root, 'astro.config.mjs')))).default;
assert.deepEqual(config.i18n?.locales, expectedLocales);
assert.equal(config.i18n?.defaultLocale, 'en');
assert.equal(config.i18n?.routing?.prefixDefaultLocale, false);

const sitemapIndex = await readFile(path.join(dist, 'sitemap-index.xml'), 'utf8');
const sitemapFiles = [...sitemapIndex.matchAll(/<loc>[^<]+\/(sitemap-[^<]+\.xml)<\/loc>/g)].map(
  ([, file]) => file,
);
assert.deepEqual(sitemapFiles, ['sitemap-0.xml'], 'the index must have one sitemap target');

const sitemap = await readFile(path.join(dist, sitemapFiles[0]), 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, entry]) => {
  const [, loc] = entry.match(/<loc>([^<]+)<\/loc>/) ?? [];
  const links = [...entry.matchAll(/<xhtml:link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"\s*\/>/g)].map(
    ([, locale, href]) => ({ locale, href }),
  );
  assert.ok(loc, 'every sitemap URL must contain a loc');
  return { loc, links };
});

assert.ok(entries.length > 0, 'the sitemap must contain at least one URL');
assert.equal(entries.some(({ loc }) => loc.includes('/404')), false, '404 must not be indexable');
assert.equal(
  entries.some(({ loc }) => loc.includes('/case-studies/ledgerline')),
  false,
  'the legacy case-study redirect must not be indexable',
);

function routeKeyAndLocale(loc) {
  const pathname = new URL(loc).pathname;
  for (const locale of expectedLocales.slice(1)) {
    const prefix = `/${locale}`;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      return { locale, key: pathname.slice(prefix.length) || '/' };
    }
  }
  return { locale: 'en', key: pathname || '/' };
}

const routeGroups = new Map();
for (const entry of entries) {
  const parsed = routeKeyAndLocale(entry.loc);
  const group = routeGroups.get(parsed.key) ?? [];
  group.push({ ...entry, ...parsed });
  routeGroups.set(parsed.key, group);
}

let localizedGroups = 0;
for (const [key, group] of routeGroups) {
  const locales = new Set(group.map(({ locale }) => locale));
  if (locales.size === 1 && locales.has('en')) {
    assert.equal(
      group.every(({ links }) => links.length === 0),
      true,
      `English-only route ${key} must not advertise incomplete alternatives`,
    );
    continue;
  }

  localizedGroups += 1;
  assert.equal(
    group.length,
    expectedLocales.length,
    `localized route ${key} must have one URL per supported locale`,
  );
  assert.deepEqual(
    [...locales].sort(),
    [...expectedLocales].sort(),
    `localized route ${key} must have every supported locale`,
  );

  const expectedHrefs = new Set(group.map(({ loc }) => loc));
  for (const { loc, links } of group) {
    assert.deepEqual(
      links.map(({ locale }) => locale).sort(),
      [...expectedLocales].sort(),
      `${loc} must list every reciprocal hreflang alternative`,
    );
    assert.deepEqual(
      new Set(links.map(({ href }) => href)),
      expectedHrefs,
      `${loc} hreflang hrefs must point to every localized route`,
    );
  }
}

if (localizedGroups === 0) {
  console.warn(
    'sitemap verification passed configuration and index invariants; no localized routes were built, so reciprocal alternatives were not emitted',
  );
} else {
  console.log(`sitemap verification passed for ${localizedGroups} localized route group(s)`);
}
