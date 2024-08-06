"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import SVG from "@/components/elements/Allsvg";
import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState } from "react";

export default function service2() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"LEASING SERVICES"}
                    paragraph={`Looking for a new home or commercial space in Kuwait? Look no further than Al Enmaa 
                    Real Estate's comprehensive leasing services! We offer a wide variety of properties 
                    across the State of Kuwait, catering to diverse needs and budgets. Whether you're 
                    seeking a spacious apartment in the heart of the city, a cozy villa in a quiet suburb, or a 
                    prime location for your business, our experienced team is here to guide you every step 
                    of the way`}
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
                                            Streamlined Leasing  <br />Services from Al Enmaa


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
                                                <Link href="#dev-link-section" passHref><button
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
                                                    Seamless Search Process
                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                                <Link href="#dev-link-section" passHref> <button
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
                                                    Stress-Free Application & Move-In
                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                <Link href="#dev-link-section" passHref> <button
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
                                                    Ongoing Support
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
                                                            Seamless Search Process
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Finding the perfect rental property can be overwhelming. At
                                                        Al Enmaa, we simplify the process by offering a user-friendly online platform and
                                                        dedicated leasing consultants. You can easily browse our extensive listings, filtering by
                                                        location, property type, price range, and amenities. Our detailed listings provide clear
                                                        descriptions, photos, and virtual tours, allowing you to virtually explore potential
                                                        properties from the comfort of your own home. Additionally, our leasing consultants
                                                        possess in-depth knowledge of the Kuwaiti rental market and are available to answer
                                                        any questions and recommend properties that align with your specific requirements.
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
                                                            Stress-Free Application & Move-In                                             </Link>
                                                    </h2>
                                                    <p>
                                                        : Once you've identified your ideal property, our
                                                        team streamlines the application and move-in process. We guide you through the
                                                        application documents, conduct efficient background checks, and facilitate clear
                                                        communication with landlords. We also handle lease agreements, ensuring all terms
                                                        and conditions are transparent and clearly understood. Furthermore, we can connect
                                                        you with reliable moving companies and other service providers to ensure a smooth
                                                        and stress-free transition into your new rental space.

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
                                                            Ongoing Support
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Our commitment to service extends beyond the initial lease signing.
                                                        Throughout your tenancy, you can rely on Al Enmaa's dedicated support team. We
                                                        promptly address any maintenance requests, coordinating with qualified vendors to
                                                        ensure timely repairs and upkeep of the property. We also offer helpful resources and
                                                        guidance regarding tenant rights and responsibilities..<br /><br />
                                                        By partnering with Al Enmaa Real Estate for your leasing needs, you gain access to a
                                                        wide range of properties, a streamlined search process, and ongoing support
                                                        throughout your tenancy. Let us help you find your perfect place in Kuwait
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
