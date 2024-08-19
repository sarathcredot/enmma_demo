import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Disclosures from "@/components/devsection/Disclosures"
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const metadata = {
    title: 'Annual report',
}

export default function Disclosure({ initialData }) {
    const { t, i18n } = useTranslation('common');
    const [data, setData] = useState(initialData);

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch('http://localhost:4001/api/cms');
                const data = await response.json();
                const fetchedData = data.filter(item => item.page === 'disclosure');
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
            <Banner1 data={getDataBySection('disclosure-banner')} />
            <div className="container project__area-three ">

                    <div  className="row ">
            {getDataBySection('about-info-section').map((item) => (
                    <div key={item.id} className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover " >
                            <span className="">{item.subtitle}</span>
                            <h2 className=" mt-4" style={{ color: '#110B79' }}>{item.title}</h2>
                        </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>{item.description}</div>
                    </div>
            ))}

            <Disclosures  showItem={6} style={1} showPagination/>
            </div>
            </div>

            <Bannerfooter data={getDataBySection('disclosure-banner')}/>
            </Layout>
            
        </>
    )
}
export async function getServerSideProps({ locale }) {
    const response = await fetch('http://localhost:4001/api/cms');
    const data = await response.json();
    const fetchedData = data.filter(item => item.page === 'disclosure');

    return {
        props: {
            initialData: fetchedData,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}