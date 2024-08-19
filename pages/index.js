import Layout from "@/components/layout/Layout"

import Counter1 from "@/components/sections/Counter1"
import Project3 from "@/components/sections/Project3"
import Slider2 from "@/components/sections/Slider2"
import About3 from "@/components/sections/About3"
import Services3 from "@/components/sections/Services3"
import Choose3 from "@/components/sections/Choose3"
import Marketingexpert1 from "@/components/sections/Marketingexpert1"
import BlogPost3 from "@/components/sections/BlogPost3"
import Request3 from "@/components/sections/Request3"
import Devindex1 from "@/components/devcreate/devindexherobottom"

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home({
    heroSectionData,
    heroBottomData,
    counterData,
    aboutSectionData,
    serviceData,
    investorSectionData,
    ownerSectionData,
    parallaxBannerData,
    solutionSectionData,
    trustedSectionData,
    blogData,
}) {
    const { t, i18n } = useTranslation('common');

    const localizeData = (data) => {
        return data.map(item => {
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
    };

    return (
        <>
            <Layout headerStyle={6} footerStyle={3} >
                <Slider2 data={localizeData(heroSectionData)} id="herosection"/>
                <Devindex1 data={localizeData(heroBottomData)} />
                <div ><Counter1 data={localizeData(counterData)} /></div>
                
                <About3 data={localizeData(aboutSectionData)} />
                <Services3 data={localizeData(serviceData)} />
                <Choose3 data={localizeData(investorSectionData)} />
                <Project3 data={localizeData(ownerSectionData)} />
                <Request3 data={localizeData(parallaxBannerData)} />
                <Marketingexpert1 data={localizeData(solutionSectionData)} datas={localizeData(trustedSectionData)} />
        
                <BlogPost3 data={localizeData(blogData)} />
            </Layout>
        </>
    );
}

export async function getServerSideProps({ locale }) {
    // Replace fetchData with the native fetch API
    const response = await fetch('http://localhost:4001/api/cms');
    
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    
    const allData = await response.json();

    const getDataBySection = (section) => allData.filter(item => item.section === section && item.status);

    return {
        props: {
            heroSectionData: getDataBySection('hero-section'),
            heroBottomData: getDataBySection('hero-bottom'),
            counterData: getDataBySection('counter'),
            aboutSectionData: getDataBySection('about-section'),
            serviceData: getDataBySection('Service'),
            investorSectionData: getDataBySection('investor-section'),
            ownerSectionData: getDataBySection('Owner-section'),
            parallaxBannerData: getDataBySection('parallax-banner'),
            solutionSectionData: getDataBySection('solution-section'),
            trustedSectionData: getDataBySection('Trusted-section'),
            blogData: getDataBySection('blog'),
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}