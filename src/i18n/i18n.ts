import i18n, { Resource } from 'i18next';
import LanguageDetector, {
  DetectorOptions,
} from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend'; // <---- add this
import { initReactI18next } from 'react-i18next';

import commonEn from './locales/en/common.json';
import commonEs from './locales/es/common.json';
import commonPt from './locales/pt/common.json';

const resources: Resource = {
  pt: { common: commonPt },
  en: { common: commonEn },
  es: { common: commonEs },
};

const options: DetectorOptions = {
  order: ['path', 'navigator'],
  lookupQuerystring: 'lng',
};

i18n
  .use(XHR) // <---- add this
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'pt',
    supportedLngs: ['en', 'pt', 'es'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
