



'use client';
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


export default function Project3({ data }) {

  const [respo, setrespo] = useState([

    {
      id: 1,
      subtitle: "subtitle 1",
      sidebarSubtitle: "sidebarSubtitle 1",
      description: "description 1",




    },
    {
      id: 23,
      subtitle: "subtitle 2",
      sidebarSubtitle: "sidebarSubtitle 2",
      description: "description 2",




    },
    {
      id: 2,
      subtitle: "subtitle 3",
      sidebarSubtitle: "sidebarSubtitle 3",
      description: "description 3",




    }
  ])


  useEffect(async () => {


    await axios(process.env.NEXT_PUBLIC_BASE_URL).then((respo) => {

      console.log("service data", respo.data)
    })


  }, []);


  


  return (
    <>
      {data.map((item) => (
        <section key={item._id} className="project__area-three project__bg-three" data-background="/assets/img/bg/h3_project_bg.jpg">
          <div className="container">
            <div className="row justify-content-center">
              <div style={{ width: "100%", display: "flex", gap: "200px", paddingTop: "20px" }} className="col-xl-7 col-lg-8">
                <div style={{ width: "500px" }} className="section-title mb-40 tg-heading-subheading animation-style3">
                  <span style={{ fontSize: "18px" }} className="sub-title justify-content-center"> {item.subtitle} </span>
                  <h5 className="title">{item.title} </h5>
                </div>

                <div className="dev_customsize classMedia mt-0 mt-md-4">
                  {item.description}
                  {/* Our power of choice is untrammelled and when nothing <br />
                  prevents being able to do what we like best every pleasure. */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">


                <div className="project__item-three shine-animate-item">


                  <div className="project__item-three shine-animate-item">

                    <div className="project__content-three">
                      <span>{item.subtitle}</span>
                      <h2 className="title">{item.sidebarSubtitle}</h2>
                      <p>{item.description}</p>
                      <Link href={item.buttonLink} className="btn btn-two">{item.buttonTitle}</Link>
                    </div>



                    <div className="project__thumb-three shine-animate">
                      <img src={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.bannerImage}`} alt="" />
                    </div>
                  </div>




                </div>
              </div>
            </div>

            <div className="project__shape-wrap-three">
              <img src="/assets/img/project/h3_project_shape01.png" alt="" data-aos="fade-left" data-aos-delay={400} />
              <img src="/assets/img/project/h3_project_shape02.png" alt="" className="alltuchtopdown" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
