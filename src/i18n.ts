import { createI18n } from 'vue-i18n';

const messages = {
    nl: {
        Home: "Thuis",
        Projects: "Projecten"
    },
};

const i18n = createI18n({
    locale: 'en', // set default locale
    messages,
    silentTranslationWarn: true
});

export default i18n;