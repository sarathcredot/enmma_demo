import CounterUp from "../elements/CounterUp";

export default function Counter2({data}) {
    return (
        <>
            <section className="counter-area-two">
                <div className="container">
                    <div className="row justify-content-center">
                        {data.map((item) => (

                            <div className="row justify-content-center">

                                <div className=" d-flex gap-4">
                                    {Object.keys(item.localizedIcondata).map(iconKey => (

                                        <div className="counter-item">
                                            <div className="icon">
                                                <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.localizedIcondata[iconKey].iconpath}`} alt={item.localizedIcondata[iconKey].title} />                                </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp count={item.localizedIcondata[iconKey].number_en} />+</h2>
                                                <p>{item.localizedIcondata[iconKey].title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

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
