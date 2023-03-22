module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
    },
    // Load the common namespace by default so we don't have to specify it every time
    ns: ['common'],
    reloadOnPrerender: process.env.NODE_ENV !== 'production',
};
