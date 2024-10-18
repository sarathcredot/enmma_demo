import Sectionfoot from "@/components/layout/DevsectionFoot"
import Link from "next/link"


export default function Marketingexpert1({ data, datas }) {
    return (
        <>
        {data.map((item) => (
            <section key = {item._id} className="marketing_expert__area_six">
                <div className="container">
                    <div   className="row align-items-center">
                        <div  className="col-lg-5 mb-30">
                            <h1 className="title mb-15">{item.title}</h1>
                            <p className="mb-45 dev-change">{item.description}</p>
                            <div className="about__list-box mb-35">
                                <ul className="list-wrap">
                                {Object.keys(item.points).map(pointKey => (
                                                    <li key={pointKey}><i className="fa icon-arrow" />{item.points[pointKey]}</li>
                                                ))}

                                </ul>
                            </div>
                            <Link href="/about" className="btn btn-two">{item.buttonTitle}</Link>
                        </div>
                        <div   className="col-lg-7 mb-30 position-relative">
                            <img src="/assets/img/home6/icon-square.svg" className="shape-top-right" />
                            <div className="box-video">
                                <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} />
                                {/* <VideoPopup style={1}/> */}
                            </div>
                        </div>
                    <Sectionfoot data={datas} bgColor={'#110B79'} fontColor={"#FFFFFF"}  fontColor2={'#FFFFFF'}/>
                    </div>
 

                </div>
            </section>
        ))}
        </ >
    )
}
