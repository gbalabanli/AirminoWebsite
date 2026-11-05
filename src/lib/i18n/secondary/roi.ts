import { normalizeLocale, type Locale, type LocaleInput } from '../index.ts';

export interface RoiCopy {
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
    readonly title: string;
    readonly description: string;
  };
  readonly calculator: {
    readonly operationTitle: string;
    readonly adjustHint: string;
    readonly decisionsPerMonth: string;
    readonly currentCostPerDecision: string;
    readonly airminoRatePerThousand: string;
    readonly monthlyPlatformFee: string;
    readonly decisionsSliderLabel: string;
    readonly currentCostSliderLabel: string;
    readonly airminoRateSliderLabel: string;
    readonly includeCostHint: string;
    readonly listPriceHint: string;
    readonly usageOnlyHint: string;
    readonly noteLabel: string;
    readonly note: string;
    readonly projectedAnnualSavings: string;
    readonly annualSubTemplate: string;
    readonly monthlySavings: string;
    readonly monthlySubInitial: string;
    readonly monthlySubTemplate: string;
    readonly costReduction: string;
    readonly reductionSub: string;
    readonly comparisonTitle: string;
    readonly comparisonHint: string;
    readonly currentCost: string;
    readonly withAirmino: string;
    readonly monthlySuffix: string;
    readonly tableHeaders: [string, string, string];
    readonly tableRows: {
      readonly monthlyDecisionCost: string;
      readonly annualDecisionCost: string;
      readonly costPerDecision: string;
    };
    readonly volumeHintTemplate: string;
  };
  readonly cta: {
    readonly startTrial: string;
    readonly usageStory: string;
  };
}

const englishRoiCopy: RoiCopy = {
  page: {
    title: 'ROI calculator — build your business case',
    description: 'Estimate the operational value of faster, more consistent decisions.',
  },
  breadcrumb: { platform: 'Platform', separator: '/', label: 'ROI calculator' },
  hero: {
    title: 'Build your business case in 30 seconds.',
    description:
      'Adjust the inputs to match your operation. Everything updates live — screenshot the result and paste it into your internal proposal.',
  },
  calculator: {
    operationTitle: 'Your current operation',
    adjustHint: '// drag or type to adjust',
    decisionsPerMonth: 'Decisions per month',
    currentCostPerDecision: 'Current cost per decision',
    airminoRatePerThousand: 'Airmino rate per 1,000 decisions',
    monthlyPlatformFee: 'Monthly platform fee',
    decisionsSliderLabel: 'Decisions per month (slider)',
    currentCostSliderLabel: 'Current cost per decision (slider)',
    airminoRateSliderLabel: 'Airmino rate per 1,000 decisions (slider)',
    includeCostHint: 'Include analyst time, tooling and infra',
    listPriceHint: 'List price $0.04 · volume tiers to $0.018',
    usageOnlyHint: 'Set to 0 for usage-only pricing',
    noteLabel: 'Note:',
    note: ' these are directional estimates. Your actual numbers depend on escalation thresholds, deployment topology and contract tier.',
    projectedAnnualSavings: 'Projected annual savings',
    annualSubTemplate: 'Based on {volume} decisions/month at {cost} today',
    monthlySavings: 'Monthly savings',
    monthlySubInitial: 'Net of Airmino spend',
    monthlySubTemplate: 'Net of {amount} in Airmino spend',
    costReduction: 'Cost reduction',
    reductionSub: 'Per-decision cost, before vs. after',
    comparisonTitle: 'Cost comparison',
    comparisonHint: '// monthly, all-in',
    currentCost: 'Current cost',
    withAirmino: 'With Airmino',
    monthlySuffix: ' / mo',
    tableHeaders: ['Line item', 'Current', 'With Airmino'],
    tableRows: {
      monthlyDecisionCost: 'Monthly decision cost',
      annualDecisionCost: 'Annual decision cost',
      costPerDecision: 'Cost per decision',
    },
    volumeHintTemplate: '{volume} decisions / month',
  },
  cta: {
    startTrial: 'Start 10,000-decision trial',
    usageStory: 'See it decide →',
  },
};

export const ROI_COPY: Record<Locale, RoiCopy> = {
  en: englishRoiCopy,
  tr: {
    page: {
      title: 'ROI hesaplayıcı — iş gerekçenizi oluşturun',
      description: 'Daha hızlı ve tutarlı kararların operasyonel değerini tahmin edin.',
    },
    breadcrumb: { platform: 'Platform', separator: '/', label: 'ROI hesaplayıcı' },
    hero: {
      title: 'İş gerekçenizi 30 saniyede oluşturun.',
      description:
        'Girdileri operasyonunuza göre ayarlayın. Her şey canlı güncellenir — sonucu ekran görüntüsüyle alıp iç teklifinize ekleyin.',
    },
    calculator: {
      operationTitle: 'Mevcut operasyonunuz',
      adjustHint: '// ayarlamak için sürükleyin veya yazın',
      decisionsPerMonth: 'Aylık karar sayısı',
      currentCostPerDecision: 'Karar başına mevcut maliyet',
      airminoRatePerThousand: '1.000 karar başına Airmino ücreti',
      monthlyPlatformFee: 'Aylık platform ücreti',
      decisionsSliderLabel: 'Aylık karar sayısı (kaydırıcı)',
      currentCostSliderLabel: 'Karar başına mevcut maliyet (kaydırıcı)',
      airminoRateSliderLabel: '1.000 karar başına Airmino ücreti (kaydırıcı)',
      includeCostHint: 'Analist zamanı, araçlar ve altyapıyı dahil edin',
      listPriceHint: 'Liste fiyatı $0.04 · hacim kademeleri $0.018’e kadar',
      usageOnlyHint: 'Yalnızca kullanım fiyatlandırması için 0 yapın',
      noteLabel: 'Not:',
      note: ' bunlar yön gösteren tahminlerdir. Gerçek rakamlarınız yükseltme eşiklerine, dağıtım topolojisine ve sözleşme katmanına bağlıdır.',
      projectedAnnualSavings: 'Tahmini yıllık tasarruf',
      annualSubTemplate: 'Ayda {volume} karar ve bugün karar başına {cost} temel alınmıştır',
      monthlySavings: 'Aylık tasarruf',
      monthlySubInitial: 'Airmino harcaması düşüldükten sonra',
      monthlySubTemplate: 'Airmino harcaması olan {amount} düşüldükten sonra',
      costReduction: 'Maliyet azalması',
      reductionSub: 'Karar başına maliyet, önce ve sonra',
      comparisonTitle: 'Maliyet karşılaştırması',
      comparisonHint: '// aylık, toplam',
      currentCost: 'Mevcut maliyet',
      withAirmino: 'Airmino ile',
      monthlySuffix: ' / ay',
      tableHeaders: ['Kalem', 'Mevcut', 'Airmino ile'],
      tableRows: {
        monthlyDecisionCost: 'Aylık karar maliyeti',
        annualDecisionCost: 'Yıllık karar maliyeti',
        costPerDecision: 'Karar başına maliyet',
      },
      volumeHintTemplate: 'Ayda {volume} karar',
    },
    cta: { startTrial: '10.000 karar denemesini başlat', usageStory: 'Nasıl karar verdiğini görün →' },
  },
  es: {
    page: {
      title: 'Calculadora de ROI — construye tu caso de negocio',
      description: 'Estima el valor operativo de tomar decisiones más rápidas y consistentes.',
    },
    breadcrumb: { platform: 'Plataforma', separator: '/', label: 'Calculadora de ROI' },
    hero: {
      title: 'Construye tu caso de negocio en 30 segundos.',
      description:
        'Ajusta las entradas a tu operación. Todo se actualiza en directo — captura el resultado y pégalo en tu propuesta interna.',
    },
    calculator: {
      operationTitle: 'Tu operación actual',
      adjustHint: '// arrastra o escribe para ajustar',
      decisionsPerMonth: 'Decisiones al mes',
      currentCostPerDecision: 'Coste actual por decisión',
      airminoRatePerThousand: 'Tarifa de Airmino por 1.000 decisiones',
      monthlyPlatformFee: 'Cuota mensual de plataforma',
      decisionsSliderLabel: 'Decisiones al mes (control deslizante)',
      currentCostSliderLabel: 'Coste actual por decisión (control deslizante)',
      airminoRateSliderLabel: 'Tarifa de Airmino por 1.000 decisiones (control deslizante)',
      includeCostHint: 'Incluye tiempo de analistas, herramientas e infraestructura',
      listPriceHint: 'Precio de lista $0.04 · niveles por volumen hasta $0.018',
      usageOnlyHint: 'Establece 0 para precios solo por uso',
      noteLabel: 'Nota:',
      note: ' son estimaciones orientativas. Tus cifras reales dependen de los umbrales de escalado, la topología de despliegue y el nivel contractual.',
      projectedAnnualSavings: 'Ahorro anual proyectado',
      annualSubTemplate: 'Basado en {volume} decisiones/mes a {cost} hoy',
      monthlySavings: 'Ahorro mensual',
      monthlySubInitial: 'Neto del gasto en Airmino',
      monthlySubTemplate: 'Neto de {amount} de gasto en Airmino',
      costReduction: 'Reducción de costes',
      reductionSub: 'Coste por decisión, antes y después',
      comparisonTitle: 'Comparación de costes',
      comparisonHint: '// mensual, total',
      currentCost: 'Coste actual',
      withAirmino: 'Con Airmino',
      monthlySuffix: ' / mes',
      tableHeaders: ['Partida', 'Actual', 'Con Airmino'],
      tableRows: {
        monthlyDecisionCost: 'Coste mensual de decisiones',
        annualDecisionCost: 'Coste anual de decisiones',
        costPerDecision: 'Coste por decisión',
      },
      volumeHintTemplate: '{volume} decisiones / mes',
    },
    cta: { startTrial: 'Iniciar prueba de 10.000 decisiones', usageStory: 'Descubre cómo decide →' },
  },
  de: {
    page: {
      title: 'ROI-Rechner — erstellen Sie Ihren Business Case',
      description: 'Schätzen Sie den operativen Wert schnellerer, konsistenter Entscheidungen.',
    },
    breadcrumb: { platform: 'Plattform', separator: '/', label: 'ROI-Rechner' },
    hero: {
      title: 'Erstellen Sie Ihren Business Case in 30 Sekunden.',
      description:
        'Passen Sie die Eingaben an Ihren Betrieb an. Alles aktualisiert sich live — machen Sie einen Screenshot und fügen Sie das Ergebnis in Ihren internen Vorschlag ein.',
    },
    calculator: {
      operationTitle: 'Ihr aktueller Betrieb',
      adjustHint: '// zum Anpassen ziehen oder eingeben',
      decisionsPerMonth: 'Entscheidungen pro Monat',
      currentCostPerDecision: 'Aktuelle Kosten pro Entscheidung',
      airminoRatePerThousand: 'Airmino-Preis pro 1.000 Entscheidungen',
      monthlyPlatformFee: 'Monatliche Plattformgebühr',
      decisionsSliderLabel: 'Entscheidungen pro Monat (Schieberegler)',
      currentCostSliderLabel: 'Aktuelle Kosten pro Entscheidung (Schieberegler)',
      airminoRateSliderLabel: 'Airmino-Preis pro 1.000 Entscheidungen (Schieberegler)',
      includeCostHint: 'Analystenzeit, Tools und Infrastruktur einbeziehen',
      listPriceHint: 'Listenpreis $0.04 · Volumenstufen bis $0.018',
      usageOnlyHint: 'Für nutzungsbasierte Preise auf 0 setzen',
      noteLabel: 'Hinweis:',
      note: ' Dies sind Richtwerte. Ihre tatsächlichen Zahlen hängen von Eskalationsschwellen, Deployment-Topologie und Vertragsebene ab.',
      projectedAnnualSavings: 'Voraussichtliche jährliche Ersparnis',
      annualSubTemplate: 'Basierend auf {volume} Entscheidungen/Monat zu heute {cost}',
      monthlySavings: 'Monatliche Ersparnis',
      monthlySubInitial: 'Nach Abzug der Airmino-Kosten',
      monthlySubTemplate: 'Nach Abzug von {amount} Airmino-Kosten',
      costReduction: 'Kostenreduzierung',
      reductionSub: 'Kosten pro Entscheidung, vorher und nachher',
      comparisonTitle: 'Kostenvergleich',
      comparisonHint: '// monatlich, gesamthaft',
      currentCost: 'Aktuelle Kosten',
      withAirmino: 'Mit Airmino',
      monthlySuffix: ' / Monat',
      tableHeaders: ['Position', 'Aktuell', 'Mit Airmino'],
      tableRows: {
        monthlyDecisionCost: 'Monatliche Entscheidungskosten',
        annualDecisionCost: 'Jährliche Entscheidungskosten',
        costPerDecision: 'Kosten pro Entscheidung',
      },
      volumeHintTemplate: '{volume} Entscheidungen / Monat',
    },
    cta: { startTrial: '10.000-Entscheidungen-Test starten', usageStory: 'Entscheidung ansehen →' },
  },
};

export function getRoiCopy(locale?: LocaleInput): RoiCopy {
  return ROI_COPY[normalizeLocale(locale)];
}

export const getROICopy = getRoiCopy;
export const roiCopy = ROI_COPY;
