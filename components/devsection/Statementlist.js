import Link from "next/link"
import SVG from "@/components/elements/Allsvg"

export default function Statementlist({ item }) {
    return (
        <>
            <div className=" " >

                    <div  className="dev-statmentlist container">
                       <h1 className="fw-title">2023</h1>
                        <div className="state-list"><span>{item.date}</span>
                        <span className=""><Link href={`/blog/${item.id}`}><SVG caseValue='case14' />&nbsp; &nbsp;VIEW </Link></span>
                        </div>
                        <div className="state-list"><span>{item.date}</span>
                        <span className=""><Link href={`/blog/${item.id}`}><SVG caseValue='case14' />&nbsp; &nbsp;VIEW </Link></span>
                        </div>
                        <div className="state-list"><span>{item.date}</span>
                        <span className=""><Link href={`/blog/${item.id}`}><SVG caseValue='case14' />&nbsp; &nbsp;VIEW </Link></span>
                        </div>
                        <div className="state-list"><span>{item.date}</span>
                        <span className=""><Link href={`/blog/${item.id}`}><SVG caseValue='case14' />&nbsp; &nbsp;VIEW </Link></span>
                        </div>
                    </div>
            </div>


        </>
    )
}
