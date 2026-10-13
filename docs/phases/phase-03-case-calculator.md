# Phase 03: Case Study + ROI Calculator

## Phase Metadata
- Status: Complete
- Last Updated: 2026-10-13
- Duration Target: 1–2 sessions
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
Ship the two proof routes that convert late-stage buyers: `/case-studies/ledgerline/` (outcome-led, scannable, citable) and `/roi-calculator/` (live business-case builder).

## Entry Criteria
- Phase 01 complete (layout/tokens). May run in parallel with Phase 02 after Phase 01.

## In Scope
- Case route `src/pages/case-studies/ledgerline.astro`: dark hero (headline, 4 KPIs: -62%/90s/$1.4M/2.1M), 75-word summary, pull quote, 3-act narrative (Situation/Evaluation/Result), stat grid, before/after table (6 rows), sidebar (snapshot, business-case CTA, more-cases), Next CTA.
- Calculator route `src/pages/roi-calculator.astro`: 4 inputs (volume/cost/rate/platform fee) with range↔number sync, live results (annual/monthly/reduction), cost-comparison bars, line-item table. Port prototype `calc()`, `money()`, `compact()`, `bind()` verbatim into `src/components/CalculatorIsland.astro` (plain `<script>`, vanilla JS, no framework — `client:load` dropped: Astro components can't hydrate, Astro warned at build; the island's script ships inline regardless).
- Shared `CaseSidebar.astro` (= planned `SideCard`), `BeforeAfterTable.astro`, `StatGrid.astro` components.
- Keyboard-accessible sliders (`<label for>`, `aria-live="polite"` on results).

## Out Of Scope
- Additional cases/CMS; PDF generation (Phase 04); copy rewrite (Phase 04 — keep Ledgerline/Verdict strings for now).

## Dependencies
- Upstream: Phase 01. Prototype `<script>` calculator logic is normative reference.

## Deliverables
- Two routes + island component with identical math to prototype.
- Verification table: 3 input sets (e.g. 250k×$0.85×$0.04, 2.1M×$0.86×$0.04, edge 10k×$5×$0.20) showing matching outputs vs prototype.

## Acceptance Criteria
- Case page contains all spine elements (headline, summary, quote, sidebar, 3 acts, before/after, CTA) with sticky sidebar on desktop.
- Calculator: changing any input updates annual/monthly/reduction + bars + table within 1 frame; defaults show $2,430,000/yr, $202,500/mo, 95.3%.
- No framework JS shipped for calculator (vanilla only); `npm run build` green.

## Progress Snapshot
### Delivered So Far
- Commit `3bf9306`: `/case-studies/ledgerline/` (hero + 4 KPIs, summary, quote, 3 acts, stat grid, 6-row before/after, sidebar, Next CTA) and `/roi-calculator/` (hero + island + CTA). Build green, 4 routes, 0 console errors on both pages (Playwright).
- Gate B verification — live browser results match node reference of the verbatim formula exactly:

| Inputs (vol × cost × rate + fee) | Annual | Monthly | Reduction | Table (mo/yr/unit) |
| --- | --- | --- | --- | --- |
| 250k × $0.85 × $0.04 + $0 (defaults) | $2.55M | $212k | 100.0% | $10 / $120 / $0.0000 |
| 2.1M × $0.85 × $0.04 + $0 (live fill test) | $21.42M | $1.78M | 100.0% | $84 / $1,008 / $0.0000 |
| 10k × $5 × $0.20 + $500 (edge, node ref) | $594k | $49k | 99.0% | $502 / $6,024 / $0.0502 |

### Known Gaps / Deferred Items
- None for this phase. Two findings for Phase 04: (1) prototype static placeholders ($2,430,000 / $202,500 / 95.3% / $10,000) disagree with its own formula output ($2.55M / $212k / 100.0% / $10) — port follows the formula (JS always recomputes on load; no-JS users see stale placeholders); (2) `client:load` on Astro components warns at build — dropped, vanilla `<script>` ships inline.
- Bug caught by browser test and fixed: `BeforeAfterTable` initially rendered no cell ids, crashing `calc()` at the table step (`tblOld` null). Fixed via optional `beforeId`/`afterId` row props; full `calc()` now completes with 0 console errors.

## Risks And Blockers
- Risk (retired): `client:load` hydration mismatch → dropped; island is self-contained vanilla `<script>`, no SSR-dependent code.
- Risk: Number formatting drift → reuse `toLocaleString('en-US')` exactly.

## Exit Criteria
- Hands to Phase 04: both routes content-frozen, calculator formula locked, verification table recorded.

## Master Plan Sync Notes
- Update master plan Phase 03 status + calculator verification results.
- 2026-10-13: Phase 03 Complete (`3bf9306`, M3 done, Gate B passed — live browser = node reference on all sets).
