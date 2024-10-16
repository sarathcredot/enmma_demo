import Link from "next/link"
import { useTranslation } from 'next-i18next';

export default function Menu() {
    const { t } = useTranslation('common');
    return (
        <>
            <ul className="navigation">
                {/* <li className="active menu-item-has-children"><Link href="#">Home</Link>
                    <ul className="sub-menu">
                        <li><Link href="/">01. Business</Link></li>
                        <li><Link href="/index-2">02. Finance</Link></li>
                        <li><Link href="/index-3">03. Consulting</Link></li>
                        <li><Link href="/index-4">04. Insurance</Link></li>
                        <li><Link href="/index-5">05. Digital agency</Link></li>
                        <li><Link href="/index-6">06. Finance Solutions</Link></li>
                        <li><Link href="/index-7">07. Accounting Services</Link></li>
                        <li><Link href="/index-8">08. IT Solutions</Link></li>

                    </ul>
                    </li> */}
                    <li> <Link href="/">{t("home")}</Link></li>
                <li className="menu-item-has-children"><Link href="/about">{t('about')}</Link>
                    <ul className="sub-menu">
                        <li><Link href="/about/"  >{t("our-story")}</Link></li>
                        <li><Link href="/about-sub/#director"  >{t("board_of_directors")}</Link></li>
                        <li><Link href="/about-sub/#management">{t("management")}</Link></li>
                        <li><Link href="/about-sub/#executive">{t("executive")}</Link></li>
                        {/* <li><Link href="/>Insurance About</Link></li>
                        <li><Link href="/#about-4">Digital agency About</Link></li> */}
                    </ul>
                </li>

                 <li> <Link href="/government">{t("govt_bots")}</Link></li>
                    <li> <Link href="/services">{t("services")}</Link></li>

                <li className="menu-item-has-children"><Link href="#">{t("investor_relations")}</Link>
                    <ul className="sub-menu">
                    <li> <Link href="/corporate">{t("corporate_governance")}</Link></li>
                        <li><Link href="/annual-report">{t("annual_report")}</Link></li>
                        <li><Link href="/disclosures">{t("disclosures")}</Link></li>
                        <li><Link href="/investor-relations">{t("investor_relations")}</Link></li>
                        <li><Link href="/financial-statement">{t("financial_statement")}</Link></li>
                        {/* <li><Link href="/#-5">Digital agency Service</Link></li>
                        <li><Link href="/#-details">Service Details One</Link></li>
                        <li><Link href="/#-details-2">Service Details Two</Link></li>
                        <li><Link href="/#-details-3">Service Details Three</Link></li>
                        <li><Link href="/#-details-4">Service Details Four</Link></li>
                        <li><Link href="/#-details-5">Service Details Five</Link></li> */}
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">{t("info_center")}</Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">{t("latest_news")}</Link></li>
                        <li><Link href="/careers">{t("careers")}</Link></li>
                        <li><Link href="/complaints">{t("complaints")}</Link></li>
                        <li><Link href="mailto:whistleblower@enmaa.com">{t("report_incident")}</Link></li>
                        {/* <li><Link href="/#-details">Team Details</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                        <li><Link href="/error">404 Error Page</Link></li>
                        <li><Link href="/login">Login Page</Link></li>
                        <li><Link href="/register">Register Page</Link></li>
                        <li><Link href="/forgot-password">Forgot password Page</Link></li> */}
                    </ul>
                </li>
                {/* <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/contact">{t("contact")}</Link></li>
            </ul>
        </>
    )
}
