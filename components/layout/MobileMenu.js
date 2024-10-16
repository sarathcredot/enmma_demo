import Link from "next/link"
import { useState } from "react"
import { useTranslation } from 'next-i18next';

export default function MobileMenu() {
    const { t, i18n } = useTranslation("common");
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                {/* <li className="active menu-item-has-children"><Link href="#">Home</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">01. Business</Link></li>
                        <li><Link href="index-2">02. Finance</Link></li>
                        <li><Link href="index-3">03. Consulting</Link></li>
                        <li><Link href="index-4">04. Insurance</Link></li>
                        <li><Link href="index-5">05. Digital agency</Link></li>
                        <li><Link href="/index-6">06. Finance Solutions</Link></li>
                        <li><Link href="/index-7">07. Accounting Services</Link></li>
                        <li><Link href="/index-8">08. IT Solutions</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="plus-line" /></div></li> */}
                <li className="menu-item-has-children"><Link href="/about">{t('about')} </Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/about-sub/#director">{t("board_of_directors")}</Link></li>
                        <li><Link href="/about-sub/#management">{t("management")}</Link></li>
                        <li><Link href="/about-sub/#executive">{t("executive")} </Link></li>
             
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="plus-line" /></div></li>
                <li className="menu-item-has-children"><Link href="/government">{t("govt_bots")}</Link></li>
                <li className="menu-item-has-children"><Link href="/services">{t("services")}</Link></li>
                <li className="menu-item-has-children"><Link href="/corporate">{t("corporate_governance")}</Link></li>
                <li className="menu-item-has-children"><Link href="#">{t("investor_relations")}</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="/annual-report">{t("annual_report")}</Link></li>
                        <li><Link href="/disclosures">{t("disclosures")}</Link></li>
                        <li><Link href="/investor-relations">{t("investor_relations")}</Link></li>
                        <li><Link href="/financial-statement">{t("financial_statement")}</Link></li>
                  
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="#">{t("info_center")} </Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link href="/blog">{t("latest_news")}</Link></li>
                        <li><Link href="/careers">{t("careers")}</Link></li>
                        <li><Link href="/complaints">{t("complaints")}</Link></li>
                        <li><Link href="mailto:whistleblower@enmaa.com">{t("report_incident")}</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="plus-line" /></div>
                </li>
                <li><Link href="/contact">{t("contact")}</Link></li>
            </ul>
        </>
    )
}
