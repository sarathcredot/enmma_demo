'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function Services3() {
    const { t } = useTranslation('common');
    const { i18n } = useTranslation();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services`);
                console.log( "service data", response.data)
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
            subtitle: item[`subtitle_${i18n.language}`] || item.subtitle_en,
            description: item[`description_${i18n.language}`] || item.description_en
        };
    });


    console.log("local data",localizedData)

    return (
        <>
            <section  className="services__area-three services__bg-three" data-background="/assets/img/bg/h3_services_bg.jpg">
                <div className="container">
                    <div className="row justify-content-start">
                        <div  className="col-lg-8">
                            <div className="section-title white-title  mb-50 tg-heading-subheading animation-style3">
                                <span style={{fontSize:"18px"}}  className="sub-title">{t('mainservice-subtitle')}</span>
                                <h2 className="title tg-element-title title-sa ">{t('mainservice-title')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {localizedData.length > 0 ? (
                            localizedData.map((service) => (
                                <div key={service._id} className="col-lg-4 col-md-6">
                                    <div className="services__item-three">
                                        <div className="services__item-top">
                                            <div className="services__icon-three">
                                                <i className="flaticon-profit" />
                                            </div>
                                            <div className="services__top-title">
                                                <h2 className="title">
                                                    <Link href="/services">{service.title}</Link>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="services__content-three">
                                            <p>{service.description}</p>
                                            {/* <Link href="" className="btn btn-two">Read More</Link> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading services...</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
