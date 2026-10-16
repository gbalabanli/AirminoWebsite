# Airmino Website — Content Sources & Placeholder Ledger

Every number on the site today comes from the `Verdict` prototype
(`docs/design/index.html`). **All of them are unverified placeholders** until
Airmino supplies real measurements. Do not present them as measured facts in
sales contexts.

## Provenance
| Location | Figure | Status | Must be replaced by |
| --- | --- | --- | --- |
| Hero | 1M decisions/hour, $0.04/1k | Assumption | Airmino load-test report |
| Hero terminal | 88ms sample response | Assumption | Real `POST /v1/decide` trace |
| Metrics | 90ms p50, 140ms p99 | Assumption | Benchmark harness output |
| Metrics | $0.04/1k, tiers to $0.018 | Assumption | Pricing decision |
| Metrics | 100% schema-valid, 0 retraining | Assumption | Product/eng sign-off |
| Benchmarks table | All 7 rows (LLM/rules/classifier/Airmino) | Assumption | Open benchmark harness + appendix |
| Case hero/KPIs | -62%, 90s, $1.4M, 2.1M/mo | Removed 2026-10-16 | Ledgerline case-study page deleted; fraud proof now the `/usage/` fraud-detection story |
| Case table | 6 before/after rows | Removed 2026-10-16 | Same as above |
| Calculator defaults | 250k/mo, $0.85, $0.04, $0 fee | Assumption | Representative customer profile |
| Logo strip | LEDGERLINE, Northwind, ARCADIA, … | Assumption | Real customer logos + permission |
| Usage stories | All 4 narratives + outcome stats (-62%/-41%/3.2×/+23%) | Assumption | Customer agreement + measured data |
| Story API fixtures | All curl/response payloads + latencies | Assumption | Real `POST /v1/decide` traces |
| Pricing matrix | Developer $0 / Growth $239 / Enterprise Custom + limits | Assumption | Pricing decision |
| GDPR page | 30-day log retention, privacy@airmino.com, control mappings under NDA | Assumption | Legal/eng sign-off + real privacy contact |
| Trial form | Recipient dashzeofficial@gmail.com via FormSubmit (address visible in client JS) | Assumption | Confirm inbox + click FormSubmit activation email after first submission |
| Trust claims | SOC 2 Type II badges | Removed 2026-10-16 | No certification to cite — replaced with footer credibility links + GDPR page |

## Known prototype inconsistency (kept, not fixed)
The prototype's **static calculator placeholders** ($2,430,000/yr, $202,500/mo,
95.3%, $10,000/mo table) disagree with its **own formula**, which computes
$2.55M/yr, $212k/mo, 100.0%, $10/mo from the same defaults (rate $0.04 is *per
thousand*: (250,000/1,000) × $0.04 = $10). The port follows the formula — the
live values are the truth; the static text only shows for no-JS users. The
Phase 04 copy pass keeps formula behavior unchanged; reconcile the defaults
when real pricing lands.

## Customer/sensitivity notes
- The Ledgerline narrative (people, metrics, quotes) is prototype fiction
  until a real customer approves it. Gate any paid promotion on written
  permission.
- Company snapshot rows (headcount, stack, volume) likewise need customer
  confirmation before launch announcements.
