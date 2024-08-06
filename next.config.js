/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};
// Next.js configuration file integrating next-i18next

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
};
