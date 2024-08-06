'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 6000,
    },
     // Navigation arrows
    navigation: {
        nextEl: '.project-button-next',
        prevEl: '.project-button-prev',
    },
};

export default function Project3() {
    return (
        <>
            <section className="project__area-three project__bg-three" data-background="/assets/img/bg/h3_project_bg.jpg">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-xl-7  col-lg-8">
                            <div className="section-title text-center mb-40 tg-heading-subheading animation-style3">
                                <span className="sub-title justify-content-center">DIVERSE PROPERTY SOLUTION</span>
                                <h2 className="title tg-element-title ">From Ownership to Security , <br />We've Got You Covered</h2>
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
                                                <span>Maximise Property Value</span>
                                                <h2 className="title"><Link href="#/project-details">Owner Services</Link></h2>
                                                <p >Expert solutions for property management and optimisation strategies.</p>
                                                <Link href="#/project-details" className="btn btn-two">See Details</Link>
                                            </div>
                                            <div className="project__thumb-three shine-animate">
                                                <img src="/assets/img/project/h3_project_img01.jpg" alt="" />
                                            </div>
                                        </div>
                                    {/* </SwiperSlide> */}
                                    {/* <SwiperSlide> */}
                                        {/* <div className="project__item-three shine-animate-item">
                                            <div className="project__content-three">
                                                <span>Inventory Tracking</span>
                                                <h2 className="title"><Link href="/project-details">Inventory Management</Link></h2>
                                                <p >when anner unknown printer took type and scramble to make specimen book.</p>
                                                <Link href="/project-details" className="btn btn-two">See Details</Link>
                                            </div>
                                            <div className="project__thumb-three shine-animate">
                                                <img src="/assets/img/project/h3_project_img01.jpg" alt="" />
                                            </div>
                                        </div> */}
                                    {/* </SwiperSlide> */}
                                {/* </Swiper> */}
                                {/* <div className="project__nav-wrap">
                                    <div className="project-button-prev"><i className="flaticon-right-arrow" /></div>
                                    <div className="project-button-next"><i className="flaticon-right-arrow" /></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project__shape-wrap-three">
                    <img src="/assets/img/project/h3_project_shape01.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                    <img src="/assets/img/project/h3_project_shape02.png" alt="" className="alltuchtopdown" />
                </div>
            </section>
        </>
    )
}
