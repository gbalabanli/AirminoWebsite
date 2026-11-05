import assert from 'node:assert/strict';

import { SUPPORTED_LOCALES, getTranslations } from '../src/lib/i18n/index.ts';
import { getUsageCopy } from '../src/lib/i18n/secondary/usage.ts';
import { getRoiCopy } from '../src/lib/i18n/secondary/roi.ts';
import { getGdprCopy } from '../src/lib/i18n/secondary/gdpr.ts';
import { getNotFoundCopy } from '../src/lib/i18n/secondary/not-found.ts';

const copySets = [
  ['shared', (locale) => getTranslations(locale)],
  ['usage', (locale) => getUsageCopy(locale)],
  ['roi', (locale) => getRoiCopy(locale)],
  ['gdpr', (locale) => getGdprCopy(locale)],
  ['not-found', (locale) => getNotFoundCopy(locale)],
];

function shape(value) {
  if (typeof value === 'string') return 'string';
  if (!value || typeof value !== 'object') return typeof value;
  return Object.fromEntries(
    Object.entries(value)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, child]) => [key, shape(child)]),
  );
}

function assertStrings(value, path = '') {
  if (typeof value === 'string') {
    assert.ok(value.trim(), `empty translation at ${path}`);
    return;
  }
  assert.ok(value && typeof value === 'object', `invalid translation at ${path}`);
  for (const [key, child] of Object.entries(value)) {
    assertStrings(child, path ? `${path}.${key}` : key);
  }
}

for (const [name, getCopy] of copySets) {
  const english = getCopy('en');
  const englishShape = shape(english);
  assertStrings(english, `${name}.en`);

  for (const locale of SUPPORTED_LOCALES) {
    const copy = getCopy(locale);
    assert.deepEqual(shape(copy), englishShape, `${name}.${locale} has a different key shape`);
    assertStrings(copy, `${name}.${locale}`);
  }
}

console.log('secondary i18n verification passed');
