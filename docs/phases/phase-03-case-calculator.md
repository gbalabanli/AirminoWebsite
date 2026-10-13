# Phase 03: Case Study + ROI Calculator

## Phase Metadata
- Status: Planned
- Last Updated: 2026-10-13
- Duration Target: 1–2 sessions
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
Ship the two proof routes that convert late-stage buyers: `/case-studies/ledgerline/` (outcome-led, scannable, citable) and `/roi-calculator/` (live business-case builder).

## Entry Criteria
- Phase 01 complete (layout/tokens). May run in parallel with Phase 02 after Phase 01.

## In Scope
- Case route `src/pages/case-studies/ledgerline.astro`: dark hero (headline, 4 KPIs: -62%/90s/$1.4M/2.1M), 75-word summary, pull quote, 3-act narrative (Situation/Evaluation/Result), stat grid, before/after table (6 rows), sidebar (snapshot, business-case CTA, more-cases), Next CTA.
- Calculator route `src/pages/roi-calculator.astro`: 4 inputs (volume/cost/rate/platform fee) with range↔number sync, live results (annual/monthly/reduction), cost-comparison bars, line-item table. Port prototype `calc()`, `money()`, `compact()`, `bind()` verbatim into `src/components/CalculatorIsland.astro` (client:load, vanilla JS, no framework).
- Shared `SideCard.astro`, `BeforeAfterTable.astro`, `StatGrid.astro` components.
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

## Risks And Blockers
- Risk: `client:load` hydration mismatch → keep island self-contained, no SSR-dependent IDs.
- Risk: Number formatting drift → reuse `toLocaleString('en-US')` exactly.

## Exit Criteria
- Hands to Phase 04: both routes content-frozen, calculator formula locked, verification table recorded.

## Master Plan Sync Notes
- Update master plan Phase 03 status + calculator verification results.
