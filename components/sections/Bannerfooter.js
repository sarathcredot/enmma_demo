import Link from 'next/link'

export default function Bannerfooter() {
    return (
        <>
            <section className="request-area request-bg" data-background="/assets/img/bg/request_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="request-content text-center">
                                        <h2 className="title">Offering The Best Experience Of Real Estate  Services</h2>
                                        <div className="content-bottom">
                                            <Link href="tel:0123456789" className="btn">Contact With Us</Link>
                                            <div className="content-right">
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    {/* <span>Toll Free Call</span> */}
                                                    <Link href="tel:0123456789">+ 88 ( 9600 ) 6002</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="request-shape">
                            <img src="/assets/img/images/request_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/request_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
        </>
    )
}
