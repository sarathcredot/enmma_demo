'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },

};

export default function TestimonialActiveTwoSlider() {
    return (
        <>
     
                    <div className="testimonial__item-three">
                        {/* <div className="testimonial__rating testimonial__rating-two">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div> */}
                        <p>“ Morem ipsum dolor sit amet, consectetur adipiscing elita florai sum dolor sit amet, consecteture.Borem ipsum dolor sit amet, consectetur adipiscing elita Moremsit amet.</p>
                        <div className="testimonial__bottom">
                   
                            <div className="testimonial__icon">
                                <img src="/assets/img/icon/quote02.svg" alt="" />
                            </div>
                        </div>
                    </div>
{/*             
            <div className="testimonial__nav-two">
                <div className="testimonial-button-prev"><i className="flaticon-right-arrow" /></div>
                <div className="testimonial-button-next"><i className="flaticon-right-arrow" /></div>
            </div> */}
        </>
    )
}
