# Phase 05: Usage Stories Page (replaces use-case hub)

## Phase Metadata
- Status: Complete
- Last Updated: 2026-10-16 (implemented + browser-verified)
- Duration Target: 1–2 sessions
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
- Replace the use-case scenario hub concept with a single Usage Stories page (`/usage/`) that shows how Jev-style decisioning is used, modeled on the Laya demo story layout (tabs per workflow, no playground/sandbox).

## Entry Criteria
- Phases 01–04 complete: `Base.astro` + tokens + 3 routes live at https://airmino.com.
- Story list locked by user 2026-10-16: fraud detection, support routing, loan pre-qual, offer selection (fraud first/default).

## In Scope
- New route `src/pages/usage.astro`: header (what a Usage Story is), tab bar with 4 stories (fraud detection default), per-story panel: problem line → `POST /v1/decide` summary → outcome metrics + link to ROI calculator / Ledgerline case where relevant.
- New components: `StoryTabs.astro` (accessible tablist, keyboard arrows, `aria-selected`, hash-deep-link per story), story content data file (e.g. `src/lib/stories.ts`) with decision/options/context/outcome per story.
- Nav: add `Usage` link (`Base.astro` nav-links, via `u('/usage/')`); sitemap picks it up automatically.
- Home: repoint `CaseTeasers.astro` placeholder cards 2–3 (Meridian/Byteline, currently non-interactive) to the matching `/usage/` tabs; keep Ledgerline card → case study.
- SEO: per-route `<title>`/meta/OG/canonical (`canonicalPath='/usage/'`), excluir playground-related copy.

## Out Of Scope
- Per-story API request/response code blocks (Phase 06); pricing (Phase 07).
- Any live/interactive playground or sandbox execution (explicitly removed per user decision).
- New case-study pages beyond Ledgerline; CMS.

## Dependencies
- Upstream: Phase 01 (layout/tokens), Phase 02 (home teaser structure), Phase 04 (Airmino copy voice, SEO pattern).
- External: story outcome numbers are placeholders until Airmino supplies real measurements (record in `docs/content-sources.md`).
- Reference: Laya demo tab UX (input → decision → outcome) as layout inspiration only; `docs/design/prototype_version_2.html` playground is explicitly NOT ported.

## Deliverables
- `src/pages/usage.astro` + `StoryTabs.astro` + `src/lib/stories.ts` rendering 4 tabbed stories with fraud detection default.
- Updated `Base.astro` nav + `CaseTeasers.astro` links; `npm run build` green with `/usage/` in `dist/` + sitemap.

## Acceptance Criteria
- `/usage/` renders 4 tabs in order (fraud, support routing, loan pre-qual, offer selection); fraud panel visible on load with no JS errors.
- Tabs keyboard-operable (arrow keys move, Enter/Space selects); each tab deep-linkable via hash; no horizontal scroll at 360px.
- No playground/sandbox UI or `executeApiCall`-style live execution exists anywhere on the page.
- `npm run build` green; sitemap lists `/usage/`; all internal links resolve.

## Progress Snapshot
### Delivered So Far
- `/usage/` live: `src/pages/usage.astro` + `StoryTabs.astro` + `src/lib/stories.ts` (4 tabs, fraud default, keyboard + hash deep-links); nav `Usage` link; home teaser cards 2–3 repointed to `/usage/#loan-prequal` + `/usage/#support-routing` (Meridian card recast as Northwind loan-prequal to match story catalogue).
- Verified 2026-10-16: build green (5 pages), Playwright tab-switch + deep-link OK, 0 console errors, sitemap lists `/usage/`.

### Known Gaps / Deferred Items
- Story metrics are prototype-grade placeholders; reconcile when real customer data lands.
- Moderation appeal (5th entry point) deferred — add as 5th tab later without restructuring.

## Risks And Blockers
- Risk: scope creep back toward interactive sandbox → guard by acceptance criterion (zero execution UI).
- Risk: tab JS breaks no-JS render → mitigation: default fraud panel server-rendered; tabs progressive-enhancement only.

## Exit Criteria
- Hands to Phase 06: stable story slugs + tab anchors (`#fraud-detection`, `#support-routing`, `#loan-prequal`, `#offer-selection`) frozen as anchors for API example blocks.

## Master Plan Sync Notes
- Master plan: Phase 05 → Planned; add Gate D (after 05+06), M5 milestone; extend success criteria with usage-story coverage.
