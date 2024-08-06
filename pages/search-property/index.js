import Layout from "@/components/layout/Layout"
import Banner3 from "@/components/sections/Banner3"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Searchproperty from "@/components/devsection/Searchproperty"

export default function Home7() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner3  title={'Search Property'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} bgColor={"#110B79"} fontColor={"#FFFFFF"}fontColor2={'#FFFFFF'}/>
            <Searchproperty />

          <Bannerfooter/>
            </Layout>
        </>
    )
}