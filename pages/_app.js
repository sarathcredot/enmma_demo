import { appWithTranslation, useTranslation } from 'next-i18next';
import { Inter, Outfit } from 'next/font/google';
import '/public/assets/css/animate.min.css';
import '/public/assets/css/bootstrap.min.css';
import '/public/assets/css/flaticon.css';
import '/public/assets/css/fontawesome-all.min.css';
import '/public/assets/css/magnific-popup.css';
import '/public/assets/css/odometer.css';
import '/public/assets/css/swiper-bundle.css';
import '/public/assets/css/aos.css';
import '/public/assets/css/default.css';
import '/public/assets/css/main.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    if (i18n.language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />

    </>

  )

}

export default appWithTranslation(MyApp);
