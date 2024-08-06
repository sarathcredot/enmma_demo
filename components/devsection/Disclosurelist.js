import Link from "next/link"
import SVG from "@/components/elements/Allsvg"

export default function Disclosurelist({ item }) {
    return (
        <>
            <div className=" " >

                    <div  className="dev-disclosurelist">
                        <p>{item.paragraph}</p>
                        <h6>{item.date}</h6>
                        <h5 className=""><Link href={`/blog/${item.id}`}><SVG caseValue="case14" style={{ color: '#282739' }} />&nbsp; &nbsp;VIEW MORE</Link></h5>
                    </div>
            </div>


        </>
    )
}
