import CounterUp from "../elements/CounterUp";

export default function Counter2({data}) {
    return (
        <>
            <section className="counter-area">
                <div className="container">
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
                </div>
                <div className="counter-shape-two">
                    <img src="/assets/img/images/h2_counter_shape.png" alt="" className="rotateme" />
                </div>
            </section>
        </>
    )
}
