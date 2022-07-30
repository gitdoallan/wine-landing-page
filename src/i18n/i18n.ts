import i18n from 'i18next';
import LanguageDetector, {
  DetectorOptions,
} from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const options: DetectorOptions = {
  order: ['path', 'navigator'],
  lookupQuerystring: 'lng',
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: './src/i18n/locales/{{lng}}/{{ns}}.json', // Specify where backend will find translation files.
    },
    detection: options,
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
