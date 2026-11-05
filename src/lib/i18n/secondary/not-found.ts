import { normalizeLocale, type Locale, type LocaleInput } from '../index.ts';

export interface NotFoundCopy {
  readonly pageTitle: string;
  readonly description: string;
  readonly title: string;
  readonly backLink: string;
}

const englishNotFoundCopy: NotFoundCopy = {
  pageTitle: 'Page not found',
  description: 'Decision infrastructure for automated operations.',
  title: "This page doesn't exist yet.",
  backLink: 'Back to the homepage →',
};

export const NOT_FOUND_COPY: Record<Locale, NotFoundCopy> = {
  en: englishNotFoundCopy,
  tr: {
    pageTitle: 'Sayfa bulunamadı',
    description: 'Otomatik operasyonlar için karar altyapısı.',
    title: 'Bu sayfa henüz mevcut değil.',
    backLink: 'Ana sayfaya dön →',
  },
  es: {
    pageTitle: 'Página no encontrada',
    description: 'Infraestructura de decisiones para operaciones automatizadas.',
    title: 'Esta página todavía no existe.',
    backLink: 'Volver a la página de inicio →',
  },
  de: {
    pageTitle: 'Seite nicht gefunden',
    description: 'Entscheidungsinfrastruktur für automatisierte Abläufe.',
    title: 'Diese Seite gibt es noch nicht.',
    backLink: 'Zur Startseite →',
  },
};

export function getNotFoundCopy(locale?: LocaleInput): NotFoundCopy {
  return NOT_FOUND_COPY[normalizeLocale(locale)];
}

export const notFoundCopy = NOT_FOUND_COPY;
