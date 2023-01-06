import { I18n } from 'i18n';

export default new I18n({
    extension: '.json',
    defaultLocale: 'tr',
    locales: ['en', 'tr'],
    objectNotation: true,
    staticCatalog: {
        en: require('../locale/en.json'),
        tr: require('../locale/tr.json')
    }
});