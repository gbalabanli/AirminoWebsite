# Airmino Website

Static marketing site for Airmino (decision infrastructure), built with Astro and
deployed via GitHub Actions to GitHub Pages + custom domain (`airmino.com`).

Reference prototype: [`docs/design/index.html`](docs/design/index.html) (read-only).
Plan: [`docs/master_plan.md`](docs/master_plan.md).

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server (`localhost:4321`) |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml` (build → `dist/` → Pages).
Custom domain is set via `public/CNAME`; enable Pages (GitHub Actions source) plus
HTTPS in repo Settings, then point DNS at GitHub Pages.
