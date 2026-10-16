/* Usage-story catalogue for /usage/ (Phase 05) and per-story API
   fixtures (Phase 06). All metrics are placeholders until Airmino supplies
   real measurements — see docs/content-sources.md. */

export interface Story {
  slug: string;
  label: string;
  company: string;
  headline: string;
  problem: string;
  decision: string;
  options: string[];
  context: Record<string, string | number | boolean>;
  choice: string;
  confidence: number;
  rationaleCode: string;
  escalate: boolean;
  latencyMs: number;
  outcomeStat: string;
  outcomeLabel: string;
  outcomeNote: string;
}

export const STORIES: Story[] = [
  {
    slug: 'fraud-detection',
    label: 'Fraud detection',
    company: 'Payments · Fraud review',
    headline: 'Fraud review that holds the risky payment, not the good customer.',
    problem:
      'Velocity spikes and geo mismatches bury analysts in false positives — good customers get blocked while real fraud waits 4 hours in queue.',
    decision: 'fraud_review',
    options: ['approve', 'hold', 'decline'],
    context: {
      amount: 4820.0,
      velocity_1h: 7,
      geo_mismatch: true,
      account_age_days: 3,
    },
    choice: 'hold',
    confidence: 0.94,
    rationaleCode: 'VELOCITY_ANOMALY',
    escalate: true,
    latencyMs: 88,
    outcomeStat: '-62%',
    outcomeLabel: 'false positives blocking good customers',
    outcomeNote: 'Review time 4 hours → 90 seconds. Same call shape as the homepage hero — production traffic looks like this.',
  },
  {
    slug: 'support-routing',
    label: 'Support routing',
    company: 'Support · Ticket routing',
    headline: 'Every ticket lands with the tier that can actually solve it.',
    problem:
      'Taxonomy changes break rule-based routers overnight — billing disputes land in tier 1, bounce twice, and CSAT sinks before anyone retrains a model.',
    decision: 'ticket_route',
    options: ['tier_1', 'tier_2', 'tier_3'],
    context: {
      channel: 'chat',
      priority: 'high',
      intent: 'billing_dispute',
      tenure_months: 14,
    },
    choice: 'tier_2',
    confidence: 0.91,
    rationaleCode: 'INTENT_BILLING_COMPLEX',
    escalate: false,
    latencyMs: 76,
    outcomeStat: '-41%',
    outcomeLabel: 'misrouted tickets after taxonomy changes',
    outcomeNote: 'Median route time 12 seconds. New tiers are just new options[] — no retraining.',
  },
  {
    slug: 'loan-prequal',
    label: 'Loan pre-qual',
    company: 'Lending · Pre-qualification',
    headline: 'Pre-qualification decisions in seconds, with an audit trail.',
    problem:
      'Manual pre-qual takes days and drifts by underwriter — borderline files stall while clear approvals wait behind them.',
    decision: 'loan_prequal',
    options: ['approve', 'review', 'decline'],
    context: {
      income_annual: 85000,
      debt_ratio: 0.31,
      credit_band: 'B',
      employment_years: 4,
    },
    choice: 'review',
    confidence: 0.83,
    rationaleCode: 'DEBT_RATIO_EDGE',
    escalate: true,
    latencyMs: 92,
    outcomeStat: '3.2×',
    outcomeLabel: 'faster pre-qualification than manual review',
    outcomeNote: 'Edge cases escalate with the reason code attached — underwriters see why.',
  },
  {
    slug: 'offer-selection',
    label: 'Offer selection',
    company: 'Growth · Offer selection',
    headline: 'The right offer for the segment, chosen per decision — not per quarter.',
    problem:
      'Static segments serve one offer to everyone for a quarter — high-value customers get the generic 10%-off while looked-like twins convert elsewhere.',
    decision: 'offer_select',
    options: ['offer_a', 'offer_b', 'offer_c'],
    context: {
      segment: 'high_value',
      recency_days: 6,
      cap_remaining: 2,
    },
    choice: 'offer_b',
    confidence: 0.89,
    rationaleCode: 'SEGMENT_LIFT',
    escalate: false,
    latencyMs: 81,
    outcomeStat: '+23%',
    outcomeLabel: 'offer accept rate vs static segments',
    outcomeNote: 'Caps and eligibility are just context fields — the decision stays schema-valid.',
  },
];

/* Currency-like keys always render with 2 decimals (matches the home
   Terminal transcript, e.g. "amount": 4820.00). */
const MONEY_KEYS = new Set(['amount', 'income_annual']);

function contextLines(context: Story['context']): string {
  return Object.entries(context)
    .map(([k, v]) => {
      let rendered: string;
      if (typeof v === 'string') rendered = `"${v}"`;
      else if (MONEY_KEYS.has(k)) rendered = v.toFixed(2);
      else rendered = String(v);
      return `      "${k}": ${rendered}`;
    })
    .join(',\n');
}

/** Static curl request text for a story (left pane, Phase 06). */
export function storyCurl(s: Story): string {
  return [
    'curl -X POST https://airmino.com/v1/decide \\',
    '  -H "Authorization: Bearer $AIRMINO_KEY" \\',
    '  -H "Content-Type: application/json" \\',
    "  -d '{",
    `    "decision": "${s.decision}",`,
    `    "options": [${s.options.map((o) => `"${o}"`).join(', ')}],`,
    '    "context": {',
    contextLines(s.context),
    '    }',
    "  }'",
  ].join('\n');
}

/** Static JSON response text for a story (right pane, Phase 06). */
export function storyResponse(s: Story): string {
  return [
    '{',
    `  "choice": "${s.choice}",`,
    `  "confidence": ${s.confidence.toFixed(2)},`,
    '  "calibrated": true,',
    `  "rationale_code": "${s.rationaleCode}",`,
    `  "escalate": ${String(s.escalate)}`,
    '}',
    '',
    `// 200 OK · ${s.latencyMs}ms · schema-valid`,
  ].join('\n');
}

export function getStory(slug: string): Story {
  const found = STORIES.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown story slug: ${slug}`);
  return found;
}
