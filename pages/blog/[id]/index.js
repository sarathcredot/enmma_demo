'use client'
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/PopupVideo"
import data from "@/util/blog.json"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getImageUrl } from "@/util/image-url-helper";
import { getLocalized } from "@/util/localization-helper";
import { format } from 'date-fns'

import "@blocknote/core/fonts/inter.css";
// import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { ServerBlockNoteEditor } from "@blocknote/server-util";

export default function BlogDetails({initialData}) {
  const { t, i18n } = useTranslation("common");

  const [blogPost, setBlogPost] = useState();
  const [localizedData, setLocalizedData] = useState(initialData);

//   const optionsEditorEn = {
//     initialContent: JSON.parse(initialData.blog.content_en),
//   };

//   const editor = useCreateBlockNote(optionsEditorEn);

  useEffect(() => {
    // const blogContent = editor.blocksToFullHTML(localizedData.blog.content);
    // setBlogPost({ ...localizedData.blog, blogContent: HTMLFromBlocks});
    setBlogPost(localizedData.blog);
  }, [localizedData]);

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

  const latestPosts = localizedData.blogs.slice(0,3).map((blog) => { return {
    id: blog._id,
    title: blog.title,
    img: blog.imageUrl,
    category: blog.category.title,
    date: Date(blog.date)
  }});
debugger;
  return (
    <>
      <Layout headerStyle={6} footerStyle={3}>
        {/* <Banner1
          title={"Blogs details"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur."
          }
        /> */}
        {blogPost && (
          <>
            <div>
              <section className="blog__details-area">
                <div className="container">
                  <div className="blog__inner-wrap">
                    <div className="row">
                      <div className="col-70">
                        <div className="blog__details-wrap">
                          <div className="blog__details-thumb">
                            <img
                              src={getImageUrl(blogPost.imageUrl)}
                              className="w-100"
                              alt=""
                            />
                          </div>
                          <div className="blog__details-content">
                            <h2 className="title">{blogPost.title}</h2>
                            <div className="blog-post-meta">
                              <ul className="list-wrap">
                                <li>
                                  <Link
                                    href="/blog"
                                    className="blog__post-tag-two"
                                  >
                                    {blogPost.category.title}
                                  </Link>
                                </li>
                                {/* <li>
                                  <div className="blog-avatar">
                                    <div className="avatar-thumb">
                                      <img
                                        src="/assets/img/blog/blog_avatar01.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="avatar-content">
                                      <p>
                                        By{" "}
                                        <Link href="/blog-details">
                                          Doman Smith
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </li> */}
                                <li>
                                  <i className="fas fa-calendar-alt" />
                                  {format(blogPost.date, "MMMM dd, yyyy")}
                                </li>
                              </ul>
                            </div>
                            <div
                              className=" bn-default-styles"
                              dangerouslySetInnerHTML={{
                                __html: blogPost.blogContent,
                              }}
                            />
                            <div className="blog__details-bottom">
                              <div className="row align-items-center">
                                <div className="col-md-7">
                                  <div className="post-tags">
                                    <h5 className="title">Tags:</h5>
                                    <ul className="list-wrap">
                                      {localizedData.tags.map((tag) => (
                                        <li>
                                          <Link href="#">{tag.title}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-30">
                        <aside className="blog__sidebar">
                          <div className="sidebar__widget">
                            <h4 className="sidebar__widget-title">
                              {t('categories')}
                            </h4>
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
                            <h4 className="sidebar__widget-title">
                             {t('latest_posts')}
                            </h4>
                            <div className="sidebar__post-list">
                              {latestPosts.map((blog) => {
                                return (
                                  <div className="sidebar__post-item">
                                    <div className="sidebar__post-thumb">
                                      <Link href="/blog-details">
                                        <img
                                          src={getImageUrl(blog.img)}
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                    <div className="sidebar__post-content">
                                      <h5 className="title">
                                        <Link href={`/blog/${blog.id}`}>
                                          {blog.title}
                                        </Link>
                                      </h5>
                                      <span className="date">
                                        <i className="flaticon-time" />
                                        {format(blog.date, "MMMM dd, yyyy")}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div className="sidebar__widget">
                            <h4 className="sidebar__widget-title">{t('tags')}</h4>
                            <div className="sidebar__tag-list">
                              <ul className="list-wrap">
                                {localizedData.tags.map((tag) => (
                                  <li>
                                    <Link href="#">{tag.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
        {/* <Bannerfooter /> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale, params }) {

    const { id } = params;
  
    const blogResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`);
    const blog = await blogResponse.json();
  
    const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/categories`);
    const categoryData = await categoryResponse.json();

    const blogsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`);
    const blogData = await blogsResponse.json();
  
    const tagsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/tags`);
    const tagsData = await tagsResponse.json();

    const editor = ServerBlockNoteEditor.create();
    const blogContentEn = await editor.blocksToFullHTML(JSON.parse(blog.blogPost.content_en));
    const blogContentAr = await editor.blocksToFullHTML(JSON.parse(blog.blogPost.content_ar));

    return {
      props: {
        initialData: { blogs: blogData.blogPosts, blog: {...blog.blogPost, blogContent_en: blogContentEn, blogContent_ar: blogContentAr}, categories: categoryData.categories, tags: tagsData.tags},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }