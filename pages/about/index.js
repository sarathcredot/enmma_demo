import Layout from "@/components/layout/Layout"
import Banner2 from "@/components/sections/Banner2"
import Brand2 from "@/components/sections/Brand1"
import Counter2 from "@/components/sections/Counter2"
import SVG from "@/components/elements/Allsvg"
import Link from "next/link"
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head"

export default function About({ initialData, pageTitle, pageDescription, }) {

    const { t, i18n } = useTranslation('common');
    const [data, setData] = useState(initialData);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
                const data = await response.json();
                const fetchedData = data.filter(item => item.page === 'about');
                setData(fetchedData);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        }

        loadData();
    }, [i18n.language]);

    const localizedData = data.map(item => {
        const localizedIcondata = {};
        Object.keys(item).forEach(key => {
            if (key.startsWith('icondata')) {
                localizedIcondata[key] = {
                    ...item[key],
                    title: item[key][`title_${i18n.language}`] || item[key].title_en,
                    number: item[key][`number_${i18n.language}`] || item[key].number_en,
                };
            }
        });
        const localizedPointsEn = {};
        const localizedPointsAr = {};
        if (item.points_en) {
            Object.keys(item.points_en).forEach(pointKey => {
                localizedPointsEn[pointKey] = item.points_en[pointKey];
            });
        }
        if (item.points_ar) {
            Object.keys(item.points_ar).forEach(pointKey => {
                localizedPointsAr[pointKey] = item.points_ar[pointKey];
            });
        }
        return {
            ...item,
            title: item[`title_${i18n.language}`] || item.title_en,
            subtitle: item[`subtitle_${i18n.language}`] || item.subtitle_en,
            description: item[`description_${i18n.language}`] || item.description_en,
            sidebarSubtitle: item[`sidebarSubtitle_${i18n.language}`] || item.sidebarSubtitle_en,
            sidebarNumber: item[`sidebarNumber_${i18n.language}`] || item.sidebarNumber_en,
            buttonTitle: item[`buttonTitle_${i18n.language}`] || item.buttonTitle_en,
            localizedIcondata,
            points: i18n.language === 'ar' ? localizedPointsAr : localizedPointsEn,
            buttonLink: item.buttonLink || "#",

        };
    });

    const getDataBySection = (section) => localizedData.filter(item => item.section === section && item.status);

    return (

        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <Layout headerStyle={6} footerStyle={3} >
                <Banner2 data={getDataBySection('about-banner')} />
                <div>
                    <section className="about__area-four">
                        {getDataBySection('about-info-section').map((item) => (
                            <div key={item._id} className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-6 col-md-9 col-sm-10">
                                        <div className="about__img-wrap-four">
                                            <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} width={500} height={500} alt="" />
                                            <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} width={300} height={100} alt="" />
                                            <div className="about__award-box">
                                                {/* <div className="icon">
                <i className="flaticon-time" />
              </div> */}
                                                {/* <div className="content" style={{position: 'relative',zIndex: '4'}}>
                <h2 className="title">30+</h2>
                <p className="w-50">Years of Experiences Property management & Investment</p>
              </div> */}
                                            </div>
                                            <div className="shape">
                                                <img src="/assets/img/images/inner_about_shape.jpg" alt="" className="alltuchtopdown" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about__content-four">
                                            <div className="section-title mb-30">
                                                <span className="sub-title">{item.subtitle}</span>
                                                <h2 className="title">{item.title}</h2>
                                            </div>
                                            <p style={{ color: '#282739' }}>{item.description}</p>
                                            {item.buttonTitle ? (
                                                <Link href={item.buttonLink} className="btn">{item.buttonTitle}</Link>

                                            ) : (
                                                <></>
                                            )} 
                                             </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <Counter2 data={getDataBySection('about-counter')} />


                    <div className="brand__area">
                        <div className="container">
                            <div className="swiper-container brand-active">
                            </div>
                        </div>
                    </div>
                    {/* brand-area */}
                    {/* choose-area */}
                    <section className="choose__area-four">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="choose__content-four">
                                        <div className="section-title white-title mb-20">
                                            <span className="sub-title">{t('mission-subtitle')} </span>
                                            <h2 className="title text-sm-nowrap">{t('mission-title')}</h2>
                                        </div>
                                        <p>{t('mission-description')}</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="choose__list-two">
                                        <ul style={{ listStyle: "none" }}>

                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <SVG caseValue='case4' />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">{t('mission')}</h4>
                                                        <p>{t('mission-text')}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <SVG caseValue='case5' />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">{t('vision')}</h4>
                                                        <p>{t('vision-text')}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="choose__shape-wrap-four">
                            <img src="/assets/img/images/inner_choose_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/inner_choose_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
                    <section className="container text-center my-5">
                        <h1 className=" text-wrap">{t('banner-title')}</h1>
                    </section>
                    {getDataBySection('about-contact').map((item) => (
                        <section key={item._id} className="request-area request-bg" data-background={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="request-content text-center">
                                            <h2 className="title">{item.title}</h2>
                                            <div className="content-bottom">
                                                <Link dir="ltr" href={`tel:${item.buttonLink}`} className="btn">{item.buttonTitle}</Link>
                                                <div className="content-right">
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        {/* <span>Toll Free Call</span> */}
                                                        <Link dir="ltr" href={`tel:${item.buttonLink}`}>{item.buttonLink}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="request-shape">
                                <img src="/assets/img/images/request_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                                <img src="/assets/img/images/request_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                            </div>
                        </section>
                    ))}
                </div>

            </Layout>
        </>
    )
}

export async function getServerSideProps({ locale }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
    const metadataResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pageMetadata/`);

    if (!response.ok || !metadataResponse.ok) {
        throw new Error('Failed to fetch data');
    }

    const metadata = await metadataResponse.json();

    const pageMetadata = metadata.find(page => page.page === 'about') || {};

    const pageTitle = pageMetadata[`pageTitle_${locale}`] || pageMetadata.pageTitle_en || 'Default Title';
    const pageDescription = pageMetadata[`pageDescription_${locale}`] || pageMetadata.pageDescription_en || 'Default description';

    const data = await response.json();
    const fetchedData = data.filter(item => item.page === 'about');

    return {
        props: {
            initialData: fetchedData,
            pageTitle,
            pageDescription,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
