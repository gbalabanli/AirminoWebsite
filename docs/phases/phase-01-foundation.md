# Phase 01: Foundation — GitHub Repo + Astro Scaffold + Deploy Skeleton

## Phase Metadata
- Status: In Progress (repo live; Astro scaffold pending)
- Last Updated: 2026-10-13
- Duration Target: 1 short session
- Related Master Plan: [../master_plan.md](../master_plan.md)

## Objective
Create the GitHub repo for `AirminoWebsite/`, then stand up a clean Astro static site in it that builds to `dist/` with a GitHub Pages deploy skeleton (Actions + CNAME placeholder), so Phases 02–04 have a stable base.

## Entry Criteria
- Project root `AirminoWebsite/` exists; prototype reference at `docs/design/index.html` untouched.
- Node 18+ and npm available; `gh` authed (verified `gbalabanli` on 2026-10-13).
- Repo name + visibility + Pages type (org vs project page) decided — defaults below if unanswered.

## In Scope
- GitHub repo creation: `git init -b main`, `gh repo create <name> --public|--private --source=. --push`, branch protection note, `git remote -v` recorded.
- Pages source decision recorded (org page `<user>.github.io` vs project page + `base:` value).
- `npm create astro@latest` (minimal, static output), TypeScript strict, `output: 'static'`.
- Base layout: `src/layouts/Base.astro` (nav, footer, ribbon slot), token CSS port (`src/styles/tokens.css` from prototype `:root` + reset).
- `astro.config.mjs` with `site:` set to custom-domain placeholder + `base: '/'`.
- `public/CNAME` placeholder, `public/robots.txt`, 404 page stub.
- `.github/workflows/deploy.yml` (build + `actions/deploy-pages`), `.nvmrc`/engines note.
- Local verify: `npm run build && npm run preview`.

## Out Of Scope
- Page content ports (Phases 02/03); Airmino copy rewrite (Phase 04); DNS cutover (Phase 04).

## Dependencies
- Upstream: GitHub repo must exist before scaffold push (forward-only: repo → scaffold → deploy skeleton).
- External: repo name/visibility decision; custom-domain apex decision (may proceed with placeholder, flag as assumption).

## Deliverables
- GitHub repo live (`gh repo view` URL recorded), `main` branch, initial push of `docs/` planning baseline.
- Astro project files (`package.json`, `astro.config.mjs`, `src/`, `public/`).
- `src/layouts/Base.astro` + `src/styles/tokens.css` matching prototype palette/type scale.
- `.github/workflows/deploy.yml` + `public/CNAME`.
- Build log showing `dist/index.html` emitted.

## Acceptance Criteria
- `gh repo view` resolves; `git remote -v` shows `origin`; `main` pushed with planning baseline.
- `npm install && npm run build` succeeds with zero errors; `dist/` contains `index.html` + `404.html`.
- `npm run preview` serves stub home at localhost with nav/footer rendering.
- Actions workflow YAML validates (no secret refs missing); CNAME contains single-line domain placeholder.
- No `docs/design/index.html` modifications.

## Progress Snapshot
### Delivered So Far
- GitHub repo `gbalabanli/AirminoWebsite` (public) created 2026-10-13: https://github.com/gbalabanli/AirminoWebsite
- Local `git init -b main`, identity `gbalabanli <gbalabanli@users.noreply.github.com>`, baseline commit `b1b9adc` (`.gitignore` + `docs/`) pushed, `main` tracking `origin/main`.

### Known Gaps / Deferred Items
- Astro scaffold, `Base.astro` + tokens, `astro.config.mjs`, `public/CNAME`, Actions workflow — still pending in this phase.

## Risks And Blockers
- Risk: repo name collision or wrong visibility (public vs private for a marketing site) → confirm before `gh repo create`; default public.
- Risk: `npm create astro` prompts block automation → use `--template minimal --typescript strict --install --git` non-interactive flags.
- Risk: Pages base-path mismatch for project vs org pages → decide `base` now, record in master plan.

## Exit Criteria
- Hands to Phase 02/03: working `Base.astro` layout + tokens + build/preview commands documented in README snippet.

## Master Plan Sync Notes
- Update master plan Phase 01 → In Progress/Complete, record actual domain placeholder + Astro version.
- 2026-10-13: repo live at https://github.com/gbalabanli/AirminoWebsite (public, `main`); master plan M0 done.
