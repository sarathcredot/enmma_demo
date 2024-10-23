import Link from "next/link"
import SVG from "@/components/elements/Allsvg"
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { useTranslation } from 'next-i18next';


export default function Footer3() {
    const { t } = useTranslation('common');
    return (
        <>
            <footer>
                <div className="footer__area-three">
                    <div className="footer__top-three">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-8">
                                    <div className="footer-widget">
                                    <div className="col-md-6">
                                    <div className="dev_customfooter">
                                        <Link href="#/"><img src="/assets/img/logo/w_logo.png" width={60} height={80} alt="" /></Link>
                                        <p className="dev_cutsomaddress">{t("company_description")}</p>
                                        <LanguageSwitcher />
                                    </div>
                                </div>
                                        {/* <div className="footer__newsletter-three">
                                            <h2 className="title">Never Miss out on a Moment <br /> Apexa us</h2>
                                            <form action="#">
                                                <input type="email" placeholder="e-mail Type . . ." />
                                                <button className="btn" type="submit">Subscribe</button>
                                            </form>
                                        </div> */}
                                        <div className="footer__social-three">
                                            <span className="title">{t("follow_us")}</span>
                                            <ul className="list-wrap">
                                                {/* <li><Link href="##"><i className="fab fa-facebook-f" /></Link></li> */}
                                                <li><Link href="/"> <SVG caseValue='case6'/></Link></li>
                                                <li><Link href="/"><i className="fab fa-instagram" /></Link></li>
                                                {/* <li><Link href="##"><i className="fab fa-pinterest-p" /></Link></li> */}
                                                {/* <li><Link href="##"><i className="fab fa-youtube" /></Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">{t("information_center")}</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/blog">{t("latest_news")}</Link></li>
                                                <li><Link href="/careers">{t("careers")}</Link></li>
                                                <li><Link href="/complaints">{t("complaints_suggestions")}</Link></li>
                                                <li><Link href="/contact">{t("report_incident")}</Link></li>
                                              
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-sm-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">{t("quick_links")}</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/">{t("search_properties")}</Link></li>
                                                <li><Link href="/">{t("pay_rent_online")}</Link></li>
                                                <li><Link href="/government">{t("government_bots")}</Link></li>
                                                <li><Link href="/services">{t("services")}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">{t("location")}</h4>
                                        <div className="footer-info-list">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content dir-ltr">
                                                        <Link href="tel:0123456789">
                                                        + 88( 9600 )6002 </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-envelope" />
                                                    </div>
                                                    <div className="content dir-ltr">
                                                        <Link href="mailto:enmaa@enmaa.com">enmaa@enmaa.com</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>{t("address")}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-three">
                        <div className="container">
                            <div className="row align-items-center">
                              
                                <div className="col-md-12">
                                    <div className="copyright-text-two">
                                        <p>{t("copyright_text")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
