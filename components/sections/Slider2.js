'use client'
import Link from "next/link"
// import { Autoplay, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"

// const swiperOptions = {
//     modules: [Autoplay, Pagination, Navigation],
//     slidesPerView: 1,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     loop: true,

//     // Navigation
//     navigation: {
//         nextEl: '.testimonial-two-button-next',
//         prevEl: '.testimonial-two-button-prev',
//     },

//     // Pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// }

export default function Slider2({ data }) {
    return (
        <>
            <section className="slider__area">
                <div className="swiper-container slider_baner__active slider_baner_home6">
                    {/* <Swiper {...swiperOptions} className="swiper-wrapper"> */}
                        {data.map((item) => (
                            <div key={item._id} className="swiper-slide">
                                <img className="slider__bg" src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} />
                                <div className="container">
                                    <div className="row">
                                        <div className=" col-lg-8">
                                            <div className="banner__content-three ">
                                                <div className="text-25-years">
                                                    <span className="text-stroke">{item.sidebarNumber}</span>
                                                    <h4 className="text-experience">{item.sidebarSubtitle}</h4>
                                                </div>
                                                <span className="sub-title aos-init aos-animate">{item.subtitle}</span>
                                                <h2 className="title">{item.title}</h2>
                                                <p>{item.description}</p>
                                                {item.buttonTitle ? (
                                                <Link href={item.buttonLink} className="btn">{item.buttonTitle}</Link> ) : (<></>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {/* </Swiper> */}
                </div>
                {/* <div className="box-button-slider-bottom">
                    <div className="container">
                        <div className="testimonial__nav-four">
                            <div className="testimonial-two-button-prev button-swiper-prev"><i className="flaticon-right-arrow" /></div>
                            <div className="testimonial-two-button-next button-swiper-next"><i className="flaticon-right-arrow" /></div>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}
