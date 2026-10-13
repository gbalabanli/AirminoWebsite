# Airmino Website Master Plan

## Planning Metadata
- Last Updated: 2026-10-13
- Planning Horizon: GitHub repo → Astro static launch on custom domain
- Overall Status: In Progress (M0–M3 done: repo, scaffold, Home, proof routes; Phase 04 content+launch pending)

## Project Goal
Ship Airmino's public website as a fast Astro static site, deployed from GitHub to a custom domain, positioning Airmino as Decision Infrastructure for automated business decisions (Jev-like). The site must enable self-serve evaluation: proof-first hero, 3-depth landing, objection handling, case-study proof, and ROI calculator — forming the Intent Activation Loop (brand → self-serve → proof → intent signal).

## Current Status Snapshot
- Complete: Single-file Verdict-branded prototype (`docs/design/index.html`) with 3 logical pages in one HTML file: Home/Platform, Ledgerline case study, ROI calculator (vanilla JS, ~no build).
- Active: Phase 03 Complete (M3 done, Gate B passed `3bf9306`). Repo live: https://github.com/gbalabanli/AirminoWebsite (public, `main`). Working tree clean, tracking `origin/main`.
- Next: Phase 04 (Airmino copy rewrite, SEO/analytics, custom-domain cutover).
- Not started: Airmino rebrand, Pages environment enablement, custom-domain DNS cutover, content rewrite, analytics.

## Success Criteria
- GitHub repo exists under `gbalabanli/` with `main` branch, `origin` remote, planning baseline pushed.
- `npm run build` produces static `dist/` with 3 routes: `/`, `/case-studies/ledgerline/`, `/roi-calculator/` (+ shared nav/footer).
- Lighthouse ≥90 on Performance/SEO/Best-practices for `/` on desktop.
- All prototype interactions preserved: page router → real routes, calculator live-updates, responsive breakpoints (980px/600px).
- Verdict → Airmino rename complete, no `Verdict` strings in user-facing copy; prototype ribbon removed.
- GitHub Actions deploys `dist/` to GitHub Pages with custom domain (CNAME + HTTPS enforced).
- Content covers 3–5 Category Entry Points (e.g. fraud triage, support routing, loan pre-qual, offer selection, moderation appeal).

## Scope Summary
### In Scope
- GitHub repo creation (`git init -b main`, `gh repo create`, initial push, Pages enablement).
- Astro scaffold (static output), shared layout, design-token port from prototype CSS.
- 3 pages: Home/Platform, Case study (Ledgerline template + scannable/citable structure), ROI calculator (Astro island, vanilla JS or Preact-free).
- Light restyle: Verdict → Airmino brand swap, color/type tune, logo strip + placeholder logos replaced or marked.
- Copy rewrite per intent-activation loop: hero proof numbers, objection block, evaluation-transparency section, business-case CTA.
- GitHub repo wiring, Actions deploy, custom-domain DNS/CNAME/HTTPS, 404 page.
- SEO basics, analytics hooks, PDF-export-friendly case study.

### Out of Scope
- Backend, CMS, auth, trial signup logic (CTAs link to placeholder trial).
- Docs site, blog, pricing engine, multi-case CMS (only 1 full case + 2 teasers).
- Model/API work — website only.
- Full visual rebrand (new identity system) — deferred; light restyle only.

## Assumptions And Open Questions
- Assumption: Repo defaults to `gbalabanli/AirminoWebsite` (public) unless user names otherwise; org-vs-project Pages type decided in Phase 01.
- Assumption: Custom domain is `airmino.com` or subdomain — actual apex to be confirmed in Phase 01; CNAME file updated accordingly.
- Assumption: Astro v4+ with `output: 'static'`, no SSR adapter; GitHub Pages via `actions/deploy-pages`.
- Assumption: Prototype numbers ($0.04/1k, 90ms p50, 140ms p99, Ledgerline -62%/90s/$1.4M) are placeholders to keep until Airmino provides real benchmarks.
- Open question: Exact repo name/visibility (defaults above) and who controls DNS for the custom domain?
- Open question: Airmino logo/wordmark + accent color — keep `#3B5BFF`/`#00C896` or swap?
- Open question: Analytics provider (Plausible/PostHog/GA) for intent signals (case reads, calculator usage, pricing visits)?

## Delivery Strategy
Split into 4 forward-only phases: Foundation (repo + scaffold + deploy skeleton) → Home (highest-risk content layout) → Case+Calculator (interactive proof) → Content+Launch (rebrand copy, SEO, domain cutover). Each phase is independently reviewable via `astro build && astro preview`. No circular deps. Phases 02 and 03 share layout/tokens from Phase 01; Phase 04 gates launch.

## Phase Index
| Phase | Status | Goal | Depends On | Document |
| --- | --- | --- | --- | --- |
| Phase 01 | Complete | GitHub repo + Astro scaffold + Pages skeleton | None | [phase-01-foundation.md](phases/phase-01-foundation.md) |
| Phase 02 | Complete | Home/Platform page port with 3-depth structure | Phase 01 | [phase-02-home-platform.md](phases/phase-02-home-platform.md) |
| Phase 03 | Complete | Case-study page + interactive ROI calculator | Phase 01 | [phase-03-case-calculator.md](phases/phase-03-case-calculator.md) |
| Phase 04 | Planned | Airmino copy rewrite, SEO/analytics, domain launch | Phase 02, Phase 03 | [phase-04-content-launch.md](phases/phase-04-content-launch.md) |

## Phase Gates
- Gate A (after 01): repo live + `npm run build` passes, Actions workflow dry-runs, preview URL serves `/` stub.
- Gate B (after 02+03): All 3 routes render from prototype content, calculator math matches prototype `calc()` exactly.
- Gate C (after 04): No `Verdict` strings, Lighthouse ≥90, custom domain HTTPS live, launch checklist signed.

## Quality Targets
- Static-only: no server runtime; all JS progressive-enhancement islands.
- Performance: ≤150KB critical CSS+JS per route (prototype is single-file ~large; split per-page).
- Accessibility: semantic landmarks, keyboard-operable calculator sliders, contrast AA.
- Maintainability: tokens in one CSS file, no duplicated nav/footer.

## Cross-Phase Dependencies
- GitHub repo + `origin/main` (Phase 01) → required by all later phases for push/preview URLs.
- Design tokens + base layout (Phase 01) → consumed by Phases 02/03, frozen before Phase 04 copy pass.
- Prototype `docs/design/index.html` is read-only reference for all phases; never edit in place.
- Custom-domain DNS (Phase 01 decision) → enforced in Phase 04 cutover.
- Calculator formula (`calc()` in prototype `<script>`) → must be ported verbatim in Phase 03, verified in Phase 04.

## Major Milestones
- M0 Repo live: `gh repo view` resolves, `main` pushed.
- M1 Scaffold live: Astro builds, preview works locally.
- M2 Home parity: `/` matches prototype sections (hero, metrics, speeds, acts, benchmarks, FAQ, cases, CTA).
- M3 Proof parity: case + calculator routes functional.
- M4 Airmino launch: custom domain live with rewritten copy.

## End-State Deliverables
- GitHub repo URL (source of truth) + Astro repo at `AirminoWebsite/` with `src/pages/`, `src/layouts/`, `src/components/`, `public/CNAME`.
- `.github/workflows/deploy.yml` for Pages deploy.
- 3 production routes + 404, sitemap, robots, OG tags.
- Launch checklist + content-source notes (benchmark provenance).

## Global Risks And Decisions
- Risk: Prototype is one 2000+-line HTML file — port errors likely. Mitigation: phase-by-phase visual diff vs `docs/design/index.html`.
- Risk: Custom-domain DNS delay blocks launch. Mitigation: ship to `<org>.github.io` first, cut over in Phase 04.
- Decision: Light restyle (not full rebrand) per user 2026-10-13 — keeps schedule, defers identity work.
- Decision: Website + content scope (not ops-heavy) — analytics/SEO included, no backend.

## Change Log
- 2026-10-13: Initial plan created (split layout). Scope locked: Astro static + GitHub custom domain + light Airmino restyle + content rewrite.
- 2026-10-13: Added GitHub repo creation to Phase 01 (git init + `gh repo create` + push + Pages); M0 added; repo default `gbalabanli/AirminoWebsite` (public).
- 2026-10-13: M0 done — repo https://github.com/gbalabanli/AirminoWebsite live (public, `main`, baseline `b1b9adc`); Phase 01 → In Progress.
- 2026-10-13: M1 done, Gate A passed — Astro 7.3.8 scaffold `2c4e37d` (build green, preview HTTP 200, workflow pushed); Phase 01 → Complete.
- 2026-10-13: M2 done — Home port `428493f` (9 components, 25-marker parity OK, 0 script tags); Phase 02 → Complete. Gate B pending Phase 03.
- 2026-10-13: M3 done, Gate B passed — case + calculator `3bf9306` (live browser = node reference; null-id crash caught and fixed); Phase 03 → Complete.
