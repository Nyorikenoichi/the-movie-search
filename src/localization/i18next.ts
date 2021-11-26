import i18next from 'i18next';

const translationEN = require('./en/translation.json');

const initI18next = () => i18next.init({
  debug: false,
  lng: 'en',
  resources: {
    en: {
      translation: translationEN,
    },
  },
});

export default initI18next;
