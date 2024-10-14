



'use client';
import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'; // Import required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation'; // Import Navigation styles

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay, Navigation]);

export default function Project3({ data }) {
  useEffect(() => {
    console.log("project3", data);
  }, []);

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { clickable: true },
    autoplay: { delay: 3000 },
    loop: true, // Enable loop if needed
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <>
      {data.map((item) => (
        <section  key={item._id} className="project__area-three project__bg-three" data-background="/assets/img/bg/h3_project_bg.jpg">
          <div  className="container">
            <div className="row justify-content-center">
              <div style={{ width: "100%", display: "flex", gap: "200px", paddingTop: "20px" }} className="col-xl-7 col-lg-8">
                <div style={{ width: "500px" }} className="section-title mb-40 tg-heading-subheading animation-style3">
                  <span className="sub-title justify-content-center"> {item.subtitle} </span>
                  <h5 style={{ fontSize: "30px" }}>{item.title} </h5>
                </div>

                <div className="dev_customsize classMedia mt-0 mt-md-4">
                  Our power of choice is untrammelled and when nothing <br />
                  prevents being able to do what we like best every pleasure.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Swiper {...swiperOptions} className="swiper-wrapper"> {/* Implement Swiper */}
                  <SwiperSlide>
                    <div className="project__item-three shine-animate-item">
                      <div className="project__content-three">
                        <span>{item.subtitle}</span>
                        <h2 className="title">{item.sidebarSubtitle}</h2>
                        <p>{item.description}</p>
                        <Link href={item.buttonLink} className="btn btn-two">{item.buttonTitle}</Link>
                      </div>
                      <div className="project__thumb-three shine-animate">
                        <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Add more SwiperSlides if necessary */}
                </Swiper>

                {/* Swiper Navigation Buttons */}
                {/* <div className="swiper-button-next"> bt </div>
                <div className="swiper-button-prev"> bt </div> */}
              
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
  );
}
