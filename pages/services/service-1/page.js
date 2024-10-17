"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import SVG from "@/components/elements/Allsvg";
import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState } from "react";

export default function service1() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"Owner Services"}
                    paragraph={`Owning rental property can be a rewarding investment, but it also comes with responsibilities. At Al Enmaa Real Estate, we understand this, and that's why we offer a comprehensive suite of owner services designed to maximise your return and minimise your stress.`}
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
                                <div className="col-md-7">
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
                                                    Expert Property Management
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
                                                    Streamlined Operations
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
                                                    Technology at Your Service
                                                </button></Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(4)}>
                                                <Link href="#dev-link-section" smooth><button
                                                    className={
                                                        activeIndex == 4 ? "nav-link active" : "nav-link"
                                                    }
                                                    id="cargo-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#cargo-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="cargo-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    <i className="flaticon-travel-insurance" />
                                                    Investing in Your Success
                                                </button></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5" id="dev-link-section">
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
                                                            Expert Property Management
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Our team of experienced professionals takes care
                                                        of every aspect of your rental property, allowing
                                                        you to focus on what matters most. We handle tenant
                                                        screening and selection to ensure you have
                                                        responsible occupants in your property. We draft and
                                                        manage lease agreements, ensuring your rights are
                                                        protected and all terms are clearly outlined.
                                                        Additionally, we take care of rent collection and
                                                        manage any late payments efficiently.
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
                                                        Streamlined Operations                                              </Link>
                                                    </h2>
                                                    <p>
                                                    We prioritize efficiency and transparency in everything we
do. Our established processes and procedures ensure your property is well-maintained
and any issues are addressed promptly. We handle routine maintenance requests and
coordinate with qualified vendors for repairs when necessary. We also provide regular
reports on the property's condition, occupancy rates, and income/expense details.
                                                    
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
                                        <div
                                            className={
                                                activeIndex == 4
                                                    ? "tab-pane fade show active"
                                                    : "tab-pane fade"
                                            }
                                            id="cargo-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="cargo-tab"
                                            tabIndex={0}
                                        >
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Tabpanel.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title">
                                                        <Link href="/services-details">
                                                            Investing in Your Success
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Al Enmaa Real Estate is committed to your success as
                                                        a property owner. We go beyond basic property
                                                        management by offering additional services designed
                                                        to maximize your investment returns
                                                    </p>
                                                    <div className="about__list-box-2">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <SVG caseValue="case13" />
                                                                <ul>
                                                                    <li>
                                                                        <h6>
                                                                            Market Analysis and Rent Optimization:
                                                                        </h6>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            We leverage our market expertise to
                                                                            analyze rental trends and ensure your
                                                                            property is priced competitively.
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <SVG caseValue="case13" />
                                                                <ul>
                                                                    <li>
                                                                        <h6>
                                                                            Renovation and Maintenance Consulting:
                                                                        </h6>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            Our team can advise you on cost- effective
                                                                            renovations or upgrades that can enhance
                                                                            the value of your property and attract
                                                                            high-quality tenants.{" "}
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <SVG caseValue="case13" />
                                                                <ul>
                                                                    <li>
                                                                        <h6>Legal Support: </h6>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            We can connect you with trusted legal
                                                                            professionals to ensure you are compliant
                                                                            with all regulations and maximizing your
                                                                            benefits.With Al Enmaa's comprehensive
                                                                            owner services, you can experience the
                                                                            benefits of rental property ownership with
                                                                            minimal stress. We focus on maximizing
                                                                            your return on investment while ensuring
                                                                            your property is well-maintained and
                                                                            managed effectively.{" "}
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                {/* <Sectionfoot />{" "} */}
                            </div>
                        </div>
                    </div>
                    <Bannerfooter />
                </div>
            </Layout>
        </>


    );
}
