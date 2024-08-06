"use client";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import SVG from "@/components/elements/Allsvg";
import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot";
import { useState } from "react";

export default function service3() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner1
                    title={"Auction Services"}
                    paragraph={`Real estate auctions have become a powerful tool for both investors and sellers seeking 
                    a dynamic and transparent marketplace. Al Enmaa Real Estate leverages its extensive 
                    experience and market knowledge to conduct successful property auctions, maximizing 
                    value for everyone involved`}
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
                                            Unlocking Value <br />
                                            Through Auctions
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
                                                <Link href="#dev-link-section" smooth>
                                                    <button
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
                                                        Selling Through Auctions{" "}
                                                    </button>
                                                </Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(2)}>
                                                <Link href="#dev-link-section" smooth>
                                                    {" "}
                                                    <button
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
                                                        Expert Auction Management{" "}
                                                    </button>
                                                </Link>
                                            </li>
                                            <li className="nav-item" onClick={() => handleOnClick(3)}>
                                                <Link href="#dev-link-section" smooth>
                                                    {" "}
                                                    <button
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
                                                        The Buyer's Advantage{" "}
                                                    </button>
                                                </Link>
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
                                                            Selling Through Auctions                            </Link>
                                                    </h2>
                                                    <p>
                                                        Strategic auctions offer distinct benefits compared to
                                                        traditional sales methods. Your property can be presented to a wider audience of
                                                        interested buyers, potentially leading to a faster sale and a final price that exceeds your
                                                        initial expectations. The open bidding process fosters competition, ensuring you receive
                                                        a fair market value based on active buyer interest.
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
                                                            Expert Auction Management
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Whether you're considering an auction for your
                                                        property or exploring investment opportunities at existing auctions, Al Enmaa offers
                                                        comprehensive support throughout the process. Our dedicated team will meticulously
                                                        analyze your property and advise on optimal auction strategies to help you achieve the
                                                        highest possible return on investment. We utilize targeted marketing campaigns to
                                                        attract qualified buyers and generate excitement for your property leading up to the
                                                        auction date. Experienced auctioneers conduct the event with transparency and
                                                        professionalism, ensuring a fair and efficient bidding process for all participants
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
                                                            The Buyer's Advantage
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        Looking to invest in real estate through auctions? Al Enmaa
                                                        can be your trusted guide. Our team meticulously assesses auction listings and
                                                        highlights properties with strong potential for investment, allowing you to focus on the
                                                        most promising opportunities. We offer guidance on developing a sound bidding
                                                        strategy to secure your desired property at a competitive price while staying within
                                                        your budget. Our support extends beyond winning the bid, as we assist with finalizing
                                                        the purchase process and navigating any post-auction logistics
                                                        <br />
                                                        <br />
                                                        By partnering with Al Enmaa Real Estate for your auction needs, you unlock a world of
                                                        possibilities within the dynamic world of real estate auctions. We empower both sellers
                                                        and buyers to achieve their goals through a transparent and efficient platform.
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
