"use client"
import React from 'react';

export default function About3({ data }) {
    return (
        <>
            {data.map((item) => (
                <section key={item._id} className="about__area-three about__bg-two" data-background="/assets/img/bg/h3_about_bg.jpg">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-8 mx-4">
                                <div className="about__img-wrap-three">
                                    <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} alt="" />
                                    <img src="/assets/img/images/h3_about_img02.jpg" alt="" data-parallax="{&quot;x&quot; : 50 }" />
                                    <div className="shape">
                                        <img src="/assets/img/images/h3_about_img_shape.png" alt="" className="alltuchtopdown" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about__content-three">
                                    <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                        <span className="sub-title">{item.subtitle}</span>
                                        <h2 className="title tg-element-title">{item.title}</h2>
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="about__content-inner about__content-inner-two">
                                        <div className="about__list-box ">
                                            <ul className="list-wrap">
                                                {Object.keys(item.points).map(pointKey => (
                                                    <li key={pointKey}><i className="fa icon-arrow" />{item.points[pointKey]}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="about-bottom about-bottom-two ">
                                        <div className="author-wrap">
                                            <div className="thumb">
                                                <img src="/assets/img/images/author_img.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Abdulaziz Muflaq Alosaimi<br /><span>Chief Executive Officer</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about__shape-wrap-three">
                                        <img src="/assets/img/images/h3_about_shape01.png" alt="" className="rotateme" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
