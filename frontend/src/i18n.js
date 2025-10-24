import {createI18n} from 'vue-i18n';
import en from './locales/en.json'
import nl from './locales/nl.json'

const locale = navigator.language.split('-')[0];
const messages = {
  en: { hello: 'Hello' },
  nl: { hello: 'Bonjour' }
}
const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: 'en',
    messages,
});


export default i18n;