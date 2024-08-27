"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Banner2 from "@/components/sections/Banner2";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Bannerfooter from "@/components/sections/Bannerfooter";
import Head from "next/head";

export default function About3({ initialData, teamMembersData,pageDescription,pageTitle }) {
    const { t, i18n } = useTranslation("common");
    const [data, setData] = useState(initialData);
    const [teamMembers, setTeamMembers] = useState(teamMembersData);

    useEffect(() => {
        async function loadData() {
            try {
                // Fetch CMS Data
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
                const data = await response.json();
                const fetchedData = data.filter((item) => item.page === "team");
                setData(fetchedData);

                // Fetch Team Members Data
                const teamResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team/`);
                const teamData = await teamResponse.json();
                setTeamMembers(teamData);
            } catch (error) {
                console.error("Failed to load data:", error);
            }
        }

        loadData();
    }, [i18n.language]);

    const localizedData = data.map((item) => {
        const localizedIcondata = {};
        Object.keys(item).forEach((key) => {
            if (key.startsWith("icondata")) {
                localizedIcondata[key] = {
                    ...item[key],
                    title: item[key][`title_${i18n.language}`] || item[key].title_en,
                    number: item[key][`number_${i18n.language}`] || item[key].number_en,
                };
            }
        });

        const localizedPointsEn = item.points_en || {};
        const localizedPointsAr = item.points_ar || {};

        return {
            ...item,
            title: item[`title_${i18n.language}`] || item.title_en,
            subtitle: item[`subtitle_${i18n.language}`] || item.subtitle_en,
            description: item[`description_${i18n.language}`] || item.description_en,
            sidebarSubtitle:
                item[`sidebarSubtitle_${i18n.language}`] || item.sidebarSubtitle_en,
            sidebarNumber:
                item[`sidebarNumber_${i18n.language}`] || item.sidebarNumber_en,
            buttonTitle: item[`buttonTitle_${i18n.language}`] || item.buttonTitle_en,
            localizedIcondata,
            points: i18n.language === "ar" ? localizedPointsAr : localizedPointsEn,
            buttonLink: item.buttonLink || "#",
        };
    });

    const getDataBySection = (section) =>
        localizedData.filter((item) => item.section === section && item.status);

    return (
        <>
           <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <Layout headerStyle={6} footerStyle={3}>
                <Banner2 data={getDataBySection("team-banner")} />

                <div id="director">
                    <section className="team-area pt-100 ">
                        {getDataBySection("team-directors").map((item) => (
                            <div key={item._id} className="container project__area-three">
                                <div className="row ">
                                    <div className="col-xl-7 space-betweeni col-lg-8">
                                        <div className="section-title  mb-50 tg-heading-subheading animation-style3">
                                            <span className="sub-title">{item.subtitle}</span>
                                            <h2 className="title tg-element-title mt-4 w-200">
                                                {item.title}
                                            </h2>
                                        </div>
                                        <div
                                            className="dev_customsize mt-4"
                                            style={{ color: "#282739" }}
                                        >
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="row justify-content-center">
                                        {item.choicesTeam.map((id) => {
                                            const teamData = Array.isArray(teamMembers.teamMembers)
                                                ? teamMembers.teamMembers.find((member) => member._id === id)
                                                : null;

                                            return teamData ? (
                                                <div
                                                    key={id}
                                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-8"
                                                >
                                                    <div className="team-item">
                                                        <div className="team-thumb">
                                                            <img
                                                                src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${teamData.imageUrl}`}
                                                                alt={teamData.name}
                                                            />
                                                        </div>
                                                        <div className="team-content">
                                                            <h4 className="title">
                                                                <Link href="/team-details">
                                                                    {teamData.name}
                                                                </Link>
                                                            </h4>
                                                            <span>{teamData.position}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="team-area pt-50 bg-dev-color" id="management">
                        {getDataBySection("team-Management").map((item) => (
                            <div key={item._id} className="container project__area-three">
                                <div className="row ">
                                    <div className="col-xl-7 space-betweeni col-lg-8">
                                        <div className="section-title  mb-50 tg-heading-subheading animation-style3">
                                            <span className="sub-title">{item.subtitle}</span>
                                            <h2 className="title tg-element-title mt-4">
                                                {item.title}
                                            </h2>
                                        </div>
                                        <div
                                            className="dev_customsize mt-4"
                                            style={{ color: "#282739" }}
                                        >
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="row justify-content-center">
                                        {item.choicesTeam.map((id) => {
                                            const teamData = Array.isArray(teamMembers.teamMembers)
                                                ? teamMembers.teamMembers.find((member) => member._id === id)
                                                : null;

                                            return teamData ? (
                                                <div
                                                    key={id}
                                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-8"
                                                >
                                                    <div className="team-item">
                                                        <div className="team-thumb">
                                                            <img
                                                                src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${teamData.imageUrl}`}
                                                                alt={teamData.name}
                                                            />
                                                        </div>
                                                        <div className="team-content">
                                                            <h4 className="title">
                                                                <Link href="/team-details">
                                                                    {teamData.name}
                                                                </Link>
                                                            </h4>
                                                            <span>{teamData.position}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section id="executive" className="team-area pt-100 ">
                        {getDataBySection("team-Executive").map((item) => (
                            <div key={item._id} className="container project__area-three">
                                <div className="row ">
                                    <div className="col-xl-7 space-betweeni col-lg-8">
                                        <div className="section-title  mb-50 tg-heading-subheading animation-style3">
                                            <span className="sub-title">{item.subtitle}</span>
                                            <h2 className="title tg-element-title mt-4">
                                                {item.title}
                                            </h2>
                                        </div>
                                        <div
                                            className="dev_customsize mt-4"
                                            style={{ color: "#282739" }}
                                        >
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="row justify-content-center">
                                        {item.choicesTeam.map((id) => {
                                            const teamData = Array.isArray(teamMembers.teamMembers)
                                                ? teamMembers.teamMembers.find((member) => member._id === id)
                                                : null;

                                            return teamData ? (
                                                <div
                                                    key={id}
                                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-8"
                                                >
                                                    <div className="team-item">
                                                        <div className="team-thumb">
                                                            <img
                                                                src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${teamData.imageUrl}`}
                                                                alt={teamData.name}
                                                            />
                                                        </div>
                                                        <div className="team-content">
                                                            <h4 className="title">
                                                                <Link href="/team-details">
                                                                    {teamData.name}
                                                                </Link>
                                                            </h4>
                                                            <span>{teamData.position}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                <Bannerfooter data={getDataBySection("footer-banner")} />
            </Layout>
        </>
    );
}

export async function getServerSideProps({ locale }) {
    try {
        // Fetch CMS Data
        const cmsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
        if (!cmsResponse.ok) throw new Error('Failed to fetch CMS data');
        const cmsData = await cmsResponse.json();
        const fetchedData = cmsData.filter(item => item.page === "team");

        // Fetch Metadata
        const metadataResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pageMetadata/`);
        if (!metadataResponse.ok) throw new Error('Failed to fetch page metadata');
        const metadata = await metadataResponse.json();
        const pageMetadata = metadata.find(page => page.page === 'about') || {};

        // Fetch Team Members Data
        const teamResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team/`);
        if (!teamResponse.ok) throw new Error('Failed to fetch team data');
        const teamData = await teamResponse.json();

        const pageTitle = pageMetadata[`pageTitle_${locale}`] || pageMetadata.pageTitle_en || 'Default Title';
        const pageDescription = pageMetadata[`pageDescription_${locale}`] || pageMetadata.pageDescription_en || 'Default description';

        return {
            props: {
                pageTitle,
                pageDescription,
                initialData: fetchedData,
                teamMembersData: teamData,
                ...(await serverSideTranslations(locale, ["common"])),
            },
        };
    } catch (error) {
        console.error("Failed to load data:", error);
        return {
            props: {
                pageTitle: 'Error',
                pageDescription: 'Error fetching page data',
                initialData: [],
                teamMembersData: [],
                ...(await serverSideTranslations(locale, ["common"])),
            },
        };
    }
}
