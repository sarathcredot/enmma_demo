import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import  Bannerfooter from "@/components/sections/Bannerfooter"
import Annualreport from "@/components/devsection/Annualreport"


export const metadata = {
    title: 'Annual report',
}

export default function Home2() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={3}>
            <Banner1  title={'Annual report'} paragraph={'Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem.lacus enim eleifend vitae nibh sem it amet consectetur.'} />
             <Annualreport/>
            <Bannerfooter/>
            </Layout>
        </>
    )
}