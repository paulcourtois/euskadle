import i18n from "i18next";
import { initReactI18next } from "react-i18next";
 
import { TRANSLATIONS_ES } from "./es/translation";
import { TRANSLATIONS_FR } from "./fr/translation";
 
i18n
 .use(initReactI18next)
 .init({
  lng:'fr',
   resources: {
     fr: {
       translation: TRANSLATIONS_FR
     },
     es: {
       translation: TRANSLATIONS_ES
     }
   }
 });

 export default i18n
