/**
 * Multilingual site foundation.
 *
 * English is the canonical locale: it is served from the existing root paths
 * while the other supported locales receive a path prefix. Keep route and
 * translation concerns in this module so pages and components do not need to
 * duplicate locale-specific decisions.
 */

export const SUPPORTED_LOCALES = ['en', 'tr', 'es', 'de'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type LocaleInput = Locale | string | null | undefined;

export const DEFAULT_LOCALE: Locale = 'en';

export type LocaleDirection = 'ltr' | 'rtl';

export interface LocaleMetadata {
  readonly code: Locale;
  /** BCP 47 language tag for document metadata and Intl APIs. */
  readonly languageTag: string;
  /** English display name, useful when the switcher has no active locale. */
  readonly name: string;
  /** Native display name, useful for language switcher labels. */
  readonly nativeName: string;
  readonly dir: LocaleDirection;
  /** URL prefix. The default locale intentionally has no prefix. */
  readonly prefix: string;
  readonly isDefault: boolean;
}

export const LOCALE_METADATA = {
  en: {
    code: 'en',
    languageTag: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    prefix: '',
    isDefault: true,
  },
  tr: {
    code: 'tr',
    languageTag: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    dir: 'ltr',
    prefix: '/tr',
    isDefault: false,
  },
  es: {
    code: 'es',
    languageTag: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    prefix: '/es',
    isDefault: false,
  },
  de: {
    code: 'de',
    languageTag: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr',
    prefix: '/de',
    isDefault: false,
  },
} as const satisfies Record<Locale, LocaleMetadata>;

/** Friendly aliases for consumers that prefer lower-case or shorter names. */
export const localeMetadata = LOCALE_METADATA;
export const LOCALE_META = LOCALE_METADATA;

export function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export const isLocale = isSupportedLocale;

export function normalizeLocale(value: LocaleInput, fallback: Locale = DEFAULT_LOCALE): Locale {
  return isSupportedLocale(value) ? value : fallback;
}

export function getLocaleMetadata(locale: LocaleInput): LocaleMetadata {
  return LOCALE_METADATA[normalizeLocale(locale)];
}

export function localePrefix(locale: LocaleInput): string {
  return getLocaleMetadata(locale).prefix;
}

/**
 * The shared translation shape. Add new copy here first; all locale entries
 * below must then provide the same keys, which keeps consumers type-safe.
 */
export interface TranslationDictionary {
  readonly common: {
    readonly language: string;
    readonly menu: string;
    readonly close: string;
    readonly primaryNavigation: string;
    readonly startFreeTrial: string;
    readonly home: string;
    readonly backToHome: string;
    readonly learnMore: string;
  };
  readonly nav: {
    readonly platform: string;
    readonly usageStories: string;
    readonly roiCalculator: string;
    readonly pricing: string;
    readonly gdpr: string;
  };
  readonly footer: {
    readonly product: string;
    readonly resources: string;
    readonly evaluate: string;
    readonly benchmarkMethodology: string;
    readonly architectureFaq: string;
    readonly fraudDetection: string;
    readonly supportRouting: string;
    readonly loanPrequalification: string;
    readonly infrastructureNote: string;
    readonly mitLicence: string;
  };
  readonly modal: {
    readonly closeSignupForm: string;
    readonly title: string;
    readonly subtitle: string;
    readonly name: string;
    readonly workEmail: string;
    readonly decision: string;
    readonly optional: string;
    readonly decisionPlaceholder: string;
    readonly requestApiKey: string;
    readonly finePrint: string;
    readonly successTitle: string;
    readonly successMessage: string;
    readonly backToSite: string;
    readonly validationName: string;
    readonly validationEmail: string;
    readonly sending: string;
    readonly sendError: string;
  };
  readonly meta: {
    readonly siteName: string;
    readonly description: string;
  };
  readonly pages: {
    readonly home: {
      readonly title: string;
      readonly description: string;
    };
    readonly usage: {
      readonly title: string;
      readonly description: string;
    };
    readonly roiCalculator: {
      readonly title: string;
      readonly description: string;
    };
    readonly gdpr: {
      readonly title: string;
      readonly description: string;
    };
    readonly notFound: {
      readonly title: string;
      readonly backLink: string;
    };
  };
}

const englishTranslations: TranslationDictionary = {
  common: {
    language: 'Language',
    menu: 'Menu',
    close: 'Close',
    primaryNavigation: 'Primary navigation',
    startFreeTrial: 'Start free trial',
    home: 'Home',
    backToHome: 'Back to the homepage',
    learnMore: 'Learn more',
  },
  nav: {
    platform: 'Platform',
    usageStories: 'Usage stories',
    roiCalculator: 'ROI calculator',
    pricing: 'Pricing',
    gdpr: 'GDPR & data processing',
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    evaluate: 'Evaluate',
    benchmarkMethodology: 'Benchmark methodology',
    architectureFaq: 'Architecture FAQ',
    fraudDetection: 'Fraud detection',
    supportRouting: 'Support routing',
    loanPrequalification: 'Loan pre-qualification',
    infrastructureNote: 'VPC or self-hosted · No training on your data',
    mitLicence: 'MIT licence',
  },
  modal: {
    closeSignupForm: 'Close signup form',
    title: 'Start your 10,000-decision trial.',
    subtitle: 'Tell us where to send your API key. We reply within one business day.',
    name: 'Name',
    workEmail: 'Work email',
    decision: 'What will you decide?',
    optional: 'optional',
    decisionPlaceholder: 'e.g. fraud review for card payments',
    requestApiKey: 'Request API key',
    finePrint: 'Submitted via our form processor — see',
    successTitle: 'Request received.',
    successMessage: 'Thanks — your API key is on its way. Check your inbox within one business day.',
    backToSite: 'Back to site',
    validationName: 'Please enter your name.',
    validationEmail: 'Please enter a valid work email.',
    sending: 'Sending…',
    sendError: 'Could not send — check your connection and try again.',
  },
  meta: {
    siteName: 'Airmino',
    description: 'Decision infrastructure for teams that need every call to count.',
  },
  pages: {
    home: {
      title: 'Decision infrastructure for teams that need every call to count.',
      description: 'Make high-stakes decisions faster, more consistently, and with evidence.',
    },
    usage: {
      title: 'See Airmino decide.',
      description: 'Worked examples of the same decision API applied to real operating moments.',
    },
    roiCalculator: {
      title: 'Build your business case in 30 seconds.',
      description: 'Estimate the operational value of faster, more consistent decisions.',
    },
    gdpr: {
      title: 'Your data stays yours.',
      description: 'How Airmino processes, protects, and governs decision data.',
    },
    notFound: {
      title: "This page doesn't exist yet.",
      backLink: 'Back to the homepage →',
    },
  },
};

export const TRANSLATIONS = {
  en: englishTranslations,
  tr: {
    common: {
      language: 'Dil',
      menu: 'Menü',
      close: 'Kapat',
      primaryNavigation: 'Ana gezinme',
      startFreeTrial: 'Ücretsiz denemeyi başlat',
      home: 'Ana sayfa',
      backToHome: 'Ana sayfaya dön',
      learnMore: 'Daha fazla bilgi',
    },
    nav: {
      platform: 'Platform',
      usageStories: 'Kullanım hikâyeleri',
      roiCalculator: 'ROI hesaplayıcı',
      pricing: 'Fiyatlandırma',
      gdpr: 'GDPR ve veri işleme',
    },
    footer: {
      product: 'Ürün',
      resources: 'Kaynaklar',
      evaluate: 'Değerlendirme',
      benchmarkMethodology: 'Kıyaslama yöntemi',
      architectureFaq: 'Mimari SSS',
      fraudDetection: 'Dolandırıcılık tespiti',
      supportRouting: 'Destek yönlendirme',
      loanPrequalification: 'Kredi ön yeterlilik',
      infrastructureNote: 'VPC veya kendi sunucunuzda · Verileriniz üzerinde eğitim yok',
      mitLicence: 'MIT lisansı',
    },
    modal: {
      closeSignupForm: 'Kayıt formunu kapat',
      title: '10.000 karar denemenizi başlatın.',
      subtitle: 'API anahtarınızı nereye göndereceğimizi belirtin. Bir iş günü içinde yanıt veririz.',
      name: 'Ad',
      workEmail: 'İş e-postası',
      decision: 'Neye karar vereceksiniz?',
      optional: 'isteğe bağlı',
      decisionPlaceholder: 'ör. kart ödemeleri için dolandırıcılık incelemesi',
      requestApiKey: 'API anahtarı iste',
      finePrint: 'Form işlemcimiz üzerinden gönderilir —',
      successTitle: 'Talep alındı.',
      successMessage: 'Teşekkürler — API anahtarınız yolda. Bir iş günü içinde gelen kutunuzu kontrol edin.',
      backToSite: 'Siteye dön',
      validationName: 'Lütfen adınızı girin.',
      validationEmail: 'Lütfen geçerli bir iş e-postası girin.',
      sending: 'Gönderiliyor…',
      sendError: 'Gönderilemedi — bağlantınızı kontrol edip tekrar deneyin.',
    },
    meta: {
      siteName: 'Airmino',
      description: 'Her kararın önemli olduğu ekipler için karar altyapısı.',
    },
    pages: {
      home: {
        title: 'Her kararın önemli olduğu ekipler için karar altyapısı.',
        description: 'Kritik kararları daha hızlı, tutarlı ve kanıta dayalı alın.',
      },
      usage: {
        title: 'Airmino’nun kararlarını görün.',
        description: 'Aynı karar API’sinin gerçek operasyon örnekleri.',
      },
      roiCalculator: {
        title: 'İş gerekçenizi 30 saniyede oluşturun.',
        description: 'Daha hızlı ve tutarlı kararların operasyonel değerini tahmin edin.',
      },
      gdpr: {
        title: 'Verileriniz size aittir.',
        description: 'Airmino’nun karar verilerini işleme ve koruma yaklaşımı.',
      },
      notFound: {
        title: 'Bu sayfa henüz mevcut değil.',
        backLink: 'Ana sayfaya dön →',
      },
    },
  },
  es: {
    common: {
      language: 'Idioma',
      menu: 'Menú',
      close: 'Cerrar',
      primaryNavigation: 'Navegación principal',
      startFreeTrial: 'Comenzar prueba gratuita',
      home: 'Inicio',
      backToHome: 'Volver a la página de inicio',
      learnMore: 'Más información',
    },
    nav: {
      platform: 'Plataforma',
      usageStories: 'Casos de uso',
      roiCalculator: 'Calculadora de ROI',
      pricing: 'Precios',
      gdpr: 'RGPD y tratamiento de datos',
    },
    footer: {
      product: 'Producto',
      resources: 'Recursos',
      evaluate: 'Evaluar',
      benchmarkMethodology: 'Metodología de referencia',
      architectureFaq: 'Preguntas frecuentes de arquitectura',
      fraudDetection: 'Detección de fraude',
      supportRouting: 'Enrutamiento de soporte',
      loanPrequalification: 'Precalificación de préstamos',
      infrastructureNote: 'VPC o autohospedado · No entrenamos con tus datos',
      mitLicence: 'Licencia MIT',
    },
    modal: {
      closeSignupForm: 'Cerrar formulario de registro',
      title: 'Comienza tu prueba de 10.000 decisiones.',
      subtitle: 'Dinos dónde enviar tu clave de API. Respondemos en un día laborable.',
      name: 'Nombre',
      workEmail: 'Correo de trabajo',
      decision: '¿Qué decidirás?',
      optional: 'opcional',
      decisionPlaceholder: 'p. ej., revisión de fraude para pagos con tarjeta',
      requestApiKey: 'Solicitar clave de API',
      finePrint: 'Enviado mediante nuestro procesador de formularios —',
      successTitle: 'Solicitud recibida.',
      successMessage: 'Gracias — tu clave de API está en camino. Revisa tu bandeja en un día laborable.',
      backToSite: 'Volver al sitio',
      validationName: 'Introduce tu nombre.',
      validationEmail: 'Introduce un correo de trabajo válido.',
      sending: 'Enviando…',
      sendError: 'No se pudo enviar — comprueba tu conexión e inténtalo de nuevo.',
    },
    meta: {
      siteName: 'Airmino',
      description: 'Infraestructura de decisiones para equipos que necesitan que cada llamada cuente.',
    },
    pages: {
      home: {
        title: 'Infraestructura de decisiones para equipos que necesitan que cada llamada cuente.',
        description: 'Toma decisiones importantes más rápido, con más consistencia y evidencia.',
      },
      usage: {
        title: 'Mira cómo decide Airmino.',
        description: 'Ejemplos prácticos de la misma API de decisiones en situaciones reales.',
      },
      roiCalculator: {
        title: 'Construye tu caso de negocio en 30 segundos.',
        description: 'Estima el valor operativo de tomar decisiones más rápidas y consistentes.',
      },
      gdpr: {
        title: 'Tus datos siguen siendo tuyos.',
        description: 'Cómo Airmino trata y protege los datos de decisiones.',
      },
      notFound: {
        title: 'Esta página todavía no existe.',
        backLink: 'Volver a la página de inicio →',
      },
    },
  },
  de: {
    common: {
      language: 'Sprache',
      menu: 'Menü',
      close: 'Schließen',
      primaryNavigation: 'Hauptnavigation',
      startFreeTrial: 'Kostenlose Testversion starten',
      home: 'Startseite',
      backToHome: 'Zur Startseite',
      learnMore: 'Mehr erfahren',
    },
    nav: {
      platform: 'Plattform',
      usageStories: 'Anwendungsfälle',
      roiCalculator: 'ROI-Rechner',
      pricing: 'Preise',
      gdpr: 'DSGVO und Datenverarbeitung',
    },
    footer: {
      product: 'Produkt',
      resources: 'Ressourcen',
      evaluate: 'Bewerten',
      benchmarkMethodology: 'Benchmark-Methodik',
      architectureFaq: 'Architektur-FAQ',
      fraudDetection: 'Betrugserkennung',
      supportRouting: 'Support-Routing',
      loanPrequalification: 'Kreditvorqualifizierung',
      infrastructureNote: 'VPC oder selbst gehostet · Kein Training mit Ihren Daten',
      mitLicence: 'MIT-Lizenz',
    },
    modal: {
      closeSignupForm: 'Anmeldeformular schließen',
      title: 'Starten Sie Ihre Testversion mit 10.000 Entscheidungen.',
      subtitle: 'Sagen Sie uns, wohin wir Ihren API-Schlüssel senden sollen. Wir antworten innerhalb eines Werktags.',
      name: 'Name',
      workEmail: 'Geschäftliche E-Mail',
      decision: 'Was werden Sie entscheiden?',
      optional: 'optional',
      decisionPlaceholder: 'z. B. Betrugsprüfung für Kartenzahlungen',
      requestApiKey: 'API-Schlüssel anfordern',
      finePrint: 'Über unseren Formularanbieter gesendet —',
      successTitle: 'Anfrage erhalten.',
      successMessage: 'Danke — Ihr API-Schlüssel ist unterwegs. Prüfen Sie Ihren Posteingang innerhalb eines Werktags.',
      backToSite: 'Zurück zur Website',
      validationName: 'Bitte geben Sie Ihren Namen ein.',
      validationEmail: 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.',
      sending: 'Wird gesendet…',
      sendError: 'Senden nicht möglich — prüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    },
    meta: {
      siteName: 'Airmino',
      description: 'Entscheidungsinfrastruktur für Teams, bei denen jede Entscheidung zählt.',
    },
    pages: {
      home: {
        title: 'Entscheidungsinfrastruktur für Teams, bei denen jede Entscheidung zählt.',
        description: 'Treffen Sie wichtige Entscheidungen schneller, konsistenter und evidenzbasiert.',
      },
      usage: {
        title: 'Sehen Sie Airmino entscheiden.',
        description: 'Praxisbeispiele derselben Entscheidungs-API in realen Situationen.',
      },
      roiCalculator: {
        title: 'Erstellen Sie Ihren Business Case in 30 Sekunden.',
        description: 'Schätzen Sie den operativen Wert schnellerer, konsistenter Entscheidungen.',
      },
      gdpr: {
        title: 'Ihre Daten bleiben Ihre Daten.',
        description: 'Wie Airmino Entscheidungsdaten verarbeitet und schützt.',
      },
      notFound: {
        title: 'Diese Seite gibt es noch nicht.',
        backLink: 'Zur Startseite →',
      },
    },
  },
} satisfies Record<Locale, TranslationDictionary>;

export const translations = TRANSLATIONS;

export function getTranslations(locale: LocaleInput): TranslationDictionary {
  return TRANSLATIONS[normalizeLocale(locale)];
}

type StringPath<T> = {
  [K in keyof T & string]: T[K] extends string
    ? K
    : T[K] extends object
      ? `${K}.${StringPath<T[K]>}`
      : never;
}[keyof T & string];

export type TranslationKey = StringPath<TranslationDictionary>;

/** Resolve a dot-delimited key from the centralized dictionary. */
export function translate(locale: LocaleInput, key: TranslationKey): string {
  const value = key.split('.').reduce<unknown>((current, part) => {
    if (typeof current !== 'object' || current === null) return undefined;
    return (current as Record<string, unknown>)[part];
  }, getTranslations(locale));

  if (typeof value !== 'string') {
    throw new Error(`Unknown translation key: ${key}`);
  }

  return value;
}

type ParsedPath = {
  readonly pathname: string;
  readonly suffix: string;
  readonly untouched: boolean;
};

function isExternalPath(path: string): boolean {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path);
}

function parsePath(path: string): ParsedPath {
  const value = path || '/';

  // Fragment-only and query-only links are intentionally not prefixed. They
  // refer to the current localized page rather than to a new route.
  if (value.startsWith('#') || value.startsWith('?') || isExternalPath(value)) {
    return { pathname: value, suffix: '', untouched: true };
  }

  const suffixIndex = value.search(/[?#]/);
  const pathname = suffixIndex === -1 ? value : value.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : value.slice(suffixIndex);

  return {
    pathname: pathname || '/',
    suffix,
    untouched: false,
  };
}

function normalizePathname(pathname: string): string {
  if (!pathname) return '/';
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function stripLocaleFromPathname(pathname: string): string {
  const normalized = normalizePathname(pathname);
  const firstSegment = normalized.split('/')[1];

  if (!isSupportedLocale(firstSegment)) return normalized;

  const remainder = normalized.slice(firstSegment.length + 1);
  return remainder || '/';
}

/** Return the locale segment in a path, or English for the root route. */
export function getLocaleFromPath(path: string): Locale {
  const parsed = parsePath(path);
  if (parsed.untouched) return DEFAULT_LOCALE;

  const firstSegment = normalizePathname(parsed.pathname).split('/')[1];
  return isSupportedLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

/** Remove a supported locale prefix while retaining query strings and hashes. */
export function stripLocalePrefix(path: string): string {
  const parsed = parsePath(path);
  if (parsed.untouched) return path;

  return `${stripLocaleFromPathname(parsed.pathname)}${parsed.suffix}`;
}

/**
 * Build a localized path without changing the page path, query string, or
 * hash. English stays at the root; an existing locale prefix is replaced so
 * this function can be used directly by language switchers.
 *
 * Examples:
 *   localizePath('/usage/', 'en') -> '/usage/'
 *   localizePath('/usage/#fraud', 'tr') -> '/tr/usage/#fraud'
 *   localizePath('/tr/usage', 'de') -> '/de/usage'
 *   localizePath('#pricing', 'es') -> '#pricing'
 */
export function localizePath(path: string, locale: Locale): string;
export function localizePath(path: string, locale: string): string;
export function localizePath(path: string, locale: string): string {
  const parsed = parsePath(path);
  if (parsed.untouched) return path;

  const target = normalizeLocale(locale);
  const pagePath = stripLocaleFromPathname(parsed.pathname);
  const prefix = localePrefix(target);
  const localizedPathname = target === DEFAULT_LOCALE
    ? pagePath
    : pagePath === '/'
      ? `${prefix}/`
      : `${prefix}${pagePath}`;

  return `${localizedPathname}${parsed.suffix}`;
}

/** Equivalent helper with the locale first, convenient for templates. */
export function localePath(locale: Locale, path?: string): string;
export function localePath(locale: string, path?: string): string;
export function localePath(locale: string, path = '/'): string {
  return localizePath(path, locale);
}

export const getLocalizedPath = localizePath;
export const withLocale = localizePath;
