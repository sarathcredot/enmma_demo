import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const FloatingLanguageSwitcher = () => {
  const { t } = useTranslation('common');
  const { i18n } = useTranslation();
  const router = useRouter();
  const [tooltipVisible, setTooltipVisible] = useState({});

  const toggleTooltip = (id) => {
    setTooltipVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const changeLanguage = async (languageCode) => {
    await i18n.changeLanguage(languageCode);
    router.push(router.pathname, router.asPath, { locale: languageCode });
  };

  const languages = [
    { code: "en", name: "En", lang: "English" },
    { code: "ar", name: "ع", lang: "العربية" },
  ];

  return (
    <div className="wpml-floating-language-switcher">
      <div className="wpml-ls-statics-shortcode_actions">
        {languages.map((lang) => (
          <div key={lang.code} style={{ position: 'relative', display: 'inline-block' }}>
            <a
              onClick={() => changeLanguage(lang.code)}
              className={`${i18n.language === lang.code ? "active" : ""} floatlanglink`}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => toggleTooltip(lang.code)}
              onMouseLeave={() => toggleTooltip(lang.code)}
            >
              {lang.name}
            </a>

            {tooltipVisible[lang.code] && (
              <div className="custom-tooltip">
                {t('Change-language')} {lang.lang}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .custom-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background-color: black;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          white-space: nowrap;
          font-size: 12px;
          z-index: 1000;
          opacity: 0.75;
        }
        .floatlanglink.active {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default FloatingLanguageSwitcher;
