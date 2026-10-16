# Airmino Website Master Plan

## Planning Metadata
- Last Updated: 2026-10-16
- Planning Horizon: GitHub repo → Astro static launch on custom domain → usage-story + pricing expansion
- Overall Status: Live — https://airmino.com (HTTPS). Phases 05–07 implemented locally + browser-verified, pending push/deploy. Lighthouse measurement outstanding.

## Project Goal
Ship Airmino's public website as a fast Astro static site, deployed from GitHub to a custom domain, positioning Airmino as Decision Infrastructure for automated business decisions (Jev-like). The site must enable self-serve evaluation: proof-first hero, 3-depth landing, objection handling, case-study proof, and ROI calculator — forming the Intent Activation Loop (brand → self-serve → proof → intent signal). Extension (Phases 05–07): Laya-style Usage Stories page (4 workflows, fraud first, no playground), static per-story API request/response examples, and a home pricing matrix.

## Current Status Snapshot
- Complete: Single-file Verdict-branded prototype (`docs/design/index.html`) with 3 logical pages in one HTML file: Home/Platform, Ledgerline case study, ROI calculator (vanilla JS, ~no build).
- Active: Project complete. Live: https://airmino.com (deploy success, HTTPS enforced, cert to 2027-01-12). Repo: https://github.com/gbalabanli/AirminoWebsite (clean, tracking `origin/main`).
- Success check: repo ✓ · 3 routes ✓ · verdict-clean ✓ · links unbroken ✓ · sitemap ✓ · canonical/OG ✓ · Actions green ✓ · Lighthouse unmeasured · custom domain pending DNS.
- Not started: Airmino rebrand, Pages environment enablement, custom-domain DNS cutover, content rewrite, analytics.

## Success Criteria
- GitHub repo exists under `gbalabanli/` with `main` branch, `origin` remote, planning baseline pushed.
- `npm run build` produces static `dist/` with 3 routes: `/`, `/case-studies/ledgerline/`, `/roi-calculator/` (+ shared nav/footer).
- Lighthouse ≥90 on Performance/SEO/Best-practices for `/` on desktop.
- All prototype interactions preserved: page router → real routes, calculator live-updates, responsive breakpoints (980px/600px).
- Verdict → Airmino rename complete, no `Verdict` strings in user-facing copy; prototype ribbon removed.
- GitHub Actions deploys `dist/` to GitHub Pages with custom domain (CNAME + HTTPS enforced).
- Content covers 3–5 Category Entry Points (e.g. fraud triage, support routing, loan pre-qual, offer selection, moderation appeal).
- `/usage/` renders 4 Usage Stories (fraud detection default + support routing, loan pre-qual, offer selection) with zero playground/sandbox execution UI.
- Each story tab shows a static two-pane API example (left curl `POST /v1/decide`, right JSON result) with working copy buttons and zero network requests.
- `/` contains a `#pricing` matrix (Developer $0 / Growth $239 / Enterprise Custom, monthly/annual toggle) re-skinned to Airmino tokens with no DeepSeek/Nexus strings.

## Scope Summary
### In Scope
- GitHub repo creation (`git init -b main`, `gh repo create`, initial push, Pages enablement).
- Astro scaffold (static output), shared layout, design-token port from prototype CSS.
- 3 pages: Home/Platform, Case study (Ledgerline template + scannable/citable structure), ROI calculator (Astro island, vanilla JS or Preact-free).
- Light restyle: Verdict → Airmino brand swap, color/type tune, logo strip + placeholder logos replaced or marked.
- Copy rewrite per intent-activation loop: hero proof numbers, objection block, evaluation-transparency section, business-case CTA.
- GitHub repo wiring, Actions deploy, custom-domain DNS/CNAME/HTTPS, 404 page.
- SEO basics, analytics hooks, PDF-export-friendly case study.
- Usage Stories page (`/usage/`, 4 tabs, fraud first, no playground) + static per-story API examples (curl/JSON + copy).
- Home pricing matrix section (`#pricing`, monthly/annual toggle) ported from `prototype_version_2`.

### Out of Scope
- Backend, CMS, auth, trial signup logic (CTAs link to placeholder trial).
- Live API execution/sandbox, SDK codegen, pricing engine/billing logic.
- Docs site, blog, multi-case CMS (only 1 full case + usage-story teasers).
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
- Assumption: Usage-story metrics + pricing figures are placeholders (prototype/Laya-inspired) until Airmino supplies real measurements and a pricing decision; record in `docs/content-sources.md`.
- Assumption: No live decision endpoint exists — all API examples are static fixtures rendered at build time (zero network by design).
- Decision (2026-10-16): 4 launch stories (fraud, support routing, loan pre-qual, offer selection); moderation appeal deferred as 5th tab. Pricing = home `#pricing` section only (no `/pricing` route). API blocks = static curl + copy (no simulated-live run). Playground/sandbox explicitly excluded.

## Delivery Strategy
Split into 7 forward-only phases: Foundation (repo + scaffold + deploy skeleton) → Home (highest-risk content layout) → Case+Calculator (interactive proof) → Content+Launch (rebrand copy, SEO, domain cutover) → Usage Stories (Laya-style tabs, no playground) → Story API Examples (static curl/JSON blocks) → Home Pricing (prototype_2 matrix as `#pricing` section). Each phase is independently reviewable via `astro build && astro preview`. No circular deps. Phases 02 and 03 share layout/tokens from Phase 01; Phase 04 gates launch; Phases 05→06→07 run sequentially (06 needs 05 story slugs; 07 sequenced after to avoid concurrent home-page edits).

## Phase Index
| Phase | Status | Goal | Depends On | Document |
| --- | --- | --- | --- | --- |
| Phase 01 | Complete | GitHub repo + Astro scaffold + Pages skeleton | None | [phase-01-foundation.md](phases/phase-01-foundation.md) |
| Phase 02 | Complete | Home/Platform page port with 3-depth structure | Phase 01 | [phase-02-home-platform.md](phases/phase-02-home-platform.md) |
| Phase 03 | Complete | Case-study page + interactive ROI calculator | Phase 01 | [phase-03-case-calculator.md](phases/phase-03-case-calculator.md) |
| Phase 04 | Complete | Airmino copy rewrite, SEO/analytics, domain launch | Phase 02, Phase 03 | [phase-04-content-launch.md](phases/phase-04-content-launch.md) |
| Phase 05 | Complete | Usage Stories page, 4 tabs, no playground | Phase 04 | [phase-05-usage-stories.md](phases/phase-05-usage-stories.md) |
| Phase 06 | Complete | Static per-story API request/response blocks | Phase 05 | [phase-06-story-api-examples.md](phases/phase-06-story-api-examples.md) |
| Phase 07 | Complete | Home pricing matrix (`#pricing`) from prototype_2 | Phase 06 | [phase-07-pricing-home.md](phases/phase-07-pricing-home.md) |

## Phase Gates
- Gate A (after 01): repo live + `npm run build` passes, Actions workflow dry-runs, preview URL serves `/` stub.
- Gate B (after 02+03): All 3 routes render from prototype content, calculator math matches prototype `calc()` exactly.
- Gate C (after 04): No `Verdict` strings, Lighthouse ≥90, custom domain HTTPS live, launch checklist signed.
- Gate D (after 05+06): `/usage/` renders 4 tabs (fraud default), each with static curl/JSON example + copy; zero network; zero playground UI.
- Gate E (after 07): `/` contains `#pricing` with 3 tiers + monthly/annual toggle; no DeepSeek/Nexus strings; responsive clean.

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
- Story slugs/anchors (Phase 05: `#fraud-detection`, `#support-routing`, `#loan-prequal`, `#offer-selection`) → frozen before Phase 06 API blocks attach.
- `prototype_version_2.html` `#playground` + `#pricing` are read-only references; DeepSeek endpoints/keys (`api.deepseeknexus.com`, `ds_live_*`) must never be ported.
- Home-page edits sequenced 05 (teasers) → 07 (pricing) to avoid merge conflicts; Phase 06 does not touch home.

## Major Milestones
- M0 Repo live: `gh repo view` resolves, `main` pushed.
- M1 Scaffold live: Astro builds, preview works locally.
- M2 Home parity: `/` matches prototype sections (hero, metrics, speeds, acts, benchmarks, FAQ, cases, CTA).
- M3 Proof parity: case + calculator routes functional.
- M4 Airmino launch: custom domain live with rewritten copy.
- M5 Usage proof live: `/usage/` with 4 stories + static API examples (Gate D).
- M6 Pricing live: home `#pricing` matrix with toggle (Gate E).

## End-State Deliverables
- GitHub repo URL (source of truth) + Astro repo at `AirminoWebsite/` with `src/pages/`, `src/layouts/`, `src/components/`, `public/CNAME`.
- `.github/workflows/deploy.yml` for Pages deploy.
- 4 production routes (`/`, `/usage/`, `/roi-calculator/`, `/gdpr/`) + 404, sitemap, robots, OG tags; home includes `#pricing`. (Ledgerline case-study route removed 2026-10-16; proof consolidated into `/usage/`.)
- Launch checklist + content-source notes (benchmark + story + pricing provenance).

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
- 2026-10-14: M4 site work done — rebrand `2652534` (0 verdict hits, SEO/sitemap/analytics), CI fixed (Pages enabled, npm-install step) and deploy green; live on `github.io`. Phase 04 → Complete* (*DNS cutover + Lighthouse left to you).
- 2026-10-14: Fixed live-subpath rendering (base `/AirminoWebsite/` + `u()` links; verified all-200 + content match live); cutover = set base to `/` + redeploy.
- 2026-10-14: Gate C passed — DNS cutover via Cloudflare API (apex A + www CNAME), base `/`, Pages cname + HTTPS enforced, https://airmino.com verified live. All phases Complete.
- 2026-10-16: Extension planned (Phases 05–07): Usage Stories page (4 tabs incl. fraud detection, no playground) → static per-story API examples (curl left / JSON right + copy) → home pricing matrix from prototype_2. Sequential 05→06→07. Gates D/E + M5/M6 added.
- 2026-10-16: Phases 05–07 implemented + browser-verified locally (build 5 pages green; tabs/deep-link/copy/pricing-toggle OK; 0 console errors; sitemap 4 routes; case/calc unregressed). Gates D/E passed locally — push + deploy + live re-verify outstanding.
- 2026-10-16: Removed Ledgerline case-study route (`ledgerline.astro` + unused `CaseSidebar`/`StatGrid` deleted); nav cut to Usage/ROI/Pricing (Platform entry removed, brand logo still links home); home teasers + calculator/usage CTAs repointed to `/usage/`; `StoryTabs` restyled (numbered gradient pills). 3 routes + 404.
- 2026-10-16: Trust rework — removed SOC 2 / no-credit-card / GDPR badge lines (no certification to cite); new `/gdpr/` page (processing, VPC, no-training, rights, subprocessors, DPA); footer rebuilt as credibility link columns (Product/Trust/Evaluate) + factual bottom line. 4 routes + 404.
- 2026-10-16: Trial signup modal (`TrialModal.astro`, global in `Base.astro`) — all 7 trial CTAs open a popup form (name/email/company/volume/interest/message) submitted via FormSubmit to the trial inbox; sales variant preselects enterprise. GDPR subprocessors + analytics/docs ledger updated.
