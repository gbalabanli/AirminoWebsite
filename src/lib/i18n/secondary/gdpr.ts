import { normalizeLocale, type Locale, type LocaleInput } from '../index.ts';

export interface GdprCopy {
  readonly page: {
    readonly title: string;
    readonly description: string;
  };
  readonly breadcrumb: {
    readonly home: string;
    readonly separator: string;
    readonly label: string;
  };
  readonly hero: {
    readonly kicker: string;
    readonly title: string;
    readonly description: string;
  };
  readonly sections: {
    readonly process: {
      readonly title: string;
      readonly beforeEndpoint: string;
      readonly endpoint: string;
      readonly afterEndpoint: string;
    };
    readonly whereRuns: { readonly title: string; readonly body: string };
    readonly noTraining: { readonly title: string; readonly body: string };
    readonly rights: {
      readonly title: string;
      readonly body: string;
      readonly contactBeforeEmail: string;
      readonly email: string;
      readonly contactAfterEmail: string;
    };
    readonly subprocessors: { readonly title: string; readonly body: string };
    readonly security: { readonly title: string; readonly body: string };
  };
  readonly cta: {
    readonly usage: string;
    readonly pricing: string;
  };
}

const englishGdprCopy: GdprCopy = {
  page: {
    title: 'GDPR & data processing — Airmino',
    description:
      'How Airmino handles personal data: minimization, VPC/self-hosted deployment, retention, subprocessors, and your rights under the GDPR.',
  },
  breadcrumb: { home: 'Home', separator: '/', label: 'GDPR & data processing' },
  hero: {
    kicker: 'Compliance',
    title: 'Your data stays yours.',
    description:
      'Airmino is decision infrastructure, not a data business. We process the minimum personal data needed to return a decision, we never train models on your data, and you can keep everything inside your own network. Last updated: October 2026.',
  },
  sections: {
    process: {
      title: 'What we process',
      beforeEndpoint: 'To return a decision we process the fields you send in ',
      endpoint: 'POST /v1/decide',
      afterEndpoint:
        ' — typically a decision name, the options you define, and context fields (e.g. amounts, priorities, segments). What you put in the payload is what gets processed; nothing more is collected. Send reference IDs instead of raw personal data wherever your workflow allows it.',
    },
    whereRuns: {
      title: 'Where it runs',
      body:
        'Airmino deploys inside your VPC or fully self-hosted as a single container with no external calls — decision payloads never leave your network and there is no cross-border transfer to manage. On the managed cloud option, processing stays in the region you select and logs are retained for 30 days, then deleted.',
    },
    noTraining: {
      title: 'No training on your data',
      body:
        'Customer payloads and decisions are never used to train, fine-tune, or evaluate models. Product telemetry (request counts, latency distributions, error rates) contains no payload content and is aggregated before storage.',
    },
    rights: {
      title: 'Your rights',
      body: 'Under the GDPR you can request access, rectification, erasure, restriction, portability, and objection for personal data we process as a processor. Because most deployments keep data inside your own infrastructure, many requests are fastest answered by your own team — we support you with deletion tooling and a data processing agreement on request.',
      contactBeforeEmail: 'To exercise your rights, contact ',
      email: 'privacy@airmino.com',
      contactAfterEmail: '. We respond within 30 days.',
    },
    subprocessors: {
      title: 'Subprocessors & DPA',
      body:
        'Self-hosted and VPC deployments have no subprocessors — there is nobody downstream to list. The managed cloud option uses only infrastructure hosting in your selected region. The trial signup form is processed by FormSubmit (form-to-email delivery) — the only website subprocessor. A data processing agreement (DPA) incorporating the EU Standard Contractual Clauses where relevant is available on request before any pilot.',
    },
    security: {
      title: 'Security',
      body:
        'Encryption in transit (TLS 1.2+) and at rest, mTLS service identity between components, and append-only audit logs for decision traces. Full control mappings are provided under NDA during enterprise evaluation.',
    },
  },
  cta: { usage: 'See what it decides →', pricing: 'See platform pricing' },
};

export const GDPR_COPY: Record<Locale, GdprCopy> = {
  en: englishGdprCopy,
  tr: {
    page: {
      title: 'GDPR ve veri işleme — Airmino',
      description:
        'Airmino kişisel verileri nasıl işler: veri minimizasyonu, VPC/kendi sunucunda dağıtım, saklama, alt işleyenler ve GDPR kapsamındaki haklarınız.',
    },
    breadcrumb: { home: 'Ana sayfa', separator: '/', label: 'GDPR ve veri işleme' },
    hero: {
      kicker: 'Uyumluluk',
      title: 'Verileriniz size aittir.',
      description:
        'Airmino bir veri şirketi değil, karar altyapısıdır. Bir kararı döndürmek için gereken en az kişisel veriyi işleriz, verilerinizle model eğitmeyiz ve her şeyi kendi ağınızda tutabilirsiniz. Son güncelleme: Ekim 2026.',
    },
    sections: {
      process: {
        title: 'Ne işliyoruz',
        beforeEndpoint: 'Karar döndürmek için ',
        endpoint: 'POST /v1/decide',
        afterEndpoint:
          ' içine gönderdiğiniz alanları işleriz — genellikle bir karar adı, tanımladığınız seçenekler ve bağlam alanları (ör. tutarlar, öncelikler, segmentler). Yüke koyduğunuz şey işlenir; daha fazlası toplanmaz. İş akışınız izin verdiğinde ham kişisel veri yerine referans kimlikleri gönderin.',
      },
      whereRuns: {
        title: 'Nerede çalışır',
        body:
          'Airmino, VPC’nizin içinde veya dış çağrı yapmayan tek bir konteyner olarak tamamen kendi sunucunuzda çalışır — karar yükleri ağınızdan çıkmaz ve yönetilecek sınır ötesi aktarım yoktur. Yönetilen bulut seçeneğinde işleme seçtiğiniz bölgede kalır ve günlükler 30 gün saklandıktan sonra silinir.',
      },
      noTraining: {
        title: 'Verilerinizle eğitim yok',
        body:
          'Müşteri yükleri ve kararları modelleri eğitmek, ince ayar yapmak veya değerlendirmek için kullanılmaz. Ürün telemetrisi (istek sayıları, gecikme dağılımları, hata oranları) yük içeriği barındırmaz ve saklanmadan önce toplulaştırılır.',
      },
      rights: {
        title: 'Haklarınız',
        body: 'GDPR kapsamında işleyici olarak işlediğimiz kişisel veriler için erişim, düzeltme, silme, kısıtlama, taşınabilirlik ve itiraz talep edebilirsiniz. Çoğu dağıtım verileri kendi altyapınızda tuttuğundan birçok talebe en hızlı kendi ekibiniz yanıt verebilir — talep üzerine silme araçları ve veri işleme sözleşmesiyle destek oluruz.',
        contactBeforeEmail: 'Haklarınızı kullanmak için ',
        email: 'privacy@airmino.com',
        contactAfterEmail: ' adresine yazın. 30 gün içinde yanıt veririz.',
      },
      subprocessors: {
        title: 'Alt işleyenler ve DPA',
        body:
          'Kendi sunucunuzdaki ve VPC dağıtımlarında alt işleyen yoktur — listelenecek bir alt taraf bulunmaz. Yönetilen bulut seçeneği yalnızca seçtiğiniz bölgedeki altyapı barındırmasını kullanır. Deneme kayıt formu FormSubmit (formdan e-postaya teslim) tarafından işlenir — web sitesinin tek alt işleyeni budur. İlgili durumlarda AB Standart Sözleşme Maddelerini içeren veri işleme sözleşmesi (DPA), herhangi bir pilot öncesinde talep üzerine sunulur.',
      },
      security: {
        title: 'Güvenlik',
        body:
          'Aktarımda (TLS 1.2+) ve depolamada şifreleme, bileşenler arasında mTLS servis kimliği ve karar izleri için yalnızca eklenebilir denetim günlükleri. Tam kontrol eşlemeleri kurumsal değerlendirme sırasında NDA kapsamında sağlanır.',
      },
    },
    cta: { usage: 'Neye karar verdiğini görün →', pricing: 'Platform fiyatlarını görün' },
  },
  es: {
    page: {
      title: 'RGPD y tratamiento de datos — Airmino',
      description:
        'Cómo gestiona Airmino los datos personales: minimización, despliegue VPC/autohospedado, conservación, subencargados y tus derechos bajo el RGPD.',
    },
    breadcrumb: { home: 'Inicio', separator: '/', label: 'RGPD y tratamiento de datos' },
    hero: {
      kicker: 'Cumplimiento',
      title: 'Tus datos siguen siendo tuyos.',
      description:
        'Airmino es infraestructura de decisiones, no un negocio de datos. Tratamos los mínimos datos personales necesarios para devolver una decisión, nunca entrenamos modelos con tus datos y puedes mantenerlo todo dentro de tu red. Última actualización: octubre de 2026.',
    },
    sections: {
      process: {
        title: 'Qué tratamos',
        beforeEndpoint: 'Para devolver una decisión tratamos los campos que envías en ',
        endpoint: 'POST /v1/decide',
        afterEndpoint:
          ' — normalmente un nombre de decisión, las opciones que defines y campos de contexto (por ejemplo, importes, prioridades y segmentos). Se trata lo que incluyes en el payload; no se recopila nada más. Envía IDs de referencia en lugar de datos personales sin procesar cuando tu flujo lo permita.',
      },
      whereRuns: {
        title: 'Dónde se ejecuta',
        body:
          'Airmino se despliega dentro de tu VPC o totalmente autohospedado como un único contenedor sin llamadas externas — los payloads de decisiones nunca salen de tu red y no hay transferencias transfronterizas que gestionar. En la opción de nube gestionada, el tratamiento permanece en la región que elijas y los registros se conservan 30 días y después se eliminan.',
      },
      noTraining: {
        title: 'Sin entrenamiento con tus datos',
        body:
          'Los payloads y las decisiones de los clientes nunca se utilizan para entrenar, ajustar ni evaluar modelos. La telemetría del producto (recuentos de solicitudes, distribuciones de latencia y tasas de error) no contiene el contenido del payload y se agrega antes de almacenarse.',
      },
      rights: {
        title: 'Tus derechos',
        body: 'Según el RGPD puedes solicitar acceso, rectificación, supresión, limitación, portabilidad y oposición respecto a los datos personales que tratamos como encargado. Como la mayoría de los despliegues mantienen los datos en tu propia infraestructura, muchas solicitudes se responden más rápido desde tu equipo — te ayudamos con herramientas de eliminación y un acuerdo de tratamiento de datos previa solicitud.',
        contactBeforeEmail: 'Para ejercer tus derechos, contacta con ',
        email: 'privacy@airmino.com',
        contactAfterEmail: '. Respondemos en un plazo de 30 días.',
      },
      subprocessors: {
        title: 'Subencargados y DPA',
        body:
          'Los despliegues autohospedados y VPC no tienen subencargados — no hay nadie posterior que enumerar. La opción de nube gestionada solo utiliza alojamiento de infraestructura en la región elegida. El formulario de registro de prueba lo procesa FormSubmit (entrega de formularios por correo electrónico) — el único subencargado del sitio web. Hay disponible, previa solicitud antes de cualquier piloto, un acuerdo de tratamiento de datos (DPA) que incorpora las cláusulas contractuales tipo de la UE cuando corresponde.',
      },
      security: {
        title: 'Seguridad',
        body:
          'Cifrado en tránsito (TLS 1.2+) y en reposo, identidad de servicio mTLS entre componentes y registros de auditoría append-only para las trazas de decisiones. Los mapeos de control completos se proporcionan bajo NDA durante la evaluación empresarial.',
      },
    },
    cta: { usage: 'Descubre qué decide →', pricing: 'Ver precios de la plataforma' },
  },
  de: {
    page: {
      title: 'DSGVO und Datenverarbeitung — Airmino',
      description:
        'Wie Airmino personenbezogene Daten verarbeitet: Datenminimierung, VPC-/Self-hosted-Bereitstellung, Aufbewahrung, Unterauftragsverarbeiter und Ihre Rechte nach der DSGVO.',
    },
    breadcrumb: { home: 'Startseite', separator: '/', label: 'DSGVO und Datenverarbeitung' },
    hero: {
      kicker: 'Compliance',
      title: 'Ihre Daten bleiben Ihre Daten.',
      description:
        'Airmino ist Entscheidungsinfrastruktur, kein Datenunternehmen. Wir verarbeiten nur die für eine Entscheidung nötigen personenbezogenen Daten, trainieren niemals Modelle mit Ihren Daten und Sie können alles in Ihrem eigenen Netzwerk halten. Zuletzt aktualisiert: Oktober 2026.',
    },
    sections: {
      process: {
        title: 'Was wir verarbeiten',
        beforeEndpoint: 'Für eine Entscheidung verarbeiten wir die Felder, die Sie an ',
        endpoint: 'POST /v1/decide',
        afterEndpoint:
          ' senden — typischerweise einen Entscheidungsnamen, Ihre Optionen und Kontextfelder (z. B. Beträge, Prioritäten und Segmente). Verarbeitet wird, was Sie in den Payload aufnehmen; mehr wird nicht erhoben. Senden Sie nach Möglichkeit Referenz-IDs statt roher personenbezogener Daten.',
      },
      whereRuns: {
        title: 'Wo es läuft',
        body:
          'Airmino wird in Ihrer VPC oder vollständig selbst gehostet als einzelner Container ohne externe Aufrufe betrieben — Entscheidungs-Payloads verlassen Ihr Netzwerk nie, und es gibt keinen grenzüberschreitenden Transfer zu verwalten. Bei der Managed-Cloud-Option bleibt die Verarbeitung in der von Ihnen gewählten Region; Logs werden 30 Tage aufbewahrt und danach gelöscht.',
      },
      noTraining: {
        title: 'Kein Training mit Ihren Daten',
        body:
          'Kunden-Payloads und Entscheidungen werden nie zum Trainieren, Feinabstimmen oder Bewerten von Modellen verwendet. Produkttelemetrie (Anfragezahlen, Latenzverteilungen und Fehlerraten) enthält keine Payload-Inhalte und wird vor der Speicherung aggregiert.',
      },
      rights: {
        title: 'Ihre Rechte',
        body: 'Nach der DSGVO können Sie als betroffene Person Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit und Widerspruch für personenbezogene Daten verlangen, die wir als Auftragsverarbeiter verarbeiten. Da die meisten Bereitstellungen Daten in Ihrer eigenen Infrastruktur halten, beantwortet Ihr Team viele Anfragen am schnellsten — wir unterstützen Sie auf Anfrage mit Löschwerkzeugen und einem Datenverarbeitungsvertrag.',
        contactBeforeEmail: 'Zur Ausübung Ihrer Rechte kontaktieren Sie ',
        email: 'privacy@airmino.com',
        contactAfterEmail: '. Wir antworten innerhalb von 30 Tagen.',
      },
      subprocessors: {
        title: 'Unterauftragsverarbeiter und DPA',
        body:
          'Self-hosted- und VPC-Bereitstellungen haben keine Unterauftragsverarbeiter — es gibt niemanden nachgelagert aufzulisten. Die Managed-Cloud-Option nutzt nur Infrastruktur-Hosting in Ihrer gewählten Region. Das Anmeldeformular für den Test wird von FormSubmit verarbeitet (Formular-zu-E-Mail-Zustellung) — der einzige Website-Unterauftragsverarbeiter. Ein Datenverarbeitungsvertrag (DPA) mit den EU-Standardvertragsklauseln, sofern relevant, ist vor jedem Pilotprojekt auf Anfrage erhältlich.',
      },
      security: {
        title: 'Sicherheit',
        body:
          'Verschlüsselung während der Übertragung (TLS 1.2+) und im Ruhezustand, mTLS-Dienstidentität zwischen Komponenten und unveränderliche Audit-Logs für Entscheidungsspuren. Vollständige Control-Mappings werden während der Unternehmensbewertung unter NDA bereitgestellt.',
      },
    },
    cta: { usage: 'Sehen Sie, was es entscheidet →', pricing: 'Plattformpreise ansehen' },
  },
};

export function getGdprCopy(locale?: LocaleInput): GdprCopy {
  return GDPR_COPY[normalizeLocale(locale)];
}

export const gdprCopy = GDPR_COPY;
