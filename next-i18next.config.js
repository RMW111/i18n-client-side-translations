const I18NextHttpBackend = require('i18next-http-backend/cjs');

const mockTranslationsFromBackend = {
  en: {
    'index.title': 'Translated title for IndexPage',
    'index.description': 'Translated description for IndexPage',
    'page1.title': 'Translated title for Page1',
    'page1.description': 'Translated description for Page1',
  },
  ru: {
    'index.title': 'Переведенный заголовок для IndexPage',
    'index.description': 'Переведенное описание для IndexPage',
    'page1.title': 'Переведенный заголовок для Page1',
    'page1.description': 'Переведенное описание для Page1',
  },
};

const requestTranslations = (options, url, payload, callback) => {
  new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
    const translations = url.includes('en.json')
      ? mockTranslationsFromBackend.en
      : mockTranslationsFromBackend.ru;
    callback('', { status: 200, data: translations });
  });
};

/** @type import("next").I18NConfig */
const i18n = {
  fallbackLng: false,
  defaultLocale: 'en',
  locales: ['en', 'ru'],
  localeDetection: false,
  serializeConfig: false,
  nsSeparator: false,
  defaultNS: 'translations',
  backend: {
    loadPath: `https://some-backend-with-translations/{{lng}}.json`,
    request: requestTranslations,
    reloadInterval: 60 * 60 * 1000,
  },
};

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n,
  ns: ['translations'],
  use: [I18NextHttpBackend],
};
