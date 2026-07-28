import { en } from './en';
import { ua } from './ua';
import type { Dictionary } from './dictionary';

export const defaultLocale = 'en';
export const locales = ['en', 'ua'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Dictionary> = { en, ua };

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first === 'ua' ? 'ua' : 'en';
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Prefixes a root-relative path with the locale segment, except for the default locale. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

/** Given the current pathname, returns the equivalent path in the other locale. */
export function getAlternatePath(pathname: string, targetLocale: Locale): string {
  const withoutLocale = pathname.replace(/^\/ua(\/|$)/, '/');
  return localizePath(withoutLocale, targetLocale).replace(/\/{2,}/g, '/');
}
