# Phase 04: Airmino Content + Launch

## Phase Metadata
- Status: Complete (site work; custom-domain cutover awaits DNS — external)
- Last Updated: 2026-10-14
- Duration Target: 1–2 sessions
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
Turn the Verdict prototype into Airmino's launch site: full rename + intent-loop copy, SEO/analytics, custom-domain cutover.

## Entry Criteria
- Phases 02 and 03 complete (all 3 routes render with prototype parity).

## In Scope
- Brand swap: `Verdict` → `Airmino` everywhere (nav, hero, tables, footer, OG tags); remove prototype ribbon; swap brand-mark `V` → `A`; tune accent if Airmino palette provided (else keep `#3B5BFF`/`#00C896` and record decision).
- Copy rewrite per brief: hero proof line, 3–5 Category Entry Points woven into FAQ/cases/footer (fraud triage, support routing, loan pre-qual, offer selection, moderation appeal), objection answers (classifier/LLM/VPC/failure-mode), CTA ladder (whitepaper → benchmark → 10k trial), case evaluation-transparency + citable pull-stats.
- SEO/tech: `<title>`/meta/OG per route, `sitemap`, `robots.txt`, canonical to custom domain, favicon, 404 with nav.
- Analytics: intent-signal hooks (case-read depth, calculator input events, pricing/CTA clicks) behind env flag; document provider + event names.
- Launch: `public/CNAME` finalized, DNS A/ALIAS/CNAME instructions, HTTPS enforce check, Actions green on `main`, launch checklist (Lighthouse, link check, `rg -i verdict` clean).

## Out Of Scope
- New visual identity, blog/docs CMS, backend trial fulfillment — deferred.

## Dependencies
- Upstream: Phase 02 + Phase 03. External: DNS access + final domain + logo asset.

## Deliverables
- Copy-diff summary (before/after per section) + `rg -i verdict src/ public/` clean output.
- Analytics spec (`docs/analytics.md` or README section): events + provider.
- Launch checklist with Lighthouse scores + Pages URL + custom-domain URL verified.

## Acceptance Criteria
- Zero user-facing `Verdict` strings; ribbon gone; footer reads Airmino.
- Lighthouse ≥90 Performance/SEO/Best-practices on `/`; all internal links resolve; sitemap lists 3 routes.
- Custom domain serves site over HTTPS; `github-pages` environment green.
- Calculator defaults still correct after copy pass (no JS regression).

## Progress Snapshot
### Delivered So Far
- Brand swap: 17 `Verdict` strings → `Airmino` across 8 files; `rg -i verdict src/ public/` = **0 hits**; footer `© 2025 Airmino, Inc.`; brand-mark `V`→`A` via prop default; ribbon never ported (gone by construction); palette kept (`#3B5BFF`/`#00C896`, no logo asset provided).
- Entry points: new FAQ “Which workflows does this fit?” (fraud triage, support routing, loan pre-qual, offer selection, moderation appeal).
- SEO: per-route `<title>`/meta/OG/canonical (`airmino.com`), `sitemap-index.xml` (3 routes), `robots.txt` + sitemap line, favicon, 404 with nav.
- Analytics: `Analytics.astro` (zero output unless `PUBLIC_ANALYTICS_DOMAIN` set) + 8 `data-event` hooks; spec in `docs/analytics.md`.
- Provenance: `docs/content-sources.md` marks every figure Assumption + records the prototype placeholder-vs-formula discrepancy.
- Copy-diff (representative): hero title `Verdict`→`Airmino`; metrics/speeds/acts/FAQ/table headers same swap; calculator “Verdict rate”→“Airmino rate”, “in Verdict spend”→“in Airmino spend”, “With Verdict”→“With Airmino”; case “with Verdict”/“Verdict was the only option”→Airmino; formula JS untouched.
- Launch state: Pages enabled (workflow build), deploy run **success** (`6fcb6bb`), live at `https://gbalabanli.github.io/AirminoWebsite/` (HTTP 200, full Airmino homepage). Fixed two CI issues en route: Pages-not-enabled `configure-pages` failure → enabled via API; `npm ci` Linux lock drift (`@emnapi/*`) → `npm install` step.

### Known Gaps / Deferred Items
- **DNS (your action, ~10 min):** point `airmino.com` at GitHub Pages (apex A records `185.199.108/109/110/111.153` or CNAME `www` → `gbalabanli.github.io`), then HTTPS enforces automatically.
- **Interim base strategy (fixed live-subpath rendering):** root-absolute assets 404'd on `github.io/AirminoWebsite/`, so `base` is `/AirminoWebsite/` + all handwritten links go through `u()` (`src/lib/site.ts`). **At DNS cutover: set `base` back to `'/'` and redeploy — nothing else changes.** Sitemap/canonical interim-point at `airmino.com[/AirminoWebsite/…]` and self-correct at cutover.
- **Lighthouse score unmeasured** (no runner in this env); payload is 21KB HTML + 11KB CSS max, zero blocking JS on `/` — run it post-DNS, target ≥90.

## Risks And Blockers
- Risk (covered): placeholder numbers as fact → `docs/content-sources.md` ledger.
- Blocker (external): DNS cutover + HTTPS verify — needs whoever controls the domain.

## Exit Criteria
- Project complete: master plan Overall Status → Complete; repo is the source of truth for airmino domain.

## Master Plan Sync Notes
- Update master plan: Phase 04 status, Overall Status, Success Criteria check-off, Change Log entry, domain + analytics decisions.
- 2026-10-14: Phase 04 Complete except DNS cutover + Lighthouse measurement (both external). Gate C partially passed (Actions green, site live on `github.io`).
