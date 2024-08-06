import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Bannerfooter from "@/components/sections/Bannerfooter"
import Investorrelation from "@/components/devsection/Investorrelation"

export default function Investor() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner1  title={'Investor relations contact'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} />
            <Investorrelation/>
            <Bannerfooter/>
            </Layout>
        </>
    )
}