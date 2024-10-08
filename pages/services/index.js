import Layout from "@/components/layout/Layout";
import Banner2 from "@/components/sections/Banner2";
import Link from "next/link";
import TestimonialActiveTwoSlider from "@/components/slider/TestimonialActiveTwoSlider";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import Servicesection from "@/components/devsection/Servicesection";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { getLocalized } from "@/util/localization-helper"

export default function Services({ initialData }) {
  const { t, i18n } = useTranslation("common");
  const [localizedData, setLocalizedData] = useState(initialData);

  useEffect(() => {
    localize();
  }, []);

  useEffect(() => {
    localize();
  }, [i18n.language]);

  const localize = () => {
    const localizedData = getLocalized(initialData, i18n.language);
    setLocalizedData(localizedData);
  }

  const getBannerDataFromMetaData = (meta) => {
    return meta.map((item) => {
      return {
        title: item["pageTitle"],
        description: item["pageDescription"]
      };
    });
  };

  return (
    <>
      <Layout headerStyle={6} footerStyle={3}>
        <Banner2
          data={getBannerDataFromMetaData(localizedData.meta)}
          bgColor={"#110B79"}
          fontColor={"#FFFFFF"}
          fontColor2={"#FFFFFF"}
        />
        <div style={{ backgroundColor: "#110B79" }}>
          <div className="container">
            <Servicesection services={localizedData.services}/>
            <Sectionfoot data={[{}]} />
          </div>
        </div>

        <section
          className="testimonial__area-three testimonial__bg "
          data-background="/assets/img/bg/h3_testimonial_bg.jpg"
        >
          <div className="container my-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="testimonial__img-wrap-two">
                  <img src="/assets/img/images/h3_testimonial_img.png" alt="" />
                  <div className="testimonial__img-shape-two">
                    <img
                      src="/assets/img/images/h3_testimonial_shape01.png"
                      alt=""
                      className="alltuchtopdown"
                    />
                    <img
                      src="/assets/img/images/h3_testimonial_shape02.png"
                      alt=""
                      className="rotateme"
                    />
                    <img
                      src="/assets/img/images/h3_testimonial_shape03.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial__item-wrap">
                  <div className="swiper-container testimonial-active-two">
                    <TestimonialActiveTwoSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section1
          className="request-area request-bg"
          data-background="/assets/img/bg/request_bg.jpg"
        >
          <div1 className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="request-content text-center">
                  <h2 className="title">
                    Offering The Best Experience Of Real Estate Services
                  </h2>
                  <div className="content-bottom">
                    <Link href="tel:0123456789" className="btn">
                      Contact With Us
                    </Link>
                    <div className="content-right">
                      <div className="icon">
                        <i className="flaticon-phone-call" />
                      </div>
                      <div className="content">
                        <Link href="tel:0123456789">+ 88 ( 9600 ) 6002</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div1>
          <div className="request-shape">
            <img
              src="/assets/img/images/request_shape01.png"
              alt=""
              data-aos="fade-right"
              data-aos-delay={400}
            />
            <img
              src="/assets/img/images/request_shape02.png"
              alt=""
              data-aos="fade-left"
              data-aos-delay={400}
            />
          </div>
        </section1> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const pageMeta = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pageMetadata`);
  const pageMetadata = await pageMeta.json();
  const servicePageMetadata = pageMetadata.filter((item) => item.page === "services");

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`);
  const data = await response.json();

  return {
    props: {
      initialData: { meta: servicePageMetadata, services: data },
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
