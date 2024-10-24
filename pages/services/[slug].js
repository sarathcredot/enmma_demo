"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocalized } from "@/util/localization-helper";
import Link from "next/link";

import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import SVG from "@/components/elements/Allsvg";
import { getImageUrl } from "@/util/image-url-helper";

export default function Service({ initialData }) {

  const { t, i18n } = useTranslation("common");
  const [localizedData, setLocalizedData] = useState(initialData  );

  useEffect(() => {
    localize();
  }, []);

  useEffect(() => {
    localize();
  }, [i18n.language]);

  const localize = () => {
    const localizedData = getLocalized(initialData, i18n.language);
    setLocalizedData(localizedData);
  };

  return (
    <>
      <Layout headerStyle={6} footerStyle={3}>
        <Banner1
          data={[localizedData]}
          bgColor={"#110B79"}
          fontColor={"#FFFFFF"}
          fontColor2={"#FFFFFF"}
        />
        <div>
          <div style={{ backgroundColor: "#110B79" }}>
            <div className=" container project__area-three">
              <div className="row container">
                <div className="col-xl-7 space-betweeni col-lg-8 mb-5">
                  <div className="  dev_gover   ">
                    <span className="">{localizedData?.subHeading1}</span>
                    <h2 className=" mt-4 devtextwrapo">{localizedData?.subHeading2}</h2>
                  </div>
                  <div className="dev_customsize services__content-two mt-4">
                    
                    <Link href="/services" className="btn">
                      {t("more-services")}
                    </Link>
                  
                  </div>
                </div>
              </div>
              <ServicePoints servicePoints={localizedData?.servicePoints}/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services/slug/${params.slug}`
  );
  const data = await response.json();

  console.log("joson")

  return {
    props: {
      initialData: data[0] || "",
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}








export function ServicePoints({ servicePoints }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="row flex-wrap-reverse">
      <div className="col-md-6">
        <div className="services__tab-wrap">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {servicePoints?.map((servicePoint, index) => {
              return (
                <li
                  className="nav-item"
                  onClick={() => handleOnClick(index)}
                  key={servicePoint._id}
                >
                  
                    <button
                      className={
                        activeIndex == index ? "nav-link active" : "nav-link"
                      }
                      style={{display:"flex",alignItems:"center"}}
                      id="health-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#health-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="health-tab-pane"
                      aria-selected="true"
                    >
                      <i className=" flaticon-pin" />
                      {servicePoint.title}
                    </button>
                
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-md-5" id="focus">
        <div className="tab-content" id="myTabContent">
          {servicePoints?.map((servicePoint, index) => {
            return (
              <div
                className={
                  activeIndex == index
                    ? "tab-pane fade show active"
                    : "tab-pane fade"
                }
                id="health-tab-pane"
                role="tabpanel"
                aria-labelledby="health-tab"
                tabIndex={0}
              >
                <div1 className="services__item-four shine-animate-item">
                  <div className="services__thumb-four shine-animate">
                    <img src={getImageUrl(servicePoint.imageUrl)} alt="" />
                  </div>
                  <div className="services__content-four">
                    <h2 className="title">
                      {servicePoint.title}
                    </h2>
                    <p>
                    {servicePoint.description}
                    </p>
                  </div>
                </div1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
