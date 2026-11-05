import assert from 'node:assert/strict';

import { SUPPORTED_LOCALES } from '../src/lib/i18n/index.ts';
import { HOME_COPY, getHomeCopy } from '../src/lib/i18n/home.ts';

function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shape(child)]));
  }
  return typeof value;
}

const englishShape = shape(HOME_COPY.en);

for (const locale of SUPPORTED_LOCALES) {
  assert.deepEqual(shape(HOME_COPY[locale]), englishShape, `${locale} home copy shape differs from English`);
  assert.equal(getHomeCopy(locale), HOME_COPY[locale]);
}

assert.equal(getHomeCopy(undefined), HOME_COPY.en);
assert.equal(getHomeCopy(null), HOME_COPY.en);
assert.equal(getHomeCopy('not-supported'), HOME_COPY.en);

function assertNonEmptyStrings(value, path = 'home') {
  if (Array.isArray(value)) {
    value.forEach((child, index) => assertNonEmptyStrings(child, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => assertNonEmptyStrings(child, `${path}.${key}`));
    return;
  }
  assert.equal(typeof value, 'string', `${path} should be a string`);
  assert.ok(value.length > 0, `${path} should not be empty`);
}

for (const locale of SUPPORTED_LOCALES) assertNonEmptyStrings(HOME_COPY[locale], locale);

assert.equal(HOME_COPY.en.benchmark.rows.length, 7);
assert.equal(HOME_COPY.en.faq.items.length, 5);
assert.equal(HOME_COPY.en.pricing.tiers.length, 3);
console.log('homepage i18n verification passed');
