import Link from 'next/link'

export default function Request3({data}) {
    return (
        <>
       { data.map((item) => (
            
       
            <section key={item._id} className="request__area-two">
                <div className="request__bg-two" data-background={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} />
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-5 col-lg-6">
                            <div className="request__content-two">
                                <h2 className="title">{item.title}</h2>
                                <span className='devspan '>{item.subtitle}</span> 
                                <div className="request__phone mt-4">
                                    <div className="icon">
                                        <i className="flaticon-envelope" />
                                    </div>
                                    <div className="content">
                                        {/* <span>Contact US</span> */}
                                        <Link href={item.email}>{item.email}</Link>
                                    </div>
                                </div>
                                <div className="request__phone">
                                    <div className="icon">
                                        <i className="flaticon-phone-call" />
                                    </div>
                                    <div className="content">
                                        {/* <span>Contact US</span> */}
                                        <Link  dir="ltr" href={`tel:${item.phone_number}`}> {item.phone_number}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             ))}
        </>
    )
}
