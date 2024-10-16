import Link from "next/link"
import SVG from "@/components/elements/Allsvg"

export default function Disclosurelist({ item }) {
    return (
        <>
     

                    <tr  className="dev-disclosurelist">
                        <td><p>{item.heading}</p></td>
                        <td><h6>{item.year}</h6></td>
                        <td className=""><h5><Link href={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.document}`}><SVG caseValue="case14" style={{ color: '#282739' }} />&nbsp; &nbsp;VIEW MORE</Link></h5></td>
                    </tr>
            

        </>
    )
}
