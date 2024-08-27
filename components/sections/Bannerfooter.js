import Link from 'next/link'

export default function Bannerfooter({data}) {
    return (
        <>
        {data.map((item) => (

            <section key={item._id} className="request-area request-bg" data-background={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="request-content text-center">
                                        <h2 className="title">{item.title}</h2>
                                        <div className="content-bottom">
                                            <Link href="tel:0123456789" className="btn">{item.subtitle}</Link>
                                            <div className="content-right">
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    {/* <span>Toll Free Call</span> */}
                                                    <Link  dir="ltr" href={`tel:${item.contact_number}`}>{item.contact_number}</Link>
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
                    ))}
        </>
    )
}
