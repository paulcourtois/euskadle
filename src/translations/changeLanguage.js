import i18n from "i18next";
 const changeLanguage = (language) => {
  const languages = {
    french : 'fr',
    spanish: 'es'
  };
  i18n.changeLanguage(languages[language])
 };

 export default changeLanguage