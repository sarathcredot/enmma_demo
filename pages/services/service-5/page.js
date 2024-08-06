"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import SVG from "@/components/elements/Allsvg";
import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState } from "react";

export default function service5() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"Consultancy Services"}
                    paragraph={`The Kuwaiti real estate market offers a wealth of potential for investors, but navigating 
                    its complexities can be challenging. At Al Enmaa Real Estate, we understand the 
                    importance of informed decision-making. That's why we offer comprehensive real 
                    estate consultancy services designed to empower you throughout your investment 
                    journey.`}
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
                                            Al Enmaa's Comprehensive <br />
                                            Services for Property Owners
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
                                                    Unparalleled Market Expertise
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
                                                    Strategic Investment Guidance
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
                                                    Seamless Transaction Support
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
                                                        Unparalleled Market Expertise
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                    Our team of experienced consultants possesses a 
deep understanding of the Kuwaiti real estate landscape. Through continuous research 
and analysis, we stay current on market trends, emerging opportunities, and potential 
risks. We leverage this expertise to provide you with insightful market reports, property 
valuations, and investment forecasts, enabling you to make informed decisions based on 
the latest market conditions
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
                                                        Strategic Investment Guidance                              </Link>
                                                    </h2>
                                                    <p>
                                                    Our services extend beyond simply providing data. 
We work closely with you to understand your unique investment goals, risk tolerance, 
and financial objectives. Based on this in-depth understanding, we develop personalized 
investment strategies that align with your specific needs. Whether you're a seasoned 
investor seeking high-yield opportunities or a first-time investor seeking guidance on 
building a property portfolio, our consultants offer tailored advice to help you achieve 
your investment goals
                                                    
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
                                                        Seamless Transaction Support
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                    : Our commitment to service doesn't stop at investment 
planning. We provide ongoing support throughout the entire transaction process. Our 
consultants can assist with property due diligence, negotiation of terms, and legal 
documentation. We also maintain a network of trusted professionals, including lawyers, 
mortgage brokers, and property managers, to ensure you have access to the necessary 
expertise at every step of the way.<br/><br/>
By partnering with Al Enmaa Real Estate for your real estate consultancy needs, you 
gain access to a wealth of knowledge, strategic guidance, and ongoing support. We 
empower you to make informed investment decisions with confidence, maximizing your 
potential for success in the dynamic Kuwaiti real estate market.

                                                    </p>
                                                    
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Sectionfoot />{" "}
                            </div>
                        </div>
                    </div>
                    <Bannerfooter />
                </div>
            </Layout>
        </>
    );
}
