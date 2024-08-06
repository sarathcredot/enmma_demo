"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import SVG from "@/components/elements/Allsvg";
import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState } from "react";

export default function service4() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"Security Services"}
                    paragraph={`Al Enmaa Real Estate recognizes the critical role security plays in fostering a safe and 
                    secure environment. That's why we offer a comprehensive portfolio of security services 
                    designed to cater to the diverse needs of both public and private sector clients. Our 
                    highly trained and experienced security personnel are dedicated to safeguarding your 
                    assets, personnel, and property.`}
                    bgColor={"#110B79"}
                    fontColor={"#FFFFFF"}
                    fontColor2={"#FFFFFF"}
                />
                <div>
                    <div className="mb-5 " style={{ backgroundColor: "#110B79" }}>
                        <div className=" container project__area-three">
                            <div className="row ">
                                <div className="col-xl-7 space-betweeni col-lg-8">
                                    <div className="  mb-50 dev_gover ">
                                        <span className="">What We Offer</span>
                                        <h2 className=" mt-4">
                                            {" "}
                                            Comprehensive Security Solutions 
                                        </h2>
                                    </div>
                                    <div className="dev_customsize services__content-two mt-4">
                                        <Link href="/services" className="btn">
                                            See more services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" row">
                                <div className="col-md-6">
                                    <div className="services__tab-wrap">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <Link href="#dev-link-section" smooth><button
                                                    className={
                                                        activeIndex == 1 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="health-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#health-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="health-tab-pane"
                                                    aria-selected="true"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Tailored Security Solutions
                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <Link href="#dev-link-section" smooth> <button
                                                    className={
                                                        activeIndex == 2 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="travel-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#travel-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="travel-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Unwavering Commitment to Quality
                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <Link href="#dev-link-section" smooth> <button
                                                    className={
                                                        activeIndex == 3 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="vehicle-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#vehicle-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="vehicle-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Proactive Security Management
                                                </button></Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6" id="dev-link-section">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className={
                                                activeIndex == 1
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
                                                    <img src="/assets/img/services/Tabpanel.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                        Tailored Security Solutions
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                    We understand that every client has unique security 
requirements. Our team of security specialists works closely with you to conduct a 
thorough risk assessment and develop a customized security plan that aligns with your 
specific needs and budget. Whether you require security for a government building, a 
commercial complex, a residential property, or anything in between, we have the 
expertise and resources to create a comprehensive security solution.
                                                    </p>
                                                </div>
                                            </div1>
                                        </div>
                                        <div
                                            className={
                                                activeIndex == 2
                                                    ? "tab-pane fade show active"
                                                    : "tab-pane fade"
                                            }
                                            id="travel-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="travel-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img
                                                        src="/assets/img/services/h3_services_img02.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                        Unwavering Commitment to Quality                                      </Link>
                                                    </h2>
                                                    <p>
                                                    At Al Enmaa, we prioritize the quality of our 
security services. Our security guards undergo rigorous training programs that equip 
them with the latest security protocols, conflict resolution skills, and first-aid 
procedures. We also invest heavily in advanced security technology, including CCTV 
surveillance systems, access control systems, and alarm systems, to further enhance the 
security posture of your premises. Our commitment to continuous improvement 
ensures you receive the most effective and up-to-date security solutions available.
                                                    
                                                    </p>
                                                    
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                activeIndex == 3
                                                    ? "tab-pane fade show active"
                                                    : "tab-pane fade"
                                            }
                                            id="vehicle-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="vehicle-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img
                                                        src="/assets/img/services/h3_services_img01.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                        Technology at Your Service
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                    We leverage cutting-edge technology to enhance your
experience as a property owner. Our secure system allows you to easily access property
related services. We also offer a convenient online support for on-the-go access to
information and communication with our team.<br/><br/>
By partnering with Al Enmaa Real Estate, you gain peace of mind knowing your
property is in good hands. We handle the day-to-day tasks efficiently, allowing you to
enjoy the benefits of ownership without the hassle.

                                                    </p>
                                                    
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Sectionfoot />
                            </div>
                        </div>
                    </div>
                    <Bannerfooter />
                </div>
            </Layout>
        </>
    );
}
