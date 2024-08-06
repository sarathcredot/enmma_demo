import Link from 'next/link';

const Banner1 = ({ title, paragraph, bgColor, fontColor,fontColor2 }) => {
    return (
        <>
            <section className="banner__area-one banner__bg-four"style={{ backgroundColor: bgColor}} >
                <div className="container" style={{  color: fontColor }} >
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="banner__content-two">
                                <h2 className="title "style={{  color: fontColor }} data-aos="fade-up" data-aos-delay={100}>{title}</h2>
                                <p data-aos="fade-up" style={{  color: fontColor2 }} data-aos-delay={300}>{paragraph}</p>
                                {/* <Link href="/contact" className="btn border-btn" data-aos="fade-up" data-aos-delay={600}>Get Started</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-social banner-social-two">
                    <h5 className="title">Follow us</h5>
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div> */}
                <div className="banner__shape-two">
               
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="heartbeat" />
                </div>
                <div className="breadcrumb__shape_dev2">
                    <img src="/assets/img/images/breadcrumb_shape01.png" alt="" />
                    <img src="/assets/img/images/breadcrumb_shape02.png" alt="" className="alltuchtopdown" />
                    <img src="/assets/img/images/h2_testimonial_shape.png"  width={500} height={100}  alt="" />
                    {/* <img src="/assets/img/images/breadcrumb_shape04.png" alt="" /> */}
                        {/* <img src="/assets/img/images/breadcrumb_shape05.png" alt="" className="alltuchtopdown" /> */}
                </div>
            </section>
        </>
    );
};

Banner1.defaultProps = {
    bgColor: '#FFFFFF', 
    fontColor: '#110B79',
    fontColor2: '#282739',
};

export default Banner1;
