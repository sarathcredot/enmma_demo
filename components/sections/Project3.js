




'use client';
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'next-i18next';

export default function Project3({ data }) {
  const slider = useRef(null);
  const [services, setServices] = useState([]);

  const { t } = useTranslation('common');
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services`);
        console.log("fetch data",response.data)
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // Localize the data based on the current language
  const localizedData = services.map(item => {
    return {
      ...item,
      title: item[`title_${i18n.language}`] || item.title_en,
      subtitle: item[`subtitle_${i18n.language}`] || item.subHeading1_en,
      description: item[`description_${i18n.language}`] || item.description_en
    };
  });

  // Function to truncate the description
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, // No arrows
    dots: true // Enable dots for focusing
    
  };

  return (
    <>
      {data?.map((item) => (
        <section key={item._id} className="project__area-three project__bg-three" data-background="/assets/img/bg/h3_project_bg.jpg">
          <div className="container">
            <div className="row justify-content-center">
              <div style={{ width: "100%", display: "flex", gap: "200px", paddingTop: "20px" }} className="col-xl-7 col-lg-8">
                <div style={{ width: "500px" }} className="section-title mb-40 tg-heading-subheading animation-style3">
                  <span style={{ fontSize: "18px" }} className="sub-title justify-content-center">{item.subtitle}</span>
                  <h5 className="title">{item.title}</h5>
                </div>

                <div className="dev_customsize classMedia mt-0 mt-md-4">
                  {/* Truncate the description to show only part of it */}
                  {truncateText(item.description, 100)}
                </div>
              </div>
            </div>

            <Slider ref={slider} {...settings}>
              {localizedData.map((service, index) => (
                <div key={index} className="row">
                  <div className="col-12">
                    <div className="project__item-three shine-animate-item">
                      <div className="project__content-three">
                        <span>{service.subtitle}</span>
                        <h2 className="title">{service.title}</h2>


                       
                        <p>{truncateText(service.description, 100)}</p>
                        <Link href={`/services/${service.slug}`} className="btn btn-two">
                          {t('read-more')}
                        </Link>
                      </div>

                      <div className="project__thumb-three shine-animate">
                        <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${service.imageUrl}`} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="project__shape-wrap-three">
              <img src="/assets/img/project/h3_project_shape01.png" alt="" data-aos="fade-left" data-aos-delay={400} />
              <img src="/assets/img/project/h3_project_shape02.png" alt="" className="alltuchtopdown" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

