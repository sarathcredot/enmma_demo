import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import Banner1 from "@/components/sections/Banner1";
import Bannerfooter from "@/components/sections/Bannerfooter";
import Link from "next/link";
import { format } from 'date-fns'

import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocalized } from "@/util/localization-helper";
import { getImageUrl } from "@/util/image-url-helper";

export const metadata = {
  title: "Blogs",
};

export default function Blog({ initialData }) {
  const { t, i18n } = useTranslation("common");
  const [data, setData] = useState(initialData.sections);
  const [localizedData, setLocalizedData] = useState(initialData);

  useEffect(() => {
    localize();
  }, []);

  useEffect(() => {
    localize();
  }, [i18n.language]);

  const localize = () => {
    const localizedData = getLocalized(initialData, i18n.language);
    setLocalizedData(localizedData);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
        const data = await response.json();
        const fetchedData = data.filter((item) => item.page === "Blog");
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }

    loadData();
  }, [i18n.language]);

  const localizedSectionsData = data.map((item) => {
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
    const localizedPointsEn = {};
    const localizedPointsAr = {};
    if (item.points_en) {
      Object.keys(item.points_en).forEach((pointKey) => {
        localizedPointsEn[pointKey] = item.points_en[pointKey];
      });
    }
    if (item.points_ar) {
      Object.keys(item.points_ar).forEach((pointKey) => {
        localizedPointsAr[pointKey] = item.points_ar[pointKey];
      });
    }
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

  const getDataBySection = (section) => localizedSectionsData.filter((item) => item.section === section && item.status);
  
  const blogPosts = localizedData.blogs.map((blog) => { return {
    id: blog._id,
    title: blog.title,
    img: blog.imageUrl,
    category: blog.category.title,
    date: Date(blog.date)
  }});

  const latestPosts = localizedData.blogs.slice(0,3).map((blog) => { return {
    id: blog._id,
    title: blog.title,
    img: blog.imageUrl,
    category: blog.category.title,
    date: Date(blog.date)
  }});

  return (
    <>
      <Layout headerStyle={6} footerStyle={3}>
        <Banner1 data={getDataBySection("Blog-banner")} />
        <div>
          <section className="blog__area">
            <div className="container">
              <div className="blog__inner-wrap">
                <div className="row">
                  <div className="col-70">
                    <div className="blog-post-wrap">
                      <div className="row gutter-24">
                        <BlogPost
                          showItem={6}
                          showPagination
                          data={blogPosts}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-30">
                    <aside className="blog__sidebar">
                      {/* <div className="sidebar__widget sidebar__widget-two">
                        <div className="sidebar__search">
                          <form action="#">
                            <input type="text" placeholder="Search . . ." />
                            <button type="submit">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z"
                                  stroke="currentcolor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </form>
                        </div>
                        <div></div>
                      </div> */}
                      <div className="sidebar__widget">
                        <h4 className="sidebar__widget-title">{t('Category')}</h4>
                        <div className="sidebar__cat-list">
                          <ul className="list-wrap">
                            {localizedData.categories.map((category) => {
                              return (
                                <li>
                                  <Link href="#">
                                    <i className="fa icon-arrow" />
                                    {category.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="sidebar__widget">
                        <h4 className="sidebar__widget-title">{t('latest_posts')}</h4>
                        <div className="sidebar__post-list">
                          <div className="sidebar__post-item">
                            {latestPosts.map((blog) => {
                              return (
                                <div className="sidebar__post-item">
                                  <div className="sidebar__post-thumb">
                                    <Link href="/blog-details">
                                      <img src={getImageUrl(blog.img)} alt="" />
                                    </Link>
                                  </div>
                                  <div className="sidebar__post-content">
                                    <h5 className="title">
                                      <Link href={`/blog/${blog.id}`}>
                                        { blog.title}
                                      </Link>
                                    </h5>
                                    <span className="date">
                                      <i className="flaticon-time" />
                                      {format(blog.date, 'MMMM dd, yyyy')}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__widget">
                        <h4 className="sidebar__widget-title">{t('tags')}</h4>
                        <div className="sidebar__tag-list">
                          <ul className="list-wrap">
                            {localizedData.tags.map((tag) => <li>
                              <Link href="#">{tag.title}</Link>
                            </li>)}
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section1 className="call-back-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="call-back-content">
                    <div className="section-title white-title mb-10">
                      <h2 className="title">Request A Call Back</h2>
                    </div>
                    <p>
                      Ever find yourself staring at your computer screen a good
                      consulting slogan to come to mind? Oftentimes.
                    </p>
                    <div className="shape">
                      <img
                        src="/assets/img/images/call_back_shape.png"
                        alt=""
                        data-aos="fade-right"
                        data-aos-delay={400}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="call-back-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input type="text" placeholder="Name *" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input type="email" placeholder="E-mail *" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-grp">
                            <input type="number" placeholder="Phone *" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <button type="submit" className="btn">
                            Send Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section1> */}
        </div>
        {/* <Bannerfooter data={getDataBySection("annual-report")} /> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms`);
  const data = await response.json();
  const fetchedData = data.filter((item) => item.page === "blog");

  const blogResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
  const blogData = await blogResponse.json();

  const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/categories`);
  const categoryData = await categoryResponse.json();

  const tagsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/tags`);
  const tagsData = await tagsResponse.json();

  return {
    props: {
      initialData: { sections: fetchedData, blogs: blogData.blogPosts, categories: categoryData.categories, tags: tagsData.tags },
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
