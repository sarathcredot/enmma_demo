import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Link from "next/link"
import Complaintsec from "@/components/devsection/Complaintsec"

export default function Services3() {
    return (
        <>

            <Layout headerStyle={6} footerStyle={3} >
            <Banner1  title={'Complaints & suggestions'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} />
            
            
            
            <div className="container project__area-three ">
                    <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover " >
                            <span className="">Lorem ipsum dolor sit a</span>
                            <h2 className=" mt-4" style={{ color: '#110B79' }}>lorem ipsum dolor sit amet <br />congue ornare elit</h2>
                        </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem</div>
                    </div>
                    <Complaintsec/>

            </div></div>
            <Bannerfooter/>
            </Layout>
        </>
    )
}