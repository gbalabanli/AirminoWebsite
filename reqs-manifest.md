# Multilingual Website Requirements

Status legend: `[ ]` pending · `[x]` complete

## Confirmed requirements

- [x] **R1 — Locale model:** Keep English as the default locale at the existing root URLs; add Turkish (`/tr/`), Spanish (`/es/`), and German (`/de/`) URL prefixes. Do not automatically redirect based on browser language.
- [x] **R2 — Header selector:** Add an accessible native language `<select>` in the upper-right header beside the trial CTA with `English`, `Türkçe`, `Español`, and `Deutsch` options. English is selected by default, and switching preserves the equivalent page and URL hash when available.
- [x] **R3 — Translation coverage:** Translate all visitor-facing prose, including navigation, hero, pricing, stories, calculator, GDPR page, FAQ, footer, 404, trial modal, validation, and success/error messages. Keep API paths, JSON keys, curl commands, technical identifiers, and code examples unchanged. Keep pricing in USD.
- [x] **R4 — Translation architecture:** Add centralized, typed locale dictionaries and avoid duplicated component markup or scattered language conditionals. Preserve existing English content and route behavior.
- [x] **R5 — Static localized routes:** Generate static pages for all four locales while preserving the existing English routes, existing anchors, old case-study redirect, and 404 behavior.
- [x] **R6 — SEO metadata:** Set localized `<html lang>`, title, description, canonical URL, Open Graph locale, and reciprocal `hreflang` alternates for every localized page.
- [x] **R7 — Sitemap:** Configure the existing Astro sitemap with English as the default and all four language alternates. Keep `/sitemap-index.xml` as the single sitemap submission target; exclude the 404 page and old case-study redirect from localized indexable content.
- [x] **R8 — Responsive accessibility:** Make the selector keyboard accessible and usable on mobile without regressing the current header layout, CTA behavior, trial modal behavior, analytics events, or anchor links.
- [x] **R9 — Verification:** Build all localized routes, detect missing translation keys, run available lint/type/build checks, and use Playwright to verify selector navigation, language attributes, hash preservation, mobile layout, trial modal behavior, sitemap, canonical, and alternate links.

## Verification record

- Build: `npm run build` ✅ — 17 static pages (16 localized content routes + root 404)
- Lint/type checks: `npx tsc --noEmit` ✅; no lint script is defined in `package.json`; `git diff --check` ✅
- Playwright: Preview E2E ✅ — selector labels/default, locale switching, hash preservation, localized headings, mobile visibility/no overflow, trial modal, zero console errors
- Sitemap/SEO: `npm run verify:sitemap` ✅; four localized route groups with reciprocal alternates; canonical/lang/hreflang checks ✅
- Production deployment: Not performed; changes are ready for the normal commit/Pages deployment workflow.
