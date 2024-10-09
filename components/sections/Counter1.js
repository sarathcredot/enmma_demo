"use-client"
import CounterUp from "../elements/CounterUp";

export default function Counter1({ data }) {
    return (
        <>
            <section className="counter-area">
                <div className="container">
                    {data.map((item) => (

                        <div className="row justify-content-center">


                            {Object.keys(item.localizedIcondata).map(iconKey => (

                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.localizedIcondata[iconKey].iconpath}`} alt={item.localizedIcondata[iconKey].title}  className="counterImage" /> </div>
                                        <div className="content">
                                            <h2 className="count"><CounterUp count={item.localizedIcondata[iconKey].number_en} />+</h2>
                                            <p className=" ">{item.localizedIcondata[iconKey].title}</p>
                                        </div>
                                    </div></div>
                            ))}


                        </div>
                    ))}
                </div>
                <div className="counter-shape-wrap">
                    <img src="/assets/img/images/counter_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    {/* <img src="/assets/img/images/counter_shape02.png" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" /> */}
                    <img src="/assets/img/images/counter_shape03.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
