# Phase 07: Pricing Matrix Home Section

## Phase Metadata
- Status: Complete
- Last Updated: 2026-10-16 (implemented + browser-verified)
- Duration Target: 1 session
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
- Add a `prototype_version_2`-style pricing matrix as a home (`/`) section with anchor `#pricing`, re-skinned to Airmino tokens.

## Entry Criteria
- Phases 01–02 complete (home band structure, tokens); live site on apex domain with `base: '/'`.
- User decision 2026-10-16: home section only (no dedicated `/pricing` route).
- Pricing source: `docs/design/prototype_version_2.html` `#pricing` (Developer $0 / Growth $239 / Enterprise Custom, monthly/annual switcher with Save 20%).

## In Scope
- New component `Pricing.astro`: eyebrow (Transparent Billing), heading, subcopy, monthly/annual switcher (vanilla JS toggle, annual = −20%), 3 cards (Developer: $0, 100k req/mo, 3-region edge, community support; Growth highlighted: $239 or $191 annual, 10M req/mo, anycast, 99.99% SLA, solutions channel; Enterprise: Custom, unlimited, private VPC, 99.999% SLA, BAA/audits) — copy adapted from prototype_2 with DeepSeek/Nexus branding removed and Airmino decision-API framing.
- Home wiring: insert `<Pricing />` into `src/pages/index.astro` (after FAQ, before case teasers or adjacent to ROI calculator CTA — decide at implementation, record here); section `id="pricing"`.
- Nav/footer: add `Pricing` anchor link (`u('/#pricing')` — fragment links stay root-aware via `u()`); `data-event` hooks (`pricing-view`, `pricing-trial-growth`, `pricing-contact-enterprise`) per `docs/analytics.md` pattern.
- Responsive: 3-col → 1-col at 980px; highlighted Growth card keeps contrast AA.

## Out Of Scope
- Dedicated `/pricing` route, pricing engine/billing logic, checkout/trial fulfillment (CTAs link to placeholder trial, as before).
- Real Airmino price list — prototype_2 figures are placeholders until pricing decision lands.

## Dependencies
- Upstream: Phase 01 (tokens), Phase 02 (home bands). Sequential after Phase 06 to avoid concurrent home-page edit conflicts (Phase 05 touches home teasers; Phase 06 does not touch home).
- Reference (read-only): `docs/design/prototype_version_2.html` `#pricing` (lines ~582–683) for card structure + switcher behavior.

## Deliverables
- `src/components/Pricing.astro` + home wiring + nav anchor; `npm run build` green with `#pricing` section in `dist/index.html`.

## Acceptance Criteria
- `/` contains `#pricing` section with 3 tiers and working monthly/annual toggle (Growth $239 ↔ $191, no console errors, `aria-pressed` on toggle).
- Zero DeepSeek/Nexus strings in the section (`rg -i deepseek` clean for new component).
- Responsive: no horizontal scroll at 360px; cards stack vertically.
- `npm run build` green; Lighthouse-relevant regression none (toggle is tiny vanilla JS).

## Progress Snapshot
### Delivered So Far
- `Pricing.astro` on `/` between teasers and final CTA (`#pricing` anchor, nav link, `u()`-aware CTAs); Growth $239 ↔ $191 toggle with `aria-pressed`; token CSS only, no Tailwind; `data-event` pricing hooks.
- Verified 2026-10-16: toggle switches $191→$239 + note + pressed states, 0 console errors, responsive stacks at 980px.

### Known Gaps / Deferred Items
- Prices/limits are placeholders — reconcile with real pricing decision + update `docs/content-sources.md` ledger when it lands.

## Risks And Blockers
- Risk: prototype_2 Tailwind classes leak into Astro site → mitigation: rewrite styles in Airmino token CSS (`tokens.css` + scoped `<style>`), no Tailwind dependency.
- Risk: annual-discount math confusion → mitigation: single `monthly`/`annual` source values, derive display (`annual = round(monthly*0.8)`).

## Exit Criteria
- Hands to launch: home complete with pricing; full site = `/` (+pricing) + `/usage/` (+API examples) + case + calculator; update launch checklist (Lighthouse still outstanding).

## Master Plan Sync Notes
- Master plan: Phase 07 → Planned; add Gate E (pricing on home, anchor + toggle verified); M6 milestone.
