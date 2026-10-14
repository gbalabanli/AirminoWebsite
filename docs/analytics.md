# Airmino Website — Analytics & Intent Signals

## Provider
**Plausible** (recommended): privacy-friendly, no cookie banner in most
jurisdictions, supports custom events out of the box. Any provider that can
ingest named click events works — the hooks below are provider-agnostic.

## Setup
The site emits **zero analytics scripts** unless configured at build time:

```powershell
$env:PUBLIC_ANALYTICS_DOMAIN = "airmino.com"
npm run build
```

With `PUBLIC_ANALYTICS_DOMAIN` set, `src/components/Analytics.astro` loads
Plausible (`script.tagged-events.js`; override via `PUBLIC_PLAUSIBLE_SRC` for
self-hosted Plausible) and installs a delegated click listener that forwards
every `[data-event]` click as a Plausible custom event **and** as an
`airmino:intent` `CustomEvent` on `document` (for CRM/webhook bridges).

## CTA ladder → events
| Buyer stage | CTA location | `data-event` |
| --- | --- | --- |
| Low (researching) | Hero “Read the architecture paper” | `cta-architecture` |
| Low (researching) | Case “Read the architecture paper” | `cta-architecture` |
| Medium (comparing) | Final “Estimate your savings” | `cta-estimate` |
| Medium (comparing) | Case “Estimate your savings” | `cta-estimate` |
| Medium (comparing) | Sidebar “Open calculator” | `cta-open-calculator` |
| High (ready to pilot) | Hero / Final / Calc “Start … trial” | `cta-start-trial` |
| Proof (late-stage) | Teaser + calc “Ledgerline case” links | `case-open-ledgerline` |

## Recommended funnels
1. **Evaluation path:** `/` → `cta-estimate` → `cta-open-calculator` → `cta-start-trial`
2. **Proof path:** `case-open-ledgerline` → `cta-estimate` → `cta-start-trial`
3. **Skipped-demo signal:** case-study scroll depth + calculator use *without*
   `cta-start-trial` = buyer building an internal business case → targeted
   follow-up with context-rich messaging (per the intent-activation loop).

`calculator-input` (debounced input on volume/cost/rate) is intentionally not
wired — add it only if volume-tier pricing analysis needs it.
