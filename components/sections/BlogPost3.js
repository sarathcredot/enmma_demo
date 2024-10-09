'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function BlogPost3() {
    const { i18n ,t} = useTranslation();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/`);
                setBlog(response.data.blogPosts || []);  // Ensure you're accessing the blogPosts array correctly
            } catch (error) {
                console.error("Error fetching Blog:", error);
            }
        };
        fetchBlog();
    }, []);

    const localizedData = blog.map(item => ({
        ...item,
        title: item[`title_${i18n.language}`] || item.title_en,
        subtitle: item[`subtitle_${i18n.language}`] || item.subtitle_en,
        description: item[`description_${i18n.language}`] || item.description_en
    }));

    return (
        <>
            <section className="blog__post-area-two blog__post-area-three blog__post-bg-two" data-background="/assets/img/bg/blog_post_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">{t('blog_subtitle')}</span>
                                <h2 className="title tg-element-title">{t('blog_title')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {localizedData.length > 0 ? (
                            localizedData.map((blog) => (
                                <div className="col-lg-4 col-md-6" key={blog._id}>
                                    <div className="blog__post-two">
                                        <div className="blog__post-thumb-two">
                                            <Link href={`/blog/${blog._id}`}>
                                                <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${blog.imageUrl}` || "/assets/img/blog/h2_blog_post0310.jpg"} alt={blog.title || "Blog Post"} />
                                            </Link>
                                        </div>
                                        <div className="blog__post-content-two">
                                            <div className="blog-post-meta">
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-calendar-alt" />{new Date(blog.date).toLocaleDateString()}</li>
                                                </ul>
                                            </div>
                                            <h2 className="title">
                                                <Link href={`/blog/${blog._id}`}>{blog.title}</Link>
                                            </h2>
                                            <div className="blog-avatar">
                                                <div className="avatar-content">
                                                    <p><Link href={`/blog/${blog._id}`}>{t('read_more')}</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading blog...</p>
                        )}
                    </div>
                </div>
                <div className="blog-shape-wrap">
                    <img src="/assets/img/images/h3_blog_shape01.png" alt="Blog Shape" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/h3_blog_shape02.png" alt="Blog Shape" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    );
}
