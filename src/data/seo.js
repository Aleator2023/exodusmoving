// Language-specific addresses and search-engine data.
// Hebrew lives at the root (/, /services/<slug>/), Russian under /ru/,
// English under /en/. Plain data only: also read by vite.config.js.

import { SITE_URL, servicePages, servicePath } from './servicePages.js';

export { SITE_URL };

export const LANGUAGES = ['he', 'ru', 'en'];
export const DEFAULT_LANGUAGE = 'he';

export const languageDirection = (language) =>
  language === 'he' ? 'rtl' : 'ltr';

export const ogLocale = { he: 'he_IL', ru: 'ru_RU', en: 'en_US' };

export const siteName = {
  he: 'הובלות אקסודוס',
  ru: 'Exodus Moving',
  en: 'Exodus Moving',
};

export const languagePrefix = (language) =>
  language === DEFAULT_LANGUAGE ? '' : `/${language}`;

export const languageFromPath = (pathname) => {
  const match = pathname.match(/^\/(ru|en)(?=\/|$)/);
  return match ? match[1] : DEFAULT_LANGUAGE;
};

// '/ru/services/piano-moving/' -> '/services/piano-moving/'
export const stripLanguagePrefix = (pathname) =>
  pathname.replace(/^\/(ru|en)(?=\/|$)/, '') || '/';

// localizePath('ru', '/services/piano-moving/') -> '/ru/services/piano-moving/'
export const localizePath = (language, path) =>
  languagePrefix(language) + path;

export const pageUrl = (language, path) =>
  SITE_URL + localizePath(language, path);

// Hebrew title/description are the same as in index.html.
export const homeMeta = {
  he: {
    title: 'הובלות אקסודוס | הובלת דירות ומשרדים באיזור המרכז',
    description:
      'הובלות אקסודוס – הובלת דירות ומשרדים באיזור המרכז. שירותי אריזה, פירוק והרכבת רהיטים, הובלות עם מנוף ושירות מקצועי ואמין.',
  },
  ru: {
    title: 'Exodus Moving | Квартирные и офисные переезды в центре Израиля',
    description:
      'Exodus Moving: перевозка квартир и офисов в центре Израиля и по всей стране. Упаковка, разборка и сборка мебели, кран, пианино. Профессионально и надёжно.',
  },
  en: {
    title: 'Exodus Moving | Apartment & Office Movers in Central Israel',
    description:
      'Exodus Moving: apartment and office moving in central Israel and nationwide. Packing, furniture assembly, crane and piano moving. Professional and reliable.',
  },
};

// Every page of the site (without language prefix) with its meta per language.
export const sitePages = [
  {
    path: '/',
    meta: (language) => homeMeta[language],
  },
  ...servicePages.map((page) => ({
    path: servicePath(page.slug),
    meta: (language) => ({
      title: page[language].metaTitle,
      description: page[language].metaDescription ?? page.he.metaDescription,
    }),
  })),
];

export const findSitePage = (path) =>
  sitePages.find((page) => page.path === path) ?? sitePages[0];

// hreflang alternates for one page: he/ru/en + x-default (Hebrew)
export const hreflangLinks = (path) => [
  ...LANGUAGES.map((language) => ({
    hreflang: language,
    href: pageUrl(language, path),
  })),
  { hreflang: 'x-default', href: pageUrl(DEFAULT_LANGUAGE, path) },
];
