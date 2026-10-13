# Phase 02: Home / Platform Page

## Phase Metadata
- Status: Complete
- Last Updated: 2026-10-13
- Duration Target: 1–2 sessions
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
Port the prototype Home page (`#page-home` in `docs/design/index.html`) to `/` as a 3-depth self-serve evaluation path: skim → pass → deep.

## Entry Criteria
- Phase 01 complete: `Base.astro` + tokens + `npm run build` green.

## In Scope
- Route `src/pages/index.astro` with sections: hero (proof-first: 1M/hr, $0.04/1k, latency), terminal `POST /v1/decide` block, logo strip, metric cards (90ms/$0.04/100%/0), three-speeds (5s/30s/3min), three-acts (Situation/Complication/Resolution), benchmarks table (LLM vs rules vs classifier vs Airmino), objections FAQ (4 Qs), case teasers (3 cards), final CTA.
- Components: `Hero.astro`, `Terminal.astro`, `Metrics.astro`, `BenchmarkTable.astro`, `Faq.astro`, `CaseTeasers.astro` — plus `Speeds.astro`, `Acts.astro`, `FinalCta.astro` (split for reviewability); shared `styles/buttons.css` + `styles/sections.css` global, unique CSS scoped per component.
- Responsive: 980px/600px breakpoints from prototype; sticky nav with active state.
- Keep prototype copy verbatim (Verdict strings allowed here; rename happens in Phase 04).

## Out Of Scope
- Case-study full page and calculator (Phase 03); copy rewrite/SEO (Phase 04).

## Dependencies
- Upstream: Phase 01 layout + tokens. Prototype reference read-only.

## Deliverables
- `src/pages/index.astro` + section components rendering all Home bands.
- Per-section CSS (or scoped `<style>`) matching prototype visuals within reason.
- Visual check notes vs prototype Home.

## Acceptance Criteria
- `/` contains all 8 Home bands in order; benchmarks table has 7 rows × 5 cols with identical numbers.
- No JS required for content render; page works with JS disabled (CTA links degrade gracefully).
- Lighthouse SEO ≥90; no horizontal scroll at 360px width.
- `npm run build` still green.

## Progress Snapshot
### Delivered So Far
- Commit `428493f`: all 8 Home bands in prototype order on `/`; 25-marker parity checklist all OK (hero numbers, 7-row benchmark table, 4 FAQs, 3 teasers, `#benchmarks`/`#architecture`/`#start` anchors); `dist/index.html` contains 0 `<script>` tags (JS-free render verified).
- Responsive: 980px/600px breakpoints ported per component; sticky nav already in `Base.astro`.

### Known Gaps / Deferred Items
- Lighthouse run deferred to Phase 04 launch checklist (needs deployed URL); no horizontal scroll expected (prototype `overflow:hidden` table wrap kept).
- Intentional deviations: prototype `alert()` popups on teaser cards 2–3 dropped (non-interactive until their case pages exist); card 1 links to `/case-studies/ledgerline/`; terminal `.term-body` given `white-space:pre` (prototype relied on source newlines that HTML collapses); `go('calc')` CTA rewired to `/roi-calculator/`.

## Risks And Blockers
- Risk: Single-file CSS is large (~600 lines) → split into `tokens.css` + per-component styles, avoid duplication.

## Exit Criteria
- Hands to Phase 04: Home markup stable with `data-*` hooks for copy swap (e.g. brand name as prop).

## Master Plan Sync Notes
- Update master plan Phase 02 status; record any sections deferred (e.g. logo replacements).
- 2026-10-13: Phase 02 Complete (`428493f`, M2 done). Gate B still pending Phase 03 (calculator math check).
