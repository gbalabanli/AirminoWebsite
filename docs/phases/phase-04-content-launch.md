# Phase 04: Airmino Content + Launch

## Phase Metadata
- Status: Planned
- Last Updated: 2026-10-13
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

## Risks And Blockers
- Risk: Placeholder benchmark numbers ship as fact → add `Assumption:` footnote or `docs/content-sources.md` marking unverified figures.
- Risk: DNS propagation delay → keep `*.github.io` fallback live until cutover verified.

## Exit Criteria
- Project complete: master plan Overall Status → Complete; repo is the source of truth for airmino domain.

## Master Plan Sync Notes
- Update master plan: Phase 04 status, Overall Status, Success Criteria check-off, Change Log entry, domain + analytics decisions.
