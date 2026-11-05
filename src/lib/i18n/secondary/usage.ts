import { normalizeLocale, type Locale, type LocaleInput } from '../index.ts';

export type UsageStorySlug =
  | 'fraud-detection'
  | 'support-routing'
  | 'loan-prequal'
  | 'offer-selection';

export interface UsageStoryCopy {
  readonly label: string;
  readonly company: string;
  readonly headline: string;
  readonly problem: string;
  readonly outcomeStat: string;
  readonly outcomeLabel: string;
  readonly outcomeNote: string;
}

export interface UsageCopy {
  readonly page: {
    readonly title: string;
    readonly description: string;
  };
  readonly breadcrumb: {
    readonly platform: string;
    readonly separator: string;
    readonly label: string;
  };
  readonly hero: {
    readonly kicker: string;
    readonly title: string;
    readonly introBeforeApi: string;
    readonly apiPath: string;
    readonly introAfterApi: string;
    readonly staticNote: string;
  };
  readonly tabs: {
    readonly ariaLabel: string;
  };
  readonly api: {
    readonly request: string;
    readonly response: string;
    readonly copy: string;
    readonly copied: string;
    readonly copyRequestLabel: string;
    readonly copyResponseLabel: string;
    readonly statusOk: string;
    readonly statusSuffix: string;
  };
  readonly cta: {
    readonly estimate: string;
    readonly pricing: string;
  };
  readonly stories: Record<UsageStorySlug, UsageStoryCopy>;
}

const englishUsageCopy: UsageCopy = {
  page: {
    title: 'Usage stories — see Airmino decide',
    description:
      'Four worked examples of Airmino decision infrastructure: fraud detection, support routing, loan pre-qualification, and offer selection — each with the exact API call and result.',
  },
  breadcrumb: {
    platform: 'Platform',
    separator: '/',
    label: 'Usage stories',
  },
  hero: {
    kicker: 'Usage stories',
    title: 'See Airmino decide.',
    introBeforeApi: 'Four worked examples of the same API — ',
    apiPath: 'POST /v1/decide',
    introAfterApi:
      ' — applied to four different workflows. Each story shows the problem, the exact call, and the result.',
    staticNote: ' Static examples: nothing here executes or touches a network.',
  },
  tabs: {
    ariaLabel: 'Usage stories',
  },
  api: {
    request: 'Request',
    response: 'Response',
    copy: 'Copy',
    copied: 'Copied',
    copyRequestLabel: 'Copy curl request for {story}',
    copyResponseLabel: 'Copy JSON response for {story}',
    statusOk: '200 OK',
    statusSuffix: 'static example · zero network',
  },
  cta: {
    estimate: 'Estimate your savings',
    pricing: 'See platform pricing →',
  },
  stories: {
    'fraud-detection': {
      label: 'Fraud detection',
      company: 'Payments · Fraud review',
      headline: 'Fraud review that holds the risky payment, not the good customer.',
      problem:
        'Velocity spikes and geo mismatches bury analysts in false positives — good customers get blocked while real fraud waits 4 hours in queue.',
      outcomeStat: '-62%',
      outcomeLabel: 'false positives blocking good customers',
      outcomeNote:
        'Review time 4 hours → 90 seconds. Same call shape as the homepage hero — production traffic looks like this.',
    },
    'support-routing': {
      label: 'Support routing',
      company: 'Support · Ticket routing',
      headline: 'Every ticket lands with the tier that can actually solve it.',
      problem:
        'Taxonomy changes break rule-based routers overnight — billing disputes land in tier 1, bounce twice, and CSAT sinks before anyone retrains a model.',
      outcomeStat: '-41%',
      outcomeLabel: 'misrouted tickets after taxonomy changes',
      outcomeNote: 'Median route time 12 seconds. New tiers are just new options[] — no retraining.',
    },
    'loan-prequal': {
      label: 'Loan pre-qual',
      company: 'Lending · Pre-qualification',
      headline: 'Pre-qualification decisions in seconds, with an audit trail.',
      problem:
        'Manual pre-qual takes days and drifts by underwriter — borderline files stall while clear approvals wait behind them.',
      outcomeStat: '3.2×',
      outcomeLabel: 'faster pre-qualification than manual review',
      outcomeNote: 'Edge cases escalate with the reason code attached — underwriters see why.',
    },
    'offer-selection': {
      label: 'Offer selection',
      company: 'Growth · Offer selection',
      headline: 'The right offer for the segment, chosen per decision — not per quarter.',
      problem:
        'Static segments serve one offer to everyone for a quarter — high-value customers get the generic 10%-off while looked-like twins convert elsewhere.',
      outcomeStat: '+23%',
      outcomeLabel: 'offer accept rate vs static segments',
      outcomeNote: 'Caps and eligibility are just context fields — the decision stays schema-valid.',
    },
  },
};

export const USAGE_COPY: Record<Locale, UsageCopy> = {
  en: englishUsageCopy,
  tr: {
    page: {
      title: 'Kullanım hikâyeleri — Airmino’nun kararlarını görün',
      description:
        'Airmino karar altyapısının dört uygulamalı örneği: dolandırıcılık tespiti, destek yönlendirme, kredi ön yeterliliği ve teklif seçimi — her biri tam API çağrısı ve sonucuyla.',
    },
    breadcrumb: { platform: 'Platform', separator: '/', label: 'Kullanım hikâyeleri' },
    hero: {
      kicker: 'Kullanım hikâyeleri',
      title: 'Airmino’nun nasıl karar verdiğini görün.',
      introBeforeApi: 'Aynı API’nin dört uygulamalı örneği — ',
      apiPath: 'POST /v1/decide',
      introAfterApi:
        ' — dört farklı iş akışında kullanılıyor. Her hikâye sorunu, tam çağrıyı ve sonucu gösterir.',
      staticNote: ' Statik örneklerdir: burada hiçbir şey çalışmaz ve ağa dokunulmaz.',
    },
    tabs: { ariaLabel: 'Kullanım hikâyeleri' },
    api: {
      request: 'İstek',
      response: 'Yanıt',
      copy: 'Kopyala',
      copied: 'Kopyalandı',
      copyRequestLabel: '{story} için curl isteğini kopyala',
      copyResponseLabel: '{story} için JSON yanıtını kopyala',
      statusOk: '200 OK',
      statusSuffix: 'statik örnek · sıfır ağ erişimi',
    },
    cta: { estimate: 'Tasarrufunuzu tahmin edin', pricing: 'Platform fiyatlarını görün →' },
    stories: {
      'fraud-detection': {
        label: 'Dolandırıcılık tespiti',
        company: 'Ödemeler · Dolandırıcılık incelemesi',
        headline: 'İyi müşteriyi değil, riskli ödemeyi bekleten dolandırıcılık incelemesi.',
        problem:
          'Hız artışları ve konum uyuşmazlıkları analistleri yanlış pozitiflere boğar — iyi müşteriler engellenirken gerçek dolandırıcılık kuyruğu 4 saat bekler.',
        outcomeStat: '-62%',
        outcomeLabel: 'iyi müşterileri engelleyen yanlış pozitifler',
        outcomeNote:
          'İnceleme süresi 4 saatten → 90 saniyeye iner. Ana sayfa kahramanındaki çağrıyla aynı şekil — üretim trafiği böyle görünür.',
      },
      'support-routing': {
        label: 'Destek yönlendirme',
        company: 'Destek · Talep yönlendirme',
        headline: 'Her talep onu gerçekten çözebilecek seviyeye ulaşır.',
        problem:
          'Taksonomi değişiklikleri kural tabanlı yönlendiricileri bir gecede bozar — faturalandırma anlaşmazlıkları 1. seviyeye düşer, iki kez geri döner ve model yeniden eğitilmeden CSAT düşer.',
        outcomeStat: '-41%',
        outcomeLabel: 'taksonomi değişiklikleri sonrası yanlış yönlendirilen talepler',
        outcomeNote: 'Ortanca yönlendirme süresi 12 saniyedir. Yeni seviyeler yalnızca yeni options[] değerleridir — yeniden eğitim yok.',
      },
      'loan-prequal': {
        label: 'Kredi ön yeterliliği',
        company: 'Kredilendirme · Ön yeterlilik',
        headline: 'Denetim iziyle, saniyeler içinde ön yeterlilik kararları.',
        problem:
          'Elle ön yeterlilik günler sürer ve uzmana göre değişir — sınırdaki dosyalar beklerken açık onaylar arkada kalır.',
        outcomeStat: '3.2×',
        outcomeLabel: 'manuel incelemeye göre daha hızlı ön yeterlilik',
        outcomeNote: 'Sınır durumları gerekçe koduyla yükseltilir — uzmanlar nedenini görür.',
      },
      'offer-selection': {
        label: 'Teklif seçimi',
        company: 'Büyüme · Teklif seçimi',
        headline: 'Çeyrek başına değil, her kararda segment için doğru teklif.',
        problem:
          'Statik segmentler bir çeyrek boyunca herkese tek teklif sunar — yüksek değerli müşteriler genel %10 indirimi görürken benzer müşteriler başka yerde dönüşür.',
        outcomeStat: '+23%',
        outcomeLabel: 'statik segmentlere göre teklif kabul oranı',
        outcomeNote: 'Limitler ve uygunluk yalnızca context alanlarıdır — karar şemaya uygun kalır.',
      },
    },
  },
  es: {
    page: {
      title: 'Historias de uso — descubre cómo decide Airmino',
      description:
        'Cuatro ejemplos prácticos de la infraestructura de decisiones de Airmino: detección de fraude, enrutamiento de soporte, precalificación de préstamos y selección de ofertas — cada uno con la llamada API y el resultado exactos.',
    },
    breadcrumb: { platform: 'Plataforma', separator: '/', label: 'Historias de uso' },
    hero: {
      kicker: 'Historias de uso',
      title: 'Descubre cómo decide Airmino.',
      introBeforeApi: 'Cuatro ejemplos prácticos de la misma API — ',
      apiPath: 'POST /v1/decide',
      introAfterApi:
        ' — aplicada a cuatro flujos diferentes. Cada historia muestra el problema, la llamada exacta y el resultado.',
      staticNote: ' Ejemplos estáticos: nada aquí se ejecuta ni toca la red.',
    },
    tabs: { ariaLabel: 'Historias de uso' },
    api: {
      request: 'Solicitud',
      response: 'Respuesta',
      copy: 'Copiar',
      copied: 'Copiado',
      copyRequestLabel: 'Copiar solicitud curl de {story}',
      copyResponseLabel: 'Copiar respuesta JSON de {story}',
      statusOk: '200 OK',
      statusSuffix: 'ejemplo estático · red cero',
    },
    cta: { estimate: 'Calcula tus ahorros', pricing: 'Ver precios de la plataforma →' },
    stories: {
      'fraud-detection': {
        label: 'Detección de fraude',
        company: 'Pagos · Revisión de fraude',
        headline: 'Una revisión de fraude que retiene el pago arriesgado, no al buen cliente.',
        problem:
          'Los picos de velocidad y las discrepancias geográficas sepultan a los analistas en falsos positivos — los buenos clientes quedan bloqueados mientras el fraude real espera 4 horas en cola.',
        outcomeStat: '-62%',
        outcomeLabel: 'falsos positivos que bloquean a buenos clientes',
        outcomeNote:
          'El tiempo de revisión pasa de 4 horas → 90 segundos. La llamada tiene la misma forma que la del inicio — así se ve el tráfico de producción.',
      },
      'support-routing': {
        label: 'Enrutamiento de soporte',
        company: 'Soporte · Enrutamiento de tickets',
        headline: 'Cada ticket llega al nivel que realmente puede resolverlo.',
        problem:
          'Los cambios de taxonomía rompen los enrutadores basados en reglas de la noche a la mañana — las disputas de facturación llegan al nivel 1, rebotan dos veces y cae el CSAT antes de reentrenar un modelo.',
        outcomeStat: '-41%',
        outcomeLabel: 'tickets mal dirigidos tras cambios de taxonomía',
        outcomeNote: 'El tiempo mediano de enrutamiento es de 12 segundos. Los niveles nuevos son solo nuevos valores de options[] — sin reentrenamiento.',
      },
      'loan-prequal': {
        label: 'Precalificación de préstamos',
        company: 'Préstamos · Precalificación',
        headline: 'Decisiones de precalificación en segundos, con un registro de auditoría.',
        problem:
          'La precalificación manual tarda días y cambia según el analista — los expedientes límite se atascan mientras las aprobaciones claras esperan.',
        outcomeStat: '3.2×',
        outcomeLabel: 'más rápida que la revisión manual',
        outcomeNote: 'Los casos límite escalan con el código de motivo adjunto — los analistas ven por qué.',
      },
      'offer-selection': {
        label: 'Selección de ofertas',
        company: 'Crecimiento · Selección de ofertas',
        headline: 'La oferta adecuada para el segmento, elegida en cada decisión — no cada trimestre.',
        problem:
          'Los segmentos estáticos ofrecen lo mismo a todos durante un trimestre — los clientes de alto valor reciben el 10 % genérico mientras sus similares convierten en otro lugar.',
        outcomeStat: '+23%',
        outcomeLabel: 'tasa de aceptación frente a segmentos estáticos',
        outcomeNote: 'Los límites y la elegibilidad son solo campos de context — la decisión sigue siendo válida según el esquema.',
      },
    },
  },
  de: {
    page: {
      title: 'Anwendungsfälle — sehen Sie Airmino entscheiden',
      description:
        'Vier praktische Beispiele für Airminos Entscheidungsinfrastruktur: Betrugserkennung, Support-Routing, Kreditvorqualifizierung und Angebotselektion — jeweils mit dem exakten API-Aufruf und Ergebnis.',
    },
    breadcrumb: { platform: 'Plattform', separator: '/', label: 'Anwendungsfälle' },
    hero: {
      kicker: 'Anwendungsfälle',
      title: 'Sehen Sie Airmino entscheiden.',
      introBeforeApi: 'Vier praktische Beispiele derselben API — ',
      apiPath: 'POST /v1/decide',
      introAfterApi:
        ' — angewendet auf vier verschiedene Abläufe. Jede Geschichte zeigt Problem, exakten Aufruf und Ergebnis.',
      staticNote: ' Statische Beispiele: Hier wird nichts ausgeführt und kein Netzwerk berührt.',
    },
    tabs: { ariaLabel: 'Anwendungsfälle' },
    api: {
      request: 'Anfrage',
      response: 'Antwort',
      copy: 'Kopieren',
      copied: 'Kopiert',
      copyRequestLabel: 'curl-Anfrage für {story} kopieren',
      copyResponseLabel: 'JSON-Antwort für {story} kopieren',
      statusOk: '200 OK',
      statusSuffix: 'statisches Beispiel · kein Netzwerk',
    },
    cta: { estimate: 'Ihre Ersparnis schätzen', pricing: 'Plattformpreise ansehen →' },
    stories: {
      'fraud-detection': {
        label: 'Betrugserkennung',
        company: 'Zahlungen · Betrugsprüfung',
        headline: 'Die Betrugsprüfung hält die riskante Zahlung auf, nicht den guten Kunden.',
        problem:
          'Geschwindigkeitsspitzen und Standortabweichungen überfluten Analysten mit Fehlalarmen — gute Kunden werden blockiert, während echter Betrug 4 Stunden in der Warteschlange wartet.',
        outcomeStat: '-62%',
        outcomeLabel: 'Fehlalarme, die gute Kunden blockieren',
        outcomeNote:
          'Die Prüfzeit sinkt von 4 Stunden → 90 Sekunden. Derselbe Aufruf wie im Homepage-Hero — so sieht Produktionsverkehr aus.',
      },
      'support-routing': {
        label: 'Support-Routing',
        company: 'Support · Ticket-Routing',
        headline: 'Jedes Ticket landet bei der Stufe, die es wirklich lösen kann.',
        problem:
          'Taxonomieänderungen zerstören regelbasierte Router über Nacht — Abrechnungsstreitigkeiten landen in Stufe 1, werden zweimal weitergereicht und der CSAT sinkt, bevor ein Modell neu trainiert ist.',
        outcomeStat: '-41%',
        outcomeLabel: 'fehlgeleitete Tickets nach Taxonomieänderungen',
        outcomeNote: 'Die mediane Routing-Zeit beträgt 12 Sekunden. Neue Stufen sind nur neue options[] — kein Retraining.',
      },
      'loan-prequal': {
        label: 'Kreditvorqualifizierung',
        company: 'Kreditvergabe · Vorqualifizierung',
        headline: 'Vorqualifizierungsentscheidungen in Sekunden, mit Prüfprotokoll.',
        problem:
          'Die manuelle Vorqualifizierung dauert Tage und variiert je nach Underwriter — Grenzfälle bleiben liegen, während klare Zusagen warten.',
        outcomeStat: '3.2×',
        outcomeLabel: 'schnellere Vorqualifizierung als manuelle Prüfung',
        outcomeNote: 'Grenzfälle werden mit angehängtem Reason Code eskaliert — Underwriter sehen warum.',
      },
      'offer-selection': {
        label: 'Angebotsauswahl',
        company: 'Wachstum · Angebotsauswahl',
        headline: 'Das richtige Angebot für das Segment, pro Entscheidung gewählt — nicht pro Quartal.',
        problem:
          'Statische Segmente zeigen ein Quartal lang allen dasselbe Angebot — hochwertige Kunden erhalten den generischen 10-%-Rabatt, während ähnliche Kunden anderswo konvertieren.',
        outcomeStat: '+23%',
        outcomeLabel: 'Angebotsannahme gegenüber statischen Segmenten',
        outcomeNote: 'Limits und Berechtigung sind nur context-Felder — die Entscheidung bleibt schema-valid.',
      },
    },
  },
};

export function getUsageCopy(locale?: LocaleInput): UsageCopy {
  return USAGE_COPY[normalizeLocale(locale)];
}

export const usageCopy = USAGE_COPY;
