import Link from "next/link"
import SVG from "@/components/elements/Allsvg"
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default function Footer3() {
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
                                        <p className="dev_cutsomaddress">Al Enma’a Real Estate Company K.S.C.P was registered and incorporated in State of Kuwait in 1993.</p>
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
                                            <span className="title">Follow Us on:</span>
                                            <ul className="list-wrap">
                                                {/* <li><Link href="##"><i className="fab fa-facebook-f" /></Link></li> */}
                                                <li><Link href="##"> <SVG caseValue='case6'/></Link></li>
                                                <li><Link href="##"><i className="fab fa-instagram" /></Link></li>
                                                {/* <li><Link href="##"><i className="fab fa-pinterest-p" /></Link></li> */}
                                                {/* <li><Link href="##"><i className="fab fa-youtube" /></Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Information Center</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="#/about">Latest News</Link></li>
                                                <li><Link href="#/about">Careers</Link></li>
                                                <li><Link href="#/team">Complaints & Suggestions</Link></li>
                                                <li><Link href="#/contact">Report An Incident</Link></li>
                                              
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-sm-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Quick Links</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="#/about">Search Properties</Link></li>
                                                <li><Link href="#/contact">Pay Rent Online</Link></li>
                                                <li><Link href="#/contact">Government BOTS</Link></li>
                                                <li><Link href="#/contact">Services</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Location</h4>
                                        <div className="footer-info-list">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="#tel:0123456789">+1866667</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-envelope" />
                                                    </div>
                                                    <div className="content">
                                                        <Link href="#mailto:enmaa@enmaa.com">enmaa@enmaa.com</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <p>Abdullah Al-Mobarak Street, Al-Enmaa Tower, Kuwait City</p>
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
                                        <p>Copyright © 2024 Al Enmaa Real Estate Co . All rights reserved |  Powered By Anathoth IT Solutions</p>
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
