import Backend from "i18next-xhr-backend";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en",
    backend: {
      /* translation file path */
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json"
    },
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    // allow cross domain requests
    crossDomain: false,

    // allow credentials on cross domain requests
    withCredentials: false,
    react: {
      wait: true
    }
  });

export default i18n;
