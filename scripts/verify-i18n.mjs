import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  DEFAULT_LOCALE,
  LOCALE_METADATA,
  SUPPORTED_LOCALES,
  TRANSLATIONS,
  getLocaleFromPath,
  getTranslations,
  localizePath,
  localePath,
  stripLocalePrefix,
  translate,
} from '../src/lib/i18n/index.ts';
import { getHomeCopy } from '../src/lib/i18n/home.ts';
import { getUsageCopy } from '../src/lib/i18n/secondary/usage.ts';
import { getRoiCopy } from '../src/lib/i18n/secondary/roi.ts';
import { getGdprCopy } from '../src/lib/i18n/secondary/gdpr.ts';

assert.deepEqual(SUPPORTED_LOCALES, ['en', 'tr', 'es', 'de']);
assert.equal(DEFAULT_LOCALE, 'en');
assert.equal(LOCALE_METADATA.en.prefix, '');
assert.equal(LOCALE_METADATA.tr.prefix, '/tr');
assert.equal(LOCALE_METADATA.es.nativeName, 'Español');
assert.equal(LOCALE_METADATA.de.languageTag, 'de');

for (const locale of SUPPORTED_LOCALES) {
  assert.ok(TRANSLATIONS[locale].meta.siteName);
  assert.equal(getTranslations(locale), TRANSLATIONS[locale]);
}
assert.equal(getTranslations('not-supported').meta.siteName, 'Airmino');
assert.equal(translate('es', 'nav.roiCalculator'), 'Calculadora de ROI');
assert.equal(translate('tr', 'common.startFreeTrial'), 'Ücretsiz denemeyi başlat');
assert.equal(translate('de', 'footer.mitLicence'), 'MIT-Lizenz');
assert.equal(translate('es', 'modal.requestApiKey'), 'Solicitar clave de API');

assert.equal(localizePath('/', 'en'), '/');
assert.equal(localizePath('/usage/', 'en'), '/usage/');
assert.equal(localizePath('/usage/', 'tr'), '/tr/usage/');
assert.equal(localizePath('/usage/#fraud-detection', 'es'), '/es/usage/#fraud-detection');
assert.equal(localizePath('/tr/usage?view=all#top', 'de'), '/de/usage?view=all#top');
assert.equal(localizePath('/de/usage?view=all#top', 'en'), '/usage?view=all#top');
assert.equal(localizePath('/roi-calculator/?plan=pro#start', 'tr'), '/tr/roi-calculator/?plan=pro#start');
assert.equal(localizePath('/#pricing', 'tr'), '/tr/#pricing');
assert.equal(localizePath('#pricing', 'tr'), '#pricing');
assert.equal(localizePath('https://example.com/usage#top', 'tr'), 'https://example.com/usage#top');
assert.equal(localePath('de', '/gdpr/'), '/de/gdpr/');

assert.equal(getLocaleFromPath('/'), 'en');
assert.equal(getLocaleFromPath('/usage/#top'), 'en');
assert.equal(getLocaleFromPath('/tr/usage'), 'tr');
assert.equal(getLocaleFromPath('/es?x=1'), 'es');
assert.equal(getLocaleFromPath('#pricing'), 'en');
assert.equal(stripLocalePrefix('/de/usage/#top'), '/usage/#top');
assert.equal(stripLocalePrefix('/en/usage'), '/usage');
assert.equal(stripLocalePrefix('#pricing'), '#pricing');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const localizedPageFiles = ['index.astro', 'usage.astro', 'roi-calculator.astro', 'gdpr.astro'];

// Every localized entrypoint must be a thin getStaticPaths wrapper. This keeps
// route generation finite and prevents translated pages from drifting apart.
for (const file of localizedPageFiles) {
  const wrapper = await readFile(path.join(root, 'src', 'pages', '[locale]', file), 'utf8');
  assert.match(wrapper, /export function getStaticPaths\s*\(\)/, `${file} must define getStaticPaths`);
  assert.match(wrapper, /params:\s*\{\s*locale\s*\}/, `${file} must generate locale params`);
  assert.match(wrapper, /props:\s*\{\s*locale\s*\}/, `${file} must pass locale props`);
}

const dist = path.join(root, 'dist');
let hasBuildOutput = true;
try {
  await access(path.join(dist, 'index.html'));
} catch {
  hasBuildOutput = false;
}

if (hasBuildOutput) {
  const routeDefinitions = {
    home: {
      path: '/',
      title: (locale) => getHomeCopy(locale).meta.title,
      description: (locale) => getHomeCopy(locale).meta.description,
    },
    usage: {
      path: '/usage/',
      title: (locale) => getUsageCopy(locale).page.title,
      description: (locale) => getUsageCopy(locale).page.description,
    },
    roi: {
      path: '/roi-calculator/',
      title: (locale) => getRoiCopy(locale).page.title,
      description: (locale) => getRoiCopy(locale).page.description,
    },
    gdpr: {
      path: '/gdpr/',
      title: (locale) => getGdprCopy(locale).page.title,
      description: (locale) => getGdprCopy(locale).page.description,
    },
  };

  const htmlDecode = (value) => value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
  const outputFile = (routePath) => routePath === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, routePath.slice(1), 'index.html');
  const internalPaths = [
    '/',
    '/usage/',
    '/roi-calculator/',
    '/gdpr/',
    '/#pricing',
    '/#start',
    '/#benchmarks',
    '/#architecture',
    '/usage/#fraud-detection',
    '/usage/#support-routing',
    '/usage/#loan-prequal',
  ];

  for (const locale of SUPPORTED_LOCALES) {
    for (const definition of Object.values(routeDefinitions)) {
      const routePath = localizePath(definition.path, locale);
      const html = await readFile(outputFile(routePath), 'utf8');
      const canonical = `https://airmino.com${routePath}`;
      assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`), `${canonical} canonical missing`);
      assert.ok(html.includes(`<html lang="${LOCALE_METADATA[locale].languageTag}" dir="${LOCALE_METADATA[locale].dir}"`), `${routePath} lang/dir missing`);

      const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
      const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1];
      assert.equal(htmlDecode(title ?? ''), definition.title(locale), `${routePath} title is not localized`);
      assert.equal(htmlDecode(description ?? ''), definition.description(locale), `${routePath} description is not localized`);

      for (const alternateLocale of SUPPORTED_LOCALES) {
        const alternatePath = localizePath(definition.path, alternateLocale);
        const alternateHref = `https://airmino.com${alternatePath}`;
        assert.ok(
          html.includes(`<link rel="alternate" hreflang="${alternateLocale}" href="${alternateHref}">`),
          `${canonical} is missing ${alternateLocale} hreflang`,
        );
      }
      assert.ok(
        html.includes(`<link rel="alternate" hreflang="x-default" href="https://airmino.com${definition.path}">`),
        `${canonical} is missing x-default hreflang`,
      );

      for (const internalPath of internalPaths) {
        const href = localizePath(internalPath, locale);
        assert.ok(html.includes(`href="${href}"`), `${routePath} lost locale on ${internalPath}`);
        if (locale !== DEFAULT_LOCALE && !internalPath.startsWith('#')) {
          assert.equal(html.includes(`href="${internalPath}"`), false, `${routePath} contains an English internal link`);
        }
      }
    }
  }
} else {
  console.log('build output not found; skipped dist route/metadata/link checks');
}

console.log('i18n verification passed');
