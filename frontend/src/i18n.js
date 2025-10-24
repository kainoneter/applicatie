import {createI18n} from 'vue-i18n';
import en from './locales/en.json'
import nl from './locales/nl.json'

const browserLocale = navigator.language.split('-')[0];
const locale = ['en', 'nl'].includes(browserLocale) ? browserLocale : 'en';

const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: 'en',
    messages: {
        en,
        nl
    },
});


export default i18n;