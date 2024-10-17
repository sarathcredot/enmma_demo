import Layout from "@/components/layout/Layout";
import Counter1 from "@/components/sections/Counter1";
import Project3 from "@/components/sections/Project3";
import Slider2 from "@/components/sections/Slider2";
import About3 from "@/components/sections/About3";
import Services3 from "@/components/sections/Services3";
import Choose3 from "@/components/sections/Choose3";
import Marketingexpert1 from "@/components/sections/Marketingexpert1";
import BlogPost3 from "@/components/sections/BlogPost3";
import Request3 from "@/components/sections/Request3";
import Devindex1 from "@/components/devcreate/devindexherobottom";
import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
    pageTitle,
    pageDescription,
}) {
    const { t, i18n } = useTranslation('common');
    console.log("hii")

    const localizeData = (data) => {

        console.log( "hero", heroSectionData)
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
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head> 
          
          
            <Layout headerStyle={6} footerStyle={3}>
                <Slider2 data={localizeData(heroSectionData)} id="herosection"/>
                <Devindex1 data={localizeData(heroBottomData)}/>
                <div><Counter1 data={localizeData(counterData)}/></div>
                <About3 data={localizeData(aboutSectionData)}/>
                <Services3/>
                <Choose3 data={localizeData(investorSectionData)}/>
                <Project3 data={localizeData(ownerSectionData)}/>
                <Request3 data={localizeData(parallaxBannerData)}/>
                <Marketingexpert1 data={localizeData(solutionSectionData)} datas={localizeData(trustedSectionData)}/>
                <BlogPost3 />
            </Layout>

        </>
    );
}






export async function getServerSideProps({ locale }) {

    console.log("hii")
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
    const metadataResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pageMetadata/`);


    console.log( "respo", response)
    console.log("meta", metadataResponse)

    if (!response.ok || !metadataResponse.ok) {

        console.log("err")
        throw new Error('Failed to fetch data');
 

    }


    // if (!response.ok || !metadataResponse.ok) {
    //     throw new Error('Failed to fetch data');
    // }


    console.log("new branch")
    console.log("new changes")
    
    


    const allData = await response.json();
    const metadata = await metadataResponse.json();

    const pageMetadata = metadata.find(page => page.page === 'home') || {};

    const pageTitle = pageMetadata[`pageTitle_${locale}`] || pageMetadata.pageTitle_en || 'Default Title';
    const pageDescription = pageMetadata[`pageDescription_${locale}`] || pageMetadata.pageDescription_en || 'Default description';

    const getDataBySection = (section) => allData.filter(item => item.section === section && item.status);

    return {
        props: {
            heroSectionData: getDataBySection('hero-section'),
            heroBottomData: getDataBySection('hero-bottom'),
            counterData: getDataBySection('counter'),
            aboutSectionData: getDataBySection('about-section'),
            investorSectionData: getDataBySection('investor-section'),
            ownerSectionData: getDataBySection('Owner-section'),
            parallaxBannerData: getDataBySection('parallax-banner'),
            solutionSectionData: getDataBySection('solution-section'),
            trustedSectionData: getDataBySection('Trusted-section'),
                pageTitle,
                pageDescription,
                ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}