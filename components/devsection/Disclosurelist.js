import Link from "next/link"
import SVG from "@/components/elements/Allsvg"

export default function Disclosurelist({ item }) {
    return (
        <>
            <div className=" " >

                    <div  className="dev-disclosurelist">
                        <p>{item.heading}</p>
                        <h6>{item.year}</h6>
                        <h5 className=""><Link href={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.document}`}><SVG caseValue="case14" style={{ color: '#282739' }} />&nbsp; &nbsp;VIEW MORE</Link></h5>
                    </div>
            </div>


        </>
    )
}
