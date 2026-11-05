import {
  DEFAULT_LOCALE,
  normalizeLocale,
  type Locale,
  type LocaleInput,
} from './index.ts';

export type { LocaleInput };

export type HomeTextPart =
  | { readonly kind: 'text'; readonly value: string }
  | { readonly kind: 'strong'; readonly value: string }
  | { readonly kind: 'code'; readonly value: string };

export interface HomeCopy {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly titleBefore: string;
    readonly titleHighlight: string;
    readonly titleAfter: string;
    readonly lede: string;
    readonly price: string;
    readonly startTrial: string;
    readonly architecture: string;
    readonly micro: string;
    readonly logosIntro: string;
    readonly logos: readonly string[];
  };
  readonly metrics: {
    readonly kicker: string;
    readonly title: string;
    readonly description: string;
    readonly items: readonly {
      readonly value: string;
      readonly tone: 'a' | 'm';
      readonly label: readonly HomeTextPart[];
    }[];
  };
  readonly speeds: {
    readonly kicker: string;
    readonly title: string;
    readonly description: string;
    readonly items: readonly {
      readonly tag: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly acts: {
    readonly kicker: string;
    readonly title: string;
    readonly items: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly benchmark: {
    readonly kicker: string;
    readonly title: string;
    readonly description: string;
    readonly headers: readonly string[];
    readonly rows: readonly {
      readonly label: string;
      readonly cells: readonly {
        readonly value: string;
        readonly kind: 'number' | 'yes' | 'no' | 'plain';
      }[];
    }[];
    readonly note: string;
  };
  readonly faq: {
    readonly kicker: string;
    readonly title: string;
    readonly description: string;
    readonly items: readonly {
      readonly question: string;
      readonly answer: readonly HomeTextPart[];
    }[];
  };
  readonly cases: {
    readonly kicker: string;
    readonly title: string;
    readonly items: readonly {
      readonly category: string;
      readonly title: string;
      readonly valueLabel: string;
      readonly more: string;
    }[];
  };
  readonly pricing: {
    readonly kicker: string;
    readonly title: string;
    readonly description: string;
    readonly billingLabel: string;
    readonly monthly: string;
    readonly annual: string;
    readonly save: string;
    readonly perMonth: string;
    readonly mostPopular: string;
    readonly annualNote: string;
    readonly monthlyNote: string;
    readonly tiers: readonly {
      readonly name: string;
      readonly description: string;
      readonly features: readonly string[];
      readonly cta: string;
    }[];
    readonly enterpriseAmount: string;
  };
  readonly finalCta: {
    readonly title: string;
    readonly description: string;
    readonly startTrial: string;
    readonly estimate: string;
    readonly micro: string;
  };
}

const englishHomeCopy: HomeCopy = {
  meta: {
    title: 'Airmino — Decision Infrastructure for Automated Operations',
    description: 'Decision infrastructure for automated operations.',
  },
  hero: {
    eyebrow: 'Decision infrastructure',
    titleBefore: 'Make ',
    titleHighlight: '1 million',
    titleAfter: ' operational decisions per hour.',
    lede: 'Calibrated, machine-readable judgments your systems can act on. No text generation. No hallucination.',
    price: '$0.04 per thousand calls.',
    startTrial: 'Start 10,000-decision trial',
    architecture: 'Read the architecture paper →',
    micro: 'Calibrated confidence · Schema-valid outputs · VPC or self-hosted',
    logosIntro: 'Powering decisions across',
    logos: ['PAYMENTS', 'LENDING', 'SUPPORT', 'INSURANCE', 'MARKETPLACES', 'SAAS'],
  },
  metrics: {
    kicker: 'By the numbers',
    title: 'Built for the throughput your ops team actually needs.',
    description: 'Airmino returns a single calibrated choice from a set you define at request time — never free-form text.',
    items: [
      {
        value: '90ms',
        tone: 'a',
        label: [
          { kind: 'text', value: 'p50 latency. p99 holds at ' },
          { kind: 'strong', value: '140ms' },
          { kind: 'text', value: ' under sustained load.' },
        ],
      },
      {
        value: '$0.04',
        tone: 'm',
        label: [{ kind: 'text', value: 'Per 1,000 decisions. Volume tiers down to $0.018.' }],
      },
      {
        value: '100%',
        tone: 'a',
        label: [{ kind: 'text', value: 'Schema-valid outputs. Zero parse failures, zero retries.' }],
      },
      {
        value: '0',
        tone: 'm',
        label: [{ kind: 'text', value: 'Retraining cycles required to add a new option or rule.' }],
      },
    ],
  },
  speeds: {
    kicker: 'Read at your own depth',
    title: 'Everything an evaluator needs, at three levels of detail.',
    description: 'Technical buyers skim, scan, then dig. This page is structured so all three happen without a sales call.',
    items: [
      {
        tag: '5 sec',
        title: 'The headline',
        description: "1M decisions/hour at $0.04 per thousand. Calibrated, schema-valid, no hallucination. That's the whole pitch.",
      },
      {
        tag: '30 sec',
        title: 'The shape of it',
        description: 'You define options at request time. Airmino returns one choice plus a confidence score and a machine-readable rationale code. Your systems act on it directly.',
      },
      {
        tag: '3 min',
        title: 'The architecture',
        description: 'Calibration methodology, benchmark harness, failure modes, deployment topology, and the full comparison against prompted LLMs and rules engines.',
      },
    ],
  },
  acts: {
    kicker: 'The problem',
    title: 'Your decision layer is the bottleneck nobody budgets for.',
    items: [
      {
        number: '01 — SITUATION',
        title: "Rules engines don't generalize",
        description: 'Every new edge case means another branch, another deploy, another quarter of maintenance. The rule tree grows faster than the team maintaining it.',
      },
      {
        number: '02 — COMPLICATION',
        title: "LLMs don't fit operations",
        description: "Prompted models are slow, expensive, and return text you have to parse. When parsing fails at 3am, someone gets paged. That's not a decision layer — it's a liability.",
      },
      {
        number: '03 — RESOLUTION',
        title: 'Define choices at request time',
        description: 'Airmino takes your options as input and returns exactly one, with a calibrated probability. Add a new option by changing the payload — not by retraining a model.',
      },
    ],
  },
  benchmark: {
    kicker: 'Benchmarks',
    title: 'How it compares, measured the same way.',
    description: 'All figures from the open benchmark harness. Methodology and raw traces available in the architecture paper.',
    headers: ['Metric', 'Prompted LLM', 'Rules engine', 'Fine-tuned classifier', 'Airmino'],
    rows: [
      {
        label: 'p50 latency',
        cells: [
          { value: '1,800ms', kind: 'number' },
          { value: '12ms', kind: 'number' },
          { value: '40ms', kind: 'number' },
          { value: '90ms', kind: 'number' },
        ],
      },
      {
        label: 'p99 latency',
        cells: [
          { value: '6,400ms', kind: 'number' },
          { value: '30ms', kind: 'number' },
          { value: '120ms', kind: 'number' },
          { value: '140ms', kind: 'number' },
        ],
      },
      {
        label: 'Cost per 1,000',
        cells: [
          { value: '$3.20', kind: 'number' },
          { value: '$0.01', kind: 'number' },
          { value: '$0.02', kind: 'number' },
          { value: '$0.04', kind: 'number' },
        ],
      },
      {
        label: 'Parseable output',
        cells: [
          { value: '71%', kind: 'number' },
          { value: '100%', kind: 'number' },
          { value: '100%', kind: 'number' },
          { value: '100%', kind: 'number' },
        ],
      },
      {
        label: 'Hallucination risk',
        cells: [
          { value: 'High', kind: 'no' },
          { value: 'None', kind: 'yes' },
          { value: 'None', kind: 'yes' },
          { value: 'None', kind: 'yes' },
        ],
      },
      {
        label: 'New options without retraining',
        cells: [
          { value: 'Yes', kind: 'yes' },
          { value: 'No', kind: 'no' },
          { value: 'No', kind: 'no' },
          { value: 'Yes', kind: 'yes' },
        ],
      },
      {
        label: 'Calibrated confidence',
        cells: [
          { value: 'No', kind: 'no' },
          { value: '—', kind: 'plain' },
          { value: 'Varies', kind: 'plain' },
          { value: 'Yes', kind: 'yes' },
        ],
      },
    ],
    note: 'Harness: 50,000 held-out decisions · 3 domains · single A100 node · batch size 1',
  },
  faq: {
    kicker: 'Before you ask',
    title: 'The questions your technical evaluator will raise.',
    description: "Answered here so you don't need a call to get to the interesting part.",
    items: [
      {
        question: 'How is this different from a classifier?',
        answer: [
          { kind: 'text', value: 'A classifier is trained on a fixed label set. Airmino takes ' },
          { kind: 'code', value: 'options[]' },
          { kind: 'text', value: ' as a request parameter, so the same model handles "approve/hold/decline" at 9am and "tier_1/tier_2/tier_3" at 9:05. No retraining, no redeploy.' },
        ],
      },
      {
        question: "What's the accuracy versus an LLM?",
        answer: [{ kind: 'text', value: 'On structured decision tasks we match or exceed prompted GPT-class models on top-1 accuracy, with calibration error under 2%. Full confidence intervals and per-domain breakdowns are in the benchmark appendix.' }],
      },
      {
        question: 'Can it run inside our infrastructure?',
        answer: [{ kind: 'text', value: 'Yes. Deploy in your VPC or fully self-hosted. The model is a single container with no external calls — no data leaves your network, no egress costs, no third-party subprocessor.' }],
      },
      {
        question: "What's the failure mode?",
        answer: [
          { kind: 'text', value: 'Airmino can only return one of the options you supplied, in a fixed schema. It cannot invent a category or emit free text. When confidence falls below your threshold, it returns ' },
          { kind: 'code', value: 'escalate: true' },
          { kind: 'text', value: ' instead of guessing.' },
        ],
      },
      {
        question: 'Which workflows does this fit?',
        answer: [{ kind: 'text', value: 'Anywhere a system must pick one option from a set you define: fraud triage, support ticket routing, loan pre-qualification, offer selection, content-moderation appeal. If the decision fits in a request payload and the answer fits a schema, it fits Airmino.' }],
      },
    ],
  },
  cases: {
    kicker: 'Proof',
    title: 'What it looks like in production.',
    items: [
      {
        category: 'Payments · Fraud review',
        title: 'Fraud review time cut from 4 hours to 90 seconds',
        valueLabel: 'false positives blocking good customers',
        more: 'See the usage story →',
      },
      {
        category: 'Support · Ticket routing',
        title: 'Ticket routing that adapts when the taxonomy changes',
        valueLabel: 'misrouted tickets after taxonomy changes',
        more: 'See the usage story →',
      },
      {
        category: 'Lending · Pre-qualification',
        title: 'Pre-qualification decisions in seconds, with an audit trail',
        valueLabel: 'faster pre-qualification than manual review',
        more: 'See the usage story →',
      },
    ],
  },
  pricing: {
    kicker: 'Transparent billing',
    title: 'Predictable platform tiers.',
    description: 'Scale from MVP to enterprise without overage surprises. Every tier is the same decision API.',
    billingLabel: 'Billing period',
    monthly: 'Monthly',
    annual: 'Annual',
    save: 'Save 20%',
    perMonth: '/ month',
    mostPopular: 'Most popular',
    annualNote: 'billed annually',
    monthlyNote: 'billed monthly',
    tiers: [
      {
        name: 'Developer',
        description: 'Free tier for MVPs & side projects.',
        features: ['100,000 requests / mo', '3-region edge replication', 'Community support'],
        cta: 'Get started free',
      },
      {
        name: 'Growth',
        description: 'For scaling teams with heavy API volume.',
        features: ['10,000,000 requests / mo', 'Global anycast routing', '99.99% SLA uptime', 'Dedicated solutions channel'],
        cta: 'Start 14-day free trial',
      },
      {
        name: 'Enterprise',
        description: 'Private VPC isolation & custom SLAs.',
        features: ['Unlimited request volume', 'Private isolated VPC cluster', '99.999% SLA uptime', 'BAA & security audits'],
        cta: 'Talk to sales',
      },
    ],
    enterpriseAmount: 'Custom',
  },
  finalCta: {
    title: 'Run 10,000 decisions on your own data.',
    description: 'No credit card, no sales call. Upload a sample, define your options, and see the calibration report in under ten minutes.',
    startTrial: 'Start free trial',
    estimate: 'Estimate your savings →',
    micro: 'VPC or self-hosted deployment · No training on your data',
  },
};

export const HOME_COPY = {
  en: englishHomeCopy,
  tr: {
    meta: {
      title: 'Airmino — Otomatik Operasyonlar için Karar Altyapısı',
      description: 'Otomatik operasyonlar için karar altyapısı.',
    },
    hero: {
      eyebrow: 'Karar altyapısı',
      titleBefore: 'Saatte ',
      titleHighlight: '1 milyon',
      titleAfter: ' operasyonel karar alın.',
      lede: 'Sistemlerinizin doğrudan işleyebileceği, kalibre edilmiş ve makine tarafından okunabilir kararlar. Metin üretimi yok. Halüsinasyon yok.',
      price: 'Bin çağrı başına $0.04.',
      startTrial: '10.000 karar denemesini başlat',
      architecture: 'Mimari makalesini okuyun →',
      micro: 'Kalibre edilmiş güven · Şema geçerli çıktılar · VPC veya kendi sunucunuzda',
      logosIntro: 'Kararları destekliyoruz',
      logos: ['ÖDEMELER', 'KREDİ', 'DESTEK', 'SİGORTA', 'PAZARYERLERİ', 'SAAS'],
    },
    metrics: {
      kicker: 'Rakamlarla',
      title: 'Operasyon ekibinizin gerçekten ihtiyaç duyduğu işlem hacmi için tasarlandı.',
      description: 'Airmino, istek anında tanımladığınız bir kümeden tek bir kalibre edilmiş seçenek döndürür — asla serbest biçimli metin değil.',
      items: [
        { value: '90ms', tone: 'a', label: [{ kind: 'text', value: 'p50 gecikme. Sürekli yük altında p99 değeri ' }, { kind: 'strong', value: '140ms' }, { kind: 'text', value: "'de kalır." }] },
        { value: '$0.04', tone: 'm', label: [{ kind: 'text', value: '1.000 karar başına. Hacim kademeleri $0.018 seviyesine kadar iner.' }] },
        { value: '100%', tone: 'a', label: [{ kind: 'text', value: 'Şema geçerli çıktılar. Sıfır ayrıştırma hatası, sıfır yeniden deneme.' }] },
        { value: '0', tone: 'm', label: [{ kind: 'text', value: 'Yeni seçenek veya kural eklemek için gereken yeniden eğitim döngüsü.' }] },
      ],
    },
    speeds: {
      kicker: 'İstediğiniz ayrıntı düzeyinde okuyun',
      title: 'Bir değerlendiricinin ihtiyaç duyduğu her şey, üç ayrıntı seviyesinde.',
      description: 'Teknik alıcılar önce göz gezdirir, sonra tarar, ardından derine iner. Bu sayfa, satış görüşmesi olmadan üçünü de mümkün kılar.',
      items: [
        { tag: '5 sec', title: 'Başlık', description: 'Saatte 1 milyon karar, bin karar başına $0.04. Kalibre edilmiş, şema geçerli, halüsinasyonsuz. Tüm teklif bu.' },
        { tag: '30 sec', title: 'Ana hatları', description: 'Seçenekleri istek anında tanımlarsınız. Airmino bir seçenek, güven skoru ve makine tarafından okunabilir gerekçe kodu döndürür. Sistemleriniz doğrudan bununla hareket eder.' },
        { tag: '3 min', title: 'Mimari', description: 'Kalibrasyon yöntemi, kıyaslama düzeneği, hata modları, dağıtım topolojisi ve istemli LLM’ler ile kural motorlarına karşı eksiksiz karşılaştırma.' },
      ],
    },
    acts: {
      kicker: 'Sorun',
      title: 'Karar katmanınız, kimsenin bütçe ayırmadığı darboğazdır.',
      items: [
        { number: '01 — DURUM', title: 'Kural motorları genellemez', description: 'Her yeni uç durum başka bir dal, başka bir dağıtım ve başka bir bakım çeyreği demektir. Kural ağacı, onu sürdüren ekipten daha hızlı büyür.' },
        { number: '02 — KARMAŞA', title: 'LLM’ler operasyonlara uymaz', description: 'İstemli modeller yavaş, pahalıdır ve ayrıştırmanız gereken metin döndürür. Ayrıştırma sabah 3’te başarısız olduğunda birinin çağrı alması gerekir. Bu bir karar katmanı değil — bir yükümlülüktür.' },
        { number: '03 — ÇÖZÜM', title: 'Seçenekleri istek anında tanımlayın', description: 'Airmino seçeneklerinizi girdi olarak alır ve kalibre edilmiş olasılıkla tam olarak birini döndürür. Yeni seçenek eklemek için modeli yeniden eğitmek yerine yükü değiştirin.' },
      ],
    },
    benchmark: {
      kicker: 'Kıyaslamalar',
      title: 'Aynı yöntemle ölçüldüğünde karşılaştırması.',
      description: 'Tüm rakamlar açık kıyaslama düzeneğinden alınmıştır. Yöntem ve ham izler mimari makalesinde mevcut.',
      headers: ['Metrik', 'İstemli LLM', 'Kural motoru', 'İnce ayarlı sınıflandırıcı', 'Airmino'],
      rows: [
        { label: 'p50 gecikme', cells: [{ value: '1,800ms', kind: 'number' }, { value: '12ms', kind: 'number' }, { value: '40ms', kind: 'number' }, { value: '90ms', kind: 'number' }] },
        { label: 'p99 gecikme', cells: [{ value: '6,400ms', kind: 'number' }, { value: '30ms', kind: 'number' }, { value: '120ms', kind: 'number' }, { value: '140ms', kind: 'number' }] },
        { label: '1.000 başına maliyet', cells: [{ value: '$3.20', kind: 'number' }, { value: '$0.01', kind: 'number' }, { value: '$0.02', kind: 'number' }, { value: '$0.04', kind: 'number' }] },
        { label: 'Ayrıştırılabilir çıktı', cells: [{ value: '71%', kind: 'number' }, { value: '100%', kind: 'number' }, { value: '100%', kind: 'number' }, { value: '100%', kind: 'number' }] },
        { label: 'Halüsinasyon riski', cells: [{ value: 'Yüksek', kind: 'no' }, { value: 'Yok', kind: 'yes' }, { value: 'Yok', kind: 'yes' }, { value: 'Yok', kind: 'yes' }] },
        { label: 'Yeniden eğitim olmadan yeni seçenekler', cells: [{ value: 'Evet', kind: 'yes' }, { value: 'Hayır', kind: 'no' }, { value: 'Hayır', kind: 'no' }, { value: 'Evet', kind: 'yes' }] },
        { label: 'Kalibre edilmiş güven', cells: [{ value: 'Hayır', kind: 'no' }, { value: '—', kind: 'plain' }, { value: 'Değişir', kind: 'plain' }, { value: 'Evet', kind: 'yes' }] },
      ],
      note: 'Düzenek: 50.000 elde tutulmuş karar · 3 alan · tek A100 düğümü · parti boyutu 1',
    },
    faq: {
      kicker: 'Sormadan önce',
      title: 'Teknik değerlendiricinizin soracağı sorular.',
      description: 'İlginç kısma ulaşmak için görüşmeye gerek kalmasın diye burada yanıtladık.',
      items: [
        { question: 'Bu, sınıflandırıcıdan nasıl farklı?', answer: [{ kind: 'text', value: 'Sınıflandırıcı sabit bir etiket kümesiyle eğitilir. Airmino ' }, { kind: 'code', value: 'options[]' }, { kind: 'text', value: ' parametresini istekle birlikte alır; böylece aynı model sabah 9’da "approve/hold/decline", 9:05’te "tier_1/tier_2/tier_3" seçeneklerini işler. Yeniden eğitim yok, yeniden dağıtım yok.' }] },
        { question: 'Bir LLM’e kıyasla doğruluğu nedir?', answer: [{ kind: 'text', value: 'Yapılandırılmış karar görevlerinde istemli GPT sınıfı modellerin en iyi-1 doğruluğuna yetişir veya onu aşarız; kalibrasyon hatası %2’nin altındadır. Tam güven aralıkları ve alan bazlı dökümler kıyaslama ekindedir.' }] },
        { question: 'Altyapımızın içinde çalışabilir mi?', answer: [{ kind: 'text', value: 'Evet. VPC’nizde veya tamamen kendi sunucunuzda dağıtın. Model, harici çağrıları olmayan tek bir kapsayıcıdır — verileriniz ağınızdan çıkmaz, çıkış maliyeti ve üçüncü taraf alt işlemcisi yoktur.' }] },
        { question: 'Hata modu nedir?', answer: [{ kind: 'text', value: 'Airmino yalnızca sağladığınız seçeneklerden birini, sabit bir şemada döndürebilir. Kategori uyduramaz veya serbest metin üretemez. Güven, eşiğinizin altına düştüğünde tahmin etmek yerine ' }, { kind: 'code', value: 'escalate: true' }, { kind: 'text', value: ' döndürür.' }] },
        { question: 'Hangi iş akışlarına uyar?', answer: [{ kind: 'text', value: 'Tanımladığınız bir kümeden bir seçenek seçmesi gereken her yerde: dolandırıcılık triyajı, destek bileti yönlendirme, kredi ön yeterliliği, teklif seçimi, içerik moderasyonu itirazı. Karar bir istek yüküne, yanıt da bir şemaya sığıyorsa Airmino’ya uyar.' }] },
      ],
    },
    cases: {
      kicker: 'Kanıt',
      title: 'Üretimde nasıl görünüyor.',
      items: [
        { category: 'Ödemeler · Dolandırıcılık incelemesi', title: 'Dolandırıcılık inceleme süresi 4 saatten 90 saniyeye indi', valueLabel: 'iyi müşterileri engelleyen yanlış pozitifler', more: 'Kullanım hikâyesini görün →' },
        { category: 'Destek · Bilet yönlendirme', title: 'Taksonomi değiştiğinde uyum sağlayan bilet yönlendirme', valueLabel: 'taksonomi değişikliklerinden sonra yanlış yönlendirilen biletler', more: 'Kullanım hikâyesini görün →' },
        { category: 'Kredi · Ön yeterlilik', title: 'Denetlenebilir kayıtla saniyeler içinde ön yeterlilik kararları', valueLabel: 'manuel incelemeye göre daha hızlı ön yeterlilik', more: 'Kullanım hikâyesini görün →' },
      ],
    },
    pricing: {
      kicker: 'Şeffaf faturalandırma',
      title: 'Öngörülebilir platform katmanları.',
      description: 'Fazla kullanım sürprizi olmadan MVP’den kurumsala ölçeklenin. Her katman aynı karar API’sini kullanır.',
      billingLabel: 'Faturalandırma dönemi',
      monthly: 'Aylık',
      annual: 'Yıllık',
      save: '%20 tasarruf',
      perMonth: '/ ay',
      mostPopular: 'En popüler',
      annualNote: 'yıllık faturalandırılır',
      monthlyNote: 'aylık faturalandırılır',
      tiers: [
        { name: 'Developer', description: 'MVP’ler ve yan projeler için ücretsiz katman.', features: ['100.000 istek / ay', '3 bölgeli uç replikasyon', 'Topluluk desteği'], cta: 'Ücretsiz başlayın' },
        { name: 'Growth', description: 'Yüksek API hacmine sahip büyüyen ekipler için.', features: ['10.000.000 istek / ay', 'Küresel anycast yönlendirme', '%99,99 SLA çalışma süresi', 'Özel çözümler kanalı'], cta: '14 günlük ücretsiz denemeyi başlat' },
        { name: 'Enterprise', description: 'Özel VPC izolasyonu ve özel SLA’lar.', features: ['Sınırsız istek hacmi', 'Özel izole VPC kümesi', '%99,999 SLA çalışma süresi', 'BAA ve güvenlik denetimleri'], cta: 'Satış ekibiyle görüşün' },
      ],
      enterpriseAmount: 'Özel',
    },
    finalCta: {
      title: 'Kendi verilerinizle 10.000 karar çalıştırın.',
      description: 'Kredi kartı yok, satış görüşmesi yok. Bir örnek yükleyin, seçeneklerinizi tanımlayın ve kalibrasyon raporunu on dakikadan kısa sürede görün.',
      startTrial: 'Ücretsiz denemeyi başlat',
      estimate: 'Tasarrufunuzu tahmin edin →',
      micro: 'VPC veya kendi sunucunuzda dağıtım · Verilerinizle eğitim yok',
    },
  },
  es: {
    meta: {
      title: 'Airmino — Infraestructura de decisiones para operaciones automatizadas',
      description: 'Infraestructura de decisiones para operaciones automatizadas.',
    },
    hero: {
      eyebrow: 'Infraestructura de decisiones',
      titleBefore: 'Toma ',
      titleHighlight: '1 millón',
      titleAfter: ' de decisiones operativas por hora.',
      lede: 'Juicios calibrados y legibles por máquina sobre los que tus sistemas pueden actuar. Sin generación de texto. Sin alucinaciones.',
      price: '$0.04 por mil llamadas.',
      startTrial: 'Comenzar prueba de 10.000 decisiones',
      architecture: 'Leer el documento de arquitectura →',
      micro: 'Confianza calibrada · Salidas válidas según el esquema · VPC o autohospedado',
      logosIntro: 'Impulsando decisiones en',
      logos: ['PAGOS', 'PRÉSTAMOS', 'SOPORTE', 'SEGUROS', 'MARKETPLACES', 'SAAS'],
    },
    metrics: {
      kicker: 'En cifras',
      title: 'Diseñado para el rendimiento que realmente necesita tu equipo de operaciones.',
      description: 'Airmino devuelve una única opción calibrada de un conjunto que defines en cada solicitud; nunca texto libre.',
      items: [
        { value: '90ms', tone: 'a', label: [{ kind: 'text', value: 'Latencia p50. La p99 se mantiene en ' }, { kind: 'strong', value: '140ms' }, { kind: 'text', value: ' con carga sostenida.' }] },
        { value: '$0.04', tone: 'm', label: [{ kind: 'text', value: 'Por 1.000 decisiones. Los niveles por volumen llegan hasta $0.018.' }] },
        { value: '100%', tone: 'a', label: [{ kind: 'text', value: 'Salidas válidas según el esquema. Cero fallos de análisis, cero reintentos.' }] },
        { value: '0', tone: 'm', label: [{ kind: 'text', value: 'Ciclos de reentrenamiento necesarios para añadir una opción o regla.' }] },
      ],
    },
    speeds: {
      kicker: 'Lee al nivel de profundidad que quieras',
      title: 'Todo lo que necesita un evaluador, en tres niveles de detalle.',
      description: 'Los compradores técnicos hojean, escanean y luego profundizan. Esta página permite las tres cosas sin una llamada comercial.',
      items: [
        { tag: '5 sec', title: 'El titular', description: '1M de decisiones por hora a $0.04 por mil. Calibrado, válido según el esquema y sin alucinaciones. Ese es todo el argumento.' },
        { tag: '30 sec', title: 'Cómo funciona', description: 'Defines las opciones en cada solicitud. Airmino devuelve una opción, una puntuación de confianza y un código de justificación legible por máquina. Tus sistemas actúan directamente sobre ello.' },
        { tag: '3 min', title: 'La arquitectura', description: 'Metodología de calibración, sistema de benchmarks, modos de fallo, topología de despliegue y comparación completa con LLM con prompts y motores de reglas.' },
      ],
    },
    acts: {
      kicker: 'El problema',
      title: 'Tu capa de decisiones es el cuello de botella para el que nadie presupuesta.',
      items: [
        { number: '01 — SITUACIÓN', title: 'Los motores de reglas no generalizan', description: 'Cada nuevo caso límite significa otra rama, otro despliegue y otro trimestre de mantenimiento. El árbol de reglas crece más rápido que el equipo que lo mantiene.' },
        { number: '02 — COMPLICACIÓN', title: 'Los LLM no encajan en las operaciones', description: 'Los modelos con prompts son lentos, caros y devuelven texto que tienes que analizar. Cuando el análisis falla a las 3 de la madrugada, alguien recibe una alerta. Eso no es una capa de decisiones: es una responsabilidad.' },
        { number: '03 — RESOLUCIÓN', title: 'Define las opciones en cada solicitud', description: 'Airmino recibe tus opciones y devuelve exactamente una, con una probabilidad calibrada. Añade una opción cambiando el payload, no reentrenando un modelo.' },
      ],
    },
    benchmark: {
      kicker: 'Benchmarks',
      title: 'Cómo se compara, medido de la misma forma.',
      description: 'Todas las cifras proceden del sistema de benchmarks abierto. La metodología y las trazas están disponibles en el documento de arquitectura.',
      headers: ['Métrica', 'LLM con prompt', 'Motor de reglas', 'Clasificador ajustado', 'Airmino'],
      rows: [
        { label: 'Latencia p50', cells: [{ value: '1,800ms', kind: 'number' }, { value: '12ms', kind: 'number' }, { value: '40ms', kind: 'number' }, { value: '90ms', kind: 'number' }] },
        { label: 'Latencia p99', cells: [{ value: '6,400ms', kind: 'number' }, { value: '30ms', kind: 'number' }, { value: '120ms', kind: 'number' }, { value: '140ms', kind: 'number' }] },
        { label: 'Coste por 1.000', cells: [{ value: '$3.20', kind: 'number' }, { value: '$0.01', kind: 'number' }, { value: '$0.02', kind: 'number' }, { value: '$0.04', kind: 'number' }] },
        { label: 'Salida analizable', cells: [{ value: '71%', kind: 'number' }, { value: '100%', kind: 'number' }, { value: '100%', kind: 'number' }, { value: '100%', kind: 'number' }] },
        { label: 'Riesgo de alucinación', cells: [{ value: 'Alto', kind: 'no' }, { value: 'Ninguno', kind: 'yes' }, { value: 'Ninguno', kind: 'yes' }, { value: 'Ninguno', kind: 'yes' }] },
        { label: 'Nuevas opciones sin reentrenamiento', cells: [{ value: 'Sí', kind: 'yes' }, { value: 'No', kind: 'no' }, { value: 'No', kind: 'no' }, { value: 'Sí', kind: 'yes' }] },
        { label: 'Confianza calibrada', cells: [{ value: 'No', kind: 'no' }, { value: '—', kind: 'plain' }, { value: 'Varía', kind: 'plain' }, { value: 'Sí', kind: 'yes' }] },
      ],
      note: 'Sistema: 50.000 decisiones reservadas · 3 dominios · un nodo A100 · tamaño de lote 1',
    },
    faq: {
      kicker: 'Antes de preguntar',
      title: 'Las preguntas que planteará tu evaluador técnico.',
      description: 'Las respondemos aquí para que no necesites una llamada para llegar a lo interesante.',
      items: [
        { question: '¿En qué se diferencia de un clasificador?', answer: [{ kind: 'text', value: 'Un clasificador se entrena con un conjunto fijo de etiquetas. Airmino recibe ' }, { kind: 'code', value: 'options[]' }, { kind: 'text', value: ' como parámetro de la solicitud, por lo que el mismo modelo gestiona "approve/hold/decline" a las 9:00 y "tier_1/tier_2/tier_3" a las 9:05. Sin reentrenamiento ni nuevo despliegue.' }] },
        { question: '¿Cuál es la precisión frente a un LLM?', answer: [{ kind: 'text', value: 'En tareas de decisión estructuradas igualamos o superamos la precisión top-1 de modelos GPT con prompts, con un error de calibración inferior al 2%. Los intervalos de confianza completos y los desgloses por dominio están en el apéndice del benchmark.' }] },
        { question: '¿Puede ejecutarse dentro de nuestra infraestructura?', answer: [{ kind: 'text', value: 'Sí. Despliega en tu VPC o completamente autohospedado. El modelo es un único contenedor sin llamadas externas: ningún dato sale de tu red, no hay costes de salida ni subencargados externos.' }] },
        { question: '¿Cuál es el modo de fallo?', answer: [{ kind: 'text', value: 'Airmino solo puede devolver una de las opciones que proporcionaste, en un esquema fijo. No puede inventar una categoría ni emitir texto libre. Cuando la confianza cae por debajo de tu umbral, devuelve ' }, { kind: 'code', value: 'escalate: true' }, { kind: 'text', value: ' en lugar de adivinar.' }] },
        { question: '¿Para qué flujos de trabajo sirve?', answer: [{ kind: 'text', value: 'Para cualquier lugar donde un sistema deba elegir una opción de un conjunto definido por ti: triaje de fraude, enrutamiento de tickets, precalificación de préstamos, selección de ofertas y apelaciones de moderación de contenido. Si la decisión cabe en un payload y la respuesta en un esquema, sirve para Airmino.' }] },
      ],
    },
    cases: {
      kicker: 'Prueba',
      title: 'Así se ve en producción.',
      items: [
        { category: 'Pagos · Revisión de fraude', title: 'El tiempo de revisión de fraude bajó de 4 horas a 90 segundos', valueLabel: 'falsos positivos que bloquean a buenos clientes', more: 'Ver el caso de uso →' },
        { category: 'Soporte · Enrutamiento de tickets', title: 'Enrutamiento de tickets que se adapta cuando cambia la taxonomía', valueLabel: 'tickets mal dirigidos tras cambios de taxonomía', more: 'Ver el caso de uso →' },
        { category: 'Préstamos · Precalificación', title: 'Decisiones de precalificación en segundos, con trazabilidad', valueLabel: 'precalificación más rápida que la revisión manual', more: 'Ver el caso de uso →' },
      ],
    },
    pricing: {
      kicker: 'Facturación transparente',
      title: 'Niveles de plataforma predecibles.',
      description: 'Escala desde MVP hasta enterprise sin sorpresas por exceso de uso. Todos los niveles usan la misma API de decisiones.',
      billingLabel: 'Periodo de facturación',
      monthly: 'Mensual',
      annual: 'Anual',
      save: 'Ahorra 20%',
      perMonth: '/ mes',
      mostPopular: 'Más popular',
      annualNote: 'facturado anualmente',
      monthlyNote: 'facturado mensualmente',
      tiers: [
        { name: 'Developer', description: 'Nivel gratuito para MVP y proyectos personales.', features: ['100.000 solicitudes / mes', 'Replicación edge en 3 regiones', 'Soporte de la comunidad'], cta: 'Comenzar gratis' },
        { name: 'Growth', description: 'Para equipos en crecimiento con un gran volumen de API.', features: ['10.000.000 solicitudes / mes', 'Enrutamiento anycast global', '99,99% de disponibilidad SLA', 'Canal de soluciones dedicado'], cta: 'Comenzar prueba gratuita de 14 días' },
        { name: 'Enterprise', description: 'Aislamiento VPC privado y SLA personalizados.', features: ['Volumen ilimitado de solicitudes', 'Clúster VPC privado y aislado', '99,999% de disponibilidad SLA', 'BAA y auditorías de seguridad'], cta: 'Hablar con ventas' },
      ],
      enterpriseAmount: 'Personalizado',
    },
    finalCta: {
      title: 'Ejecuta 10.000 decisiones con tus propios datos.',
      description: 'Sin tarjeta de crédito ni llamada comercial. Sube una muestra, define tus opciones y consulta el informe de calibración en menos de diez minutos.',
      startTrial: 'Comenzar prueba gratuita',
      estimate: 'Estima tus ahorros →',
      micro: 'Despliegue en VPC o autohospedado · No entrenamos con tus datos',
    },
  },
  de: {
    meta: {
      title: 'Airmino — Entscheidungsinfrastruktur für automatisierte Abläufe',
      description: 'Entscheidungsinfrastruktur für automatisierte Abläufe.',
    },
    hero: {
      eyebrow: 'Entscheidungsinfrastruktur',
      titleBefore: 'Treffen Sie ',
      titleHighlight: '1 Million',
      titleAfter: ' operative Entscheidungen pro Stunde.',
      lede: 'Kalibrierte, maschinenlesbare Bewertungen, auf die Ihre Systeme direkt reagieren können. Keine Textgenerierung. Keine Halluzinationen.',
      price: '$0.04 pro tausend Aufrufe.',
      startTrial: '10.000-Entscheidungen-Test starten',
      architecture: 'Architekturpapier lesen →',
      micro: 'Kalibrierte Konfidenz · Schema-konforme Ausgaben · VPC oder selbst gehostet',
      logosIntro: 'Entscheidungen für',
      logos: ['ZAHLUNGEN', 'KREDIT', 'SUPPORT', 'VERSICHERUNG', 'MARKTPLÄTZE', 'SAAS'],
    },
    metrics: {
      kicker: 'In Zahlen',
      title: 'Für den Durchsatz entwickelt, den Ihr Betriebsteam tatsächlich braucht.',
      description: 'Airmino gibt eine einzige kalibrierte Auswahl aus einer Menge zurück, die Sie zur Anfragezeit festlegen — niemals freien Text.',
      items: [
        { value: '90ms', tone: 'a', label: [{ kind: 'text', value: 'p50-Latenz. p99 bleibt unter Dauerlast bei ' }, { kind: 'strong', value: '140ms' }, { kind: 'text', value: '.' }] },
        { value: '$0.04', tone: 'm', label: [{ kind: 'text', value: 'Pro 1.000 Entscheidungen. Volumenstufen bis hinunter zu $0.018.' }] },
        { value: '100%', tone: 'a', label: [{ kind: 'text', value: 'Schema-konforme Ausgaben. Keine Parsing-Fehler, keine Wiederholungen.' }] },
        { value: '0', tone: 'm', label: [{ kind: 'text', value: 'Nachtrainingszyklen zum Hinzufügen einer neuen Option oder Regel.' }] },
      ],
    },
    speeds: {
      kicker: 'Lesen Sie so tief, wie Sie möchten',
      title: 'Alles, was ein Prüfer braucht, in drei Detailstufen.',
      description: 'Technische Käufer überfliegen, prüfen und vertiefen sich. Diese Seite ermöglicht alle drei Schritte ohne Verkaufsgespräch.',
      items: [
        { tag: '5 sec', title: 'Die Kurzfassung', description: '1 Mio. Entscheidungen/Stunde für $0.04 pro tausend. Kalibriert, schema-konform, keine Halluzinationen. Das ist die ganze Aussage.' },
        { tag: '30 sec', title: 'Das Prinzip', description: 'Sie definieren Optionen zur Anfragezeit. Airmino gibt eine Auswahl sowie einen Konfidenzwert und einen maschinenlesbaren Begründungscode zurück. Ihre Systeme handeln direkt danach.' },
        { tag: '3 min', title: 'Die Architektur', description: 'Kalibrierungsmethode, Benchmark-Harness, Fehlermodi, Deployment-Topologie und der vollständige Vergleich mit Prompt-LLMs und Regel-Engines.' },
      ],
    },
    acts: {
      kicker: 'Das Problem',
      title: 'Ihre Entscheidungsschicht ist der Engpass, für den niemand budgetiert.',
      items: [
        { number: '01 — SITUATION', title: 'Regel-Engines verallgemeinern nicht', description: 'Jeder neue Sonderfall bedeutet einen weiteren Zweig, ein weiteres Deployment und ein weiteres Wartungsquartal. Der Regelbaum wächst schneller als das Team, das ihn pflegt.' },
        { number: '02 — KOMPLIKATION', title: 'LLMs passen nicht in den Betrieb', description: 'Prompt-Modelle sind langsam, teuer und liefern Text, den Sie parsen müssen. Wenn das Parsing um 3 Uhr morgens fehlschlägt, wird jemand alarmiert. Das ist keine Entscheidungsschicht — es ist ein Risiko.' },
        { number: '03 — LÖSUNG', title: 'Definieren Sie Optionen zur Anfragezeit', description: 'Airmino nimmt Ihre Optionen als Eingabe und gibt genau eine mit kalibrierter Wahrscheinlichkeit zurück. Eine neue Option fügen Sie durch Änderung des Payloads hinzu — nicht durch Nachtraining.' },
      ],
    },
    benchmark: {
      kicker: 'Benchmarks',
      title: 'So schneidet es ab, auf dieselbe Weise gemessen.',
      description: 'Alle Werte stammen aus dem offenen Benchmark-Harness. Methodik und Rohdaten finden Sie im Architekturpapier.',
      headers: ['Metrik', 'Prompt-LLM', 'Regel-Engine', 'Feinabgestimmter Klassifikator', 'Airmino'],
      rows: [
        { label: 'p50-Latenz', cells: [{ value: '1,800ms', kind: 'number' }, { value: '12ms', kind: 'number' }, { value: '40ms', kind: 'number' }, { value: '90ms', kind: 'number' }] },
        { label: 'p99-Latenz', cells: [{ value: '6,400ms', kind: 'number' }, { value: '30ms', kind: 'number' }, { value: '120ms', kind: 'number' }, { value: '140ms', kind: 'number' }] },
        { label: 'Kosten pro 1.000', cells: [{ value: '$3.20', kind: 'number' }, { value: '$0.01', kind: 'number' }, { value: '$0.02', kind: 'number' }, { value: '$0.04', kind: 'number' }] },
        { label: 'Parsible Ausgabe', cells: [{ value: '71%', kind: 'number' }, { value: '100%', kind: 'number' }, { value: '100%', kind: 'number' }, { value: '100%', kind: 'number' }] },
        { label: 'Halluzinationsrisiko', cells: [{ value: 'Hoch', kind: 'no' }, { value: 'Keines', kind: 'yes' }, { value: 'Keines', kind: 'yes' }, { value: 'Keines', kind: 'yes' }] },
        { label: 'Neue Optionen ohne Nachtraining', cells: [{ value: 'Ja', kind: 'yes' }, { value: 'Nein', kind: 'no' }, { value: 'Nein', kind: 'no' }, { value: 'Ja', kind: 'yes' }] },
        { label: 'Kalibrierte Konfidenz', cells: [{ value: 'Nein', kind: 'no' }, { value: '—', kind: 'plain' }, { value: 'Variiert', kind: 'plain' }, { value: 'Ja', kind: 'yes' }] },
      ],
      note: 'Harness: 50.000 zurückgehaltene Entscheidungen · 3 Domänen · einzelner A100-Knoten · Batchgröße 1',
    },
    faq: {
      kicker: 'Bevor Sie fragen',
      title: 'Die Fragen, die Ihr technischer Prüfer stellen wird.',
      description: 'Hier beantwortet, damit Sie für den interessanten Teil kein Gespräch brauchen.',
      items: [
        { question: 'Wie unterscheidet sich das von einem Klassifikator?', answer: [{ kind: 'text', value: 'Ein Klassifikator wird auf einem festen Labelsatz trainiert. Airmino nimmt ' }, { kind: 'code', value: 'options[]' }, { kind: 'text', value: ' als Anfrageparameter, sodass dasselbe Modell um 9 Uhr "approve/hold/decline" und um 9:05 Uhr "tier_1/tier_2/tier_3" verarbeitet. Kein Nachtraining, kein neues Deployment.' }] },
        { question: 'Wie genau ist es im Vergleich zu einem LLM?', answer: [{ kind: 'text', value: 'Bei strukturierten Entscheidungsaufgaben erreichen oder übertreffen wir die Top-1-Genauigkeit von GPT-Modellen mit Prompts, bei einem Kalibrierungsfehler unter 2 %. Vollständige Konfidenzintervalle und Aufschlüsselungen nach Domäne stehen im Benchmark-Anhang.' }] },
        { question: 'Kann es in unserer Infrastruktur laufen?', answer: [{ kind: 'text', value: 'Ja. Stellen Sie es in Ihrer VPC oder vollständig selbst gehostet bereit. Das Modell ist ein einzelner Container ohne externe Aufrufe — keine Daten verlassen Ihr Netzwerk, keine Egress-Kosten, kein Drittanbieter-Subprozessor.' }] },
        { question: 'Wie sieht der Fehlermodus aus?', answer: [{ kind: 'text', value: 'Airmino kann nur eine der von Ihnen gelieferten Optionen in einem festen Schema zurückgeben. Es kann keine Kategorie erfinden oder freien Text ausgeben. Wenn die Konfidenz unter Ihren Schwellenwert fällt, gibt es statt eines Rates ' }, { kind: 'code', value: 'escalate: true' }, { kind: 'text', value: ' zurück.' }] },
        { question: 'Für welche Workflows eignet sich das?', answer: [{ kind: 'text', value: 'Überall dort, wo ein System eine Option aus einer von Ihnen definierten Menge wählen muss: Betrugs-Triage, Support-Ticket-Routing, Kreditvorqualifizierung, Angebotsauswahl und Einsprüche gegen die Inhaltsmoderation. Wenn die Entscheidung in einen Anfrage-Payload und die Antwort in ein Schema passt, passt sie zu Airmino.' }] },
      ],
    },
    cases: {
      kicker: 'Beleg',
      title: 'So sieht es in der Produktion aus.',
      items: [
        { category: 'Zahlungen · Betrugsprüfung', title: 'Betrugsprüfungszeit von 4 Stunden auf 90 Sekunden reduziert', valueLabel: 'Fehlalarme, die gute Kunden blockieren', more: 'Anwendungsfall ansehen →' },
        { category: 'Support · Ticket-Routing', title: 'Ticket-Routing, das sich bei Änderungen der Taxonomie anpasst', valueLabel: 'falsch geroutete Tickets nach Taxonomieänderungen', more: 'Anwendungsfall ansehen →' },
        { category: 'Kredit · Vorqualifizierung', title: 'Vorqualifizierungsentscheidungen in Sekunden mit Prüfprotokoll', valueLabel: 'schnellere Vorqualifizierung als bei manueller Prüfung', more: 'Anwendungsfall ansehen →' },
      ],
    },
    pricing: {
      kicker: 'Transparente Abrechnung',
      title: 'Planbare Plattformstufen.',
      description: 'Skalieren Sie vom MVP bis zum Enterprise-Betrieb ohne Überraschungen bei Mehrverbrauch. Jede Stufe nutzt dieselbe Entscheidungs-API.',
      billingLabel: 'Abrechnungszeitraum',
      monthly: 'Monatlich',
      annual: 'Jährlich',
      save: '20 % sparen',
      perMonth: '/ Monat',
      mostPopular: 'Am beliebtesten',
      annualNote: 'jährlich abgerechnet',
      monthlyNote: 'monatlich abgerechnet',
      tiers: [
        { name: 'Developer', description: 'Kostenlose Stufe für MVPs und Nebenprojekte.', features: ['100.000 Anfragen / Monat', 'Edge-Replikation in 3 Regionen', 'Community-Support'], cta: 'Kostenlos starten' },
        { name: 'Growth', description: 'Für wachsende Teams mit hohem API-Volumen.', features: ['10.000.000 Anfragen / Monat', 'Globales Anycast-Routing', '99,99 % SLA-Verfügbarkeit', 'Dedizierter Lösungskanal'], cta: '14-tägige kostenlose Testversion starten' },
        { name: 'Enterprise', description: 'Private VPC-Isolierung und individuelle SLAs.', features: ['Unbegrenztes Anfragevolumen', 'Privater isolierter VPC-Cluster', '99,999 % SLA-Verfügbarkeit', 'BAA und Sicherheitsprüfungen'], cta: 'Vertrieb kontaktieren' },
      ],
      enterpriseAmount: 'Individuell',
    },
    finalCta: {
      title: 'Führen Sie 10.000 Entscheidungen mit Ihren eigenen Daten aus.',
      description: 'Keine Kreditkarte, kein Verkaufsgespräch. Laden Sie ein Beispiel hoch, definieren Sie Ihre Optionen und sehen Sie den Kalibrierungsbericht in weniger als zehn Minuten.',
      startTrial: 'Kostenlose Testversion starten',
      estimate: 'Einsparungen schätzen →',
      micro: 'VPC oder selbst gehostetes Deployment · Kein Training mit Ihren Daten',
    },
  },
} satisfies Record<Locale, HomeCopy>;

export function getHomeCopy(locale: LocaleInput = DEFAULT_LOCALE): HomeCopy {
  return HOME_COPY[normalizeLocale(locale)];
}
