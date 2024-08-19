import Link from "next/link"
import SVG from "@/components/elements/Allsvg"

export default function Annualreport({data}) {
    return (
<>
{data.map((item) => (
    <div key={item._id} className="container project__area-three ">
                    <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover " >
                            <span className="">{item.title}</span>
                            <h2 className=" mt-4" style={{ color: '#110B79' }}>{item.subtitle}</h2>
                        </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>{item.description}</div>
                    </div>
             
 </div>
              <div className="row align-items-center justify-content-center ">
                <div className="sidebar__widget-dev" >
                    <h4 className="sidebar__widget-title">2024</h4>

                    <button href='' className="btn-two"><SVG caseValue='case14' /> view report</button>

                </div>
                <div className="sidebar__widget-dev" >
                    <h4 className="sidebar__widget-title">2023</h4>

                    <button href='' className="btn-two"><SVG caseValue='case14' /> view report</button>

                </div>
                <div className="sidebar__widget-dev" >
                    <h4 className="sidebar__widget-title">2022</h4>

                    <button href='' className="btn-two"><SVG caseValue='case14' /> view report</button>

                </div>
                <div className="sidebar__widget-dev" >
                    <h4 className="sidebar__widget-title">2022</h4>

                    <button href='' className="btn-two"><SVG caseValue='case14' /> view report</button>

                </div>
                <div className="sidebar__widget-dev" >
                    <h4 className="sidebar__widget-title">2022</h4>

                    <button href='' className="btn-two"><SVG caseValue='case14' /> view report</button>

                </div>
                <div className="sidebar__widget-dev" >
                    <h4 className="sidebar__widget-title">2022</h4>

                    <button href='' className="btn-two"><SVG caseValue='case14' /> view report</button>

                </div>
                <div className="sidebar__widget-dev" >
                    <h4 className="sidebar__widget-title">2022</h4>

                    <button href='' className="btn-two"><SVG caseValue='case14' /> view report</button>

                </div>

          </div>


           



        </div>
))}
</>
    )
}