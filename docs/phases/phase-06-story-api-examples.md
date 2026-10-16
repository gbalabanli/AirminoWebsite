# Phase 06: Per-Story API Request/Response Examples

## Phase Metadata
- Status: Complete
- Last Updated: 2026-10-16 (implemented + browser-verified)
- Duration Target: 1 session
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
- Inside each Phase 05 Usage Story tab, show a static two-pane example — left: API call (curl for `POST /v1/decide`), right: JSON result — styled like a live call but with zero network.

## Entry Criteria
- Phase 05 complete: `/usage/` with 4 frozen story slugs/anchors.
- Decision API shape fixed: existing `Terminal.astro` transcript (`decision`/`options[]`/`context` → `choice`/`confidence`/`rationale_code`/`escalate`) is the schema reference.
- User decision 2026-10-16: static + copy button (no simulated-live execution).

## In Scope
- New component `StoryApiExample.astro`: props `storySlug`; renders left pane (curl `POST https://airmino.com/v1/decide` with story-specific `decision`, `options`, `context`) + right pane (response JSON with `choice`, `confidence`, `rationale_code`, `escalate`, latency line) + copy button per pane (vanilla JS, clipboard with fallback).
- 4 story-specific payloads in `src/lib/stories.ts` (extend Phase 05 data): fraud detection (`fraud_review`: approve/hold/decline, amount/velocity/geo_mismatch/account_age — reuse Terminal.astro values), support routing (tier_1/tier_2/tier_3 + priority/language/intent), loan pre-qual (approve/review/decline + income/debt_ratio/credit_band), offer selection (offer_a/offer_b/offer_c + segment/recency/cap).
- Two-pane styling adapted from `prototype_version_2.html` `#playground` grid (request/response divide) re-skinned to Airmino tokens (`tokens.css`); dark response pane consistent with `Terminal.astro`.
- `data-event` analytics hooks per copy action (e.g. `story-copy-curl-fraud-detection`) behind existing `Analytics.astro` pattern.

## Out Of Scope
- Live fetch, latency measurement, or simulated typing/streaming animation (explicitly rejected — static only).
- SDK tabs (TypeScript/Python/Go) from prototype_2 hero — curl only for v1; SDKs later.
- Playground/sandbox revival in any form.

## Dependencies
- Upstream: Phase 05 (story slugs, tab panels to host the blocks).
- Reference (read-only): `docs/design/prototype_version_2.html` `#playground` two-pane layout + `src/components/Terminal.astro` transcript style. Never port DeepSeek endpoint/keys (`api.deepseeknexus.com`, `ds_live_*`).

## Deliverables
- `StoryApiExample.astro` + 4 story payloads wired into each `/usage/` tab panel.
- Verification table (4 stories × curl-in/response-out) showing pre-rendered text matches `stories.ts` source exactly.

## Acceptance Criteria
- Each of the 4 tabs contains one two-pane block: left curl request, right JSON response, each with a working copy button (clipboard write or selection fallback, no console errors).
- Zero network requests on copy or tab switch (static only; verify via DevTools network + Playwright console check).
- Page works with JS disabled for reading (pre-rendered text visible; only copy buttons degrade).
- `npm run build` green; Lighthouse-relevant payload unchanged (no blocking JS added to `/usage/` beyond tiny copy handler).

## Progress Snapshot
### Delivered So Far
- `StoryApiExample.astro`: static two-pane (curl left / JSON right) + copy buttons (clipboard + fallback, `Copied` feedback) in all 4 story panels; single delegated handler; `data-event` copy hooks; zero DeepSeek strings; currency keys render 2-decimal (matches Terminal `4820.00`).
- Verified 2026-10-16: 4 panes / 4 tabs / 4 panels in live DOM, copy flips to `Copied`, no fetch/XHR, 0 console errors.

### Known Gaps / Deferred Items
- Response payloads are illustrative fixtures, not live model outputs — label as examples until real traces exist.

## Risks And Blockers
- Risk: curl/response drift from schema → mitigation: single source of truth in `stories.ts`, render both panes from it.
- Risk: copy-button JS ships framework weight → mitigation: vanilla `<script>` inline like `CalculatorIsland.astro`.

## Exit Criteria
- Hands to launch: `/usage/` proof-complete (story + API example + outcome per tab); Phase 07 can proceed in sequence (home edits).

## Master Plan Sync Notes
- Master plan: Phase 06 → Planned; Gate D covers 05+06 (tabs + static API blocks, zero network).
