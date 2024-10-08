import { appWithTranslation, useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { Inter, Outfit } from 'next/font/google';



const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--tg-body-font-family',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--tg-heading-font-family',
  display: 'swap',
});

function RootLayout({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${outfit.variable}`}>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
