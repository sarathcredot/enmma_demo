import Layout from "@/components/layout/Layout"
import Banner2 from "@/components/sections/Banner2"
import Brand2 from "@/components/sections/Brand1"
import Counter2 from "@/components/sections/Counter2"
import SVG from "@/components/elements/Allsvg"
import Link from "next/link"
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About({ initialData }) {
    const { t, i18n } = useTranslation('common');
    const [data, setData] = useState(initialData);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch('http://localhost:4001/api/cms');
                const data = await response.json();
                const fetchedData = data.filter(item => item.page === 'about');
                setData(fetchedData);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        }
    
        loadData();
    },  [i18n.language]);

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
            buttonLink: item.buttonLink || "#"
        };
    });

    const getDataBySection = (section) => localizedData.filter(item => item.section === section && item.status);

    return (

        <>
            <Layout headerStyle={6} footerStyle={3} >
                <Banner2 data={getDataBySection('about-banner')}  />
                <div>
                <section className="about__area-four">
  {getDataBySection('about-info-section').map((item) => (
    <div key={item._id} className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-9 col-sm-10">
          <div className="about__img-wrap-four">
            <img src={`http://localhost:4001/media/${item.bannerImage}`} alt="" />
            <img src={`http://localhost:4001/media/${item.bannerImage}`} alt="" />
            <div className="about__award-box">
              <div className="icon">
                <i className="flaticon-time" />
              </div>
              <div className="content">
                <h2 className="title">30+</h2>
                <p>Years of Experiences <br />Property management  <br />& Investment</p>
              </div>
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
            <p>{item.description}</p>
            <Link href={item.buttonLink} className="btn">{item.buttonTitle}</Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</section>

                     <Counter2 data={getDataBySection('counter-about')} />

                   
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
                                            <span className="sub-title">Lorem ipsum dolor sit amet </span>
                                            <h2 className="title">Our MIssion and Vision </h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.orem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="choose__list-two">
                                        <ul className="">
                                           
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                    <SVG caseValue='case4'/>
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Mission</h4>
                                                        <p>To evolve as a trusted partner in property management and security services.To develop sustainable Property Management solutions.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                    <SVG caseValue='case5'/>
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Vision</h4>
                                                        <p>To become the first-choice partner of real estate and security services and to achieve highest possible standards in the real estate sector</p>
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
                    <Brand2/>
                    {getDataBySection('about-contact').map((item) => (
                    <section key={item._id} className="request-area request-bg" data-background={`http://localhost:4001/media/${item.bannerImage}`}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="request-content text-center">
                                        <h2 className="title">{item.title}</h2>
                                        <div className="content-bottom">
                                            <Link href={`tel:${item.contact_number}`} className="btn">{item.contact_number}</Link>
                                            <div className="content-right">
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    {/* <span>Toll Free Call</span> */}
                                                    <Link href={`tel:${item.contact_number}`}>{item.contact_number}</Link>
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
    const response = await fetch('http://localhost:4001/api/cms');
    const data = await response.json();
    const fetchedData = data.filter(item => item.page === 'about');

    return {
        props: {
            initialData: fetchedData,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}