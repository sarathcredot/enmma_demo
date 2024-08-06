'use client'
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

import { useTranslation, i18n } from 'next-i18next';
import { fetchData } from '@/util/fetchData';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home({ initialData }) {
    const { t, i18n } = useTranslation('common');
    const [data, setData] = useState(initialData);

    useEffect(() => {
        async function loadData() {
            try {
                const fetchedData = await fetchData('http://localhost:4000/api/home/');
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
            buttonLink: item.buttonLink || "#"
        };
    });

    const getDataBySection = (section) => localizedData.filter(item => item.section === section && item.status);

    return (
        <>
            <Layout headerStyle={6} footerStyle={3} >
                <Slider2 data={getDataBySection('about')} id="herosection"/>
                <Devindex1 data={getDataBySection('hero-bottom')} />
                <div ><Counter1 data={getDataBySection('counter')} /></div>
                
                <About3 data={getDataBySection('about-us')} />
                <Services3 data={getDataBySection('Service')} />
                <Choose3 data={getDataBySection('about')} />
                <Project3 data={getDataBySection('about')} />
                <Request3 data={getDataBySection('about')} />
                <Marketingexpert1 data={getDataBySection('about')} />
                <BlogPost3 data={getDataBySection('blog')} />
            </Layout>
        </>
    )
}

export async function getServerSideProps({ locale }) {
    const initialData = await fetchData('http://localhost:4000/api/home');
    return {
        props: {
            initialData,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
