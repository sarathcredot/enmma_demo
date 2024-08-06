const { i18n } = require('next-i18next');

module.exports = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false, // Disable automatic locale detection
  },
};
