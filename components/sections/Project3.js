'use client'
import Link from "next/link"



export default function Project3({data}) {
    return (
        <>
       {data.map((item) => (
            
        
            <section key={item._id}className="project__area-three project__bg-three" data-background="/assets/img/bg/h3_project_bg.jpg">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-xl-7  col-lg-8">
                            <div className="section-title text-center mb-40 tg-heading-subheading animation-style3">
                                {/* <span className="sub-title justify-content-center"></span> */}
                                <h2 className="title tg-element-title ">{item.title}</h2>
                            </div>
                                {/* <div className="dev_customsize mt-4">Our power of choice is untrammelled and when nothing prevents being able to do what we like best every pleasure.</div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper-container project-active">
                                {/* <Swiper {...swiperOptions} className="swiper-wrapper"> */}
                                    {/* <SwiperSlide> */}
                                        <div className="project__item-three shine-animate-item">
                                            <div className="project__content-three">
                                                <span>{item.subtitle}</span>
                                                <h2 className="title">{item.sidebarSubtitle}</h2>
                                                <p >{item.description}</p>
                                                <Link href={item.buttonLink} className="btn btn-two">{item.buttonTitle}</Link>
                                            </div>
                                            <div className="project__thumb-three shine-animate">
                                            <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} alt="" />
                                            </div>
                                        </div>
                          
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project__shape-wrap-three">
                    <img src="/assets/img/project/h3_project_shape01.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                    <img src="/assets/img/project/h3_project_shape02.png" alt="" className="alltuchtopdown" />
                </div>
            </section>
        ))}
        </>
    )
}
