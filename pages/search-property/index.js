import Layout from "@/components/layout/Layout"
import Banner3 from "@/components/sections/Banner3"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Searchproperty from "@/components/devsection/Searchproperty"

import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const metadata = {
    title: 'Annual report',
}

export default function About({ initialData }) {
    const { t, i18n } = useTranslation('common');
    const [data, setData] = useState(initialData);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
                const data = await response.json();
                const fetchedData = data.filter(item => item.page === 'annual-report');
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

            <Layout headerStyle={6} footerStyle={3}>
            <Banner3  data={getDataBySection('annual-report')} bgColor={"#110B79"} fontColor={"#FFFFFF"}fontColor2={'#FFFFFF'}/>
            <Searchproperty/>

          <Bannerfooter data={getDataBySection('annual-report')}/>
            </Layout>
        </>
    )
}
export async function getServerSideProps({ locale }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
    const data = await response.json();
    const fetchedData = data.filter(item => item.page === 'annual-report');

    return {
        props: {
            initialData: fetchedData,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}