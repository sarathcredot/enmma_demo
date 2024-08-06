import Link from 'next/link'

export default function Choose3() {
    return (
        <>
            <section className="choose__area-three">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                            <div className="choose__img-wrap-three">
                                <div className="main-img">
                                    <img src="/assets/img/images/h3_choose_img021.jpg" alt="" />
                                    {/* <Link href="#" className="play-btn"><i className="fas fa-play" /></Link> */}
                                </div>
                                <img src="/assets/img/images/h3_choose_img02.jpg" alt=""/>
                                <div className="shape">
                                    <img src="/assets/img/images/h3_choose_img_shape.jpg" alt="" className="alltuchtopdown" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose__content-three">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title">INVESTOR ENGAGEMENT CENTER</span>
                                    <h2 className="title tg-element-title dev_width">Seamless Access to Essential Financial Information</h2>
                                </div>
                                <p> Discover valuable insights and engage with our team for a deeper understanding of our company's performance and investment opportunities.</p>
                                <div className="choose__list">
                                <div className="about__list-box ">
                                        <ul className="list-wrap">
                                            <li><i className="fa icon-arrow" />Annual Reports</li>
                                            <li><i className="fa icon-arrow" />Disclosures</li>
                                            <li><i className="fa icon-arrow" />Investor Relations Contact</li>
                                            <li><i className="fa icon-arrow" />Financial Statements</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose__shape-wrap-three">
                    <img src="/assets/img/images/h3_choose_shape01.jpg" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" />
                    <img src="/assets/img/images/h3_choose_shape02.jpg" alt="" />
                </div>
            </section>
        </>
    )
}
