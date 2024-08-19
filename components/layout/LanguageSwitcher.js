import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lang) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang });
    i18n.changeLanguage(lang);
  };

  return (
    <div className='search-dev-button" d-flex gap-3'>
      language:
      <button  className="search-dev-button"onClick={() => changeLanguage('en')}>English</button>
      <button className="search-dev-button " onClick={() => changeLanguage('ar')}>العربية</button>
    </div>
  );
}