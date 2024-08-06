import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Careerform from "@/components/devsection/Careerform"

export default function Services2() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner1  title={'careers'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} bgColor={"#110B79"} fontColor={"#FFFFFF"}fontColor2={'#FFFFFF'}/>
            
            <Careerform/>
            <Bannerfooter/>
            </Layout>
        </>
    )
}