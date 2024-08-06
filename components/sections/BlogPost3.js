import Link from 'next/link'

export default function BlogPost3() {
    return (
        <>
            <section className="blog__post-area-two blog__post-area-three blog__post-bg-two" data-background="/assets/img/bg/blog_post_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">OUR BLOG UPDATE</span>
                                <h2 className="title tg-element-title">Featured News And Insights</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__post-two">
                                <div className="blog__post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_post038.jpg" alt="" /></Link>
                                </div>
                                <div className="blog__post-content-two">
                                    <div className="blog-post-meta">
                                        <ul className="list-wrap">
                                            {/* <li>
                                                <Link href="/blog" className="blog__post-tag-two">Business</Link>
                                            </li> */}
                                            <li><i className="fas fa-calendar-alt" />Oct 21, 2024</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">Planned Gulf real estate project value rises to $1.7 trillion; analysts Identify trends and opportunities for Investors In 2024.</Link></h2>
                                    <div className="blog-avatar">
                                        
                                        <div className="avatar-content">
                                            <p> <Link href="/blog-details">Read More</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__post-two">
                                <div className="blog__post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_post039.jpg" alt="" /></Link>
                                </div>
                                <div className="blog__post-content-two">
                                    <div className="blog-post-meta">
                                        <ul className="list-wrap">
                                            {/* <li>
                                                <Link href="/blog" className="blog__post-tag-two">Audit</Link>
                                            </li> */}
                                            <li><i className="fas fa-calendar-alt" />Oct 21, 2024</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">Markaz report forecasts UAE, Saudi and Kuwait real estate growth and trends In 2024.</Link></h2>
                                    <div className="blog-avatar">
                                        
                                        <div className="avatar-content">
                                            <p> <Link href="/#blog-details">Read More</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog__post-two">
                                <div className="blog__post-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_post0310.jpg" alt="" /></Link>
                                </div>
                                <div className="blog__post-content-two">
                                    <div className="blog-post-meta">
                                        <ul className="list-wrap">
                                            {/* <li>
                                                <Link href="/blog" className="blog__post-tag-two">Investment</Link>
                                            </li> */}
                                            <li><i className="fas fa-calendar-alt" />Oct 21, 2024</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">Rental rates will continue to grow across Kuwait's commercial real estate market In 2023 and 2024, albelt fairly slowly.</Link></h2>
                                    <div className="blog-avatar">
                                        
                                        <div className="avatar-content">
                                            <p> <Link href="/blog-details">Read More</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-shape-wrap">
                    <img src="/assets/img/images/h3_blog_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/h3_blog_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
