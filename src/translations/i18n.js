import i18n from "i18next";
import { initReactI18next } from "react-i18next";
 
import { TRANSLATIONS_ES } from "./es/translation";
import { TRANSLATIONS_FR } from "./fr/translation";
 
i18n
 .use(initReactI18next)
 .init({
   resources: {
     fr: {
       translation: TRANSLATIONS_FR
     },
     es: {
       translation: TRANSLATIONS_ES
     }
   }
 });

 const changeLanguage = (language) => {
  const languages = {
    french : 'fr',
    spanish: 'es'
  };
  i18n.changeLanguage(languages[language])
 };

export default changeLanguage