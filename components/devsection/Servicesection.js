import Link from "next/link"

export default function Servicesection() {
    return (
        <>
                       <div className="row  pt-120">
                        <div className="col-lg-8">
                            <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                                
                                <span className="sub-title">Realising Excellence in Real Estate </span>
                                <h2 className="title tg-element-title col-lg-12">To Provide Outstanding Level of Services And Products To Our Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div>
<div className="dev-service-main">
      <div className="dev-services-section">
                    <div className=" col-xl-4 col-md-12 dev-fit-image  ">
                        <img src="/assets/img/project/service-2.jpg" />
                        {/* <VideoPopup style={1}/> */}
                    </div>
                
                        <div className="dev-service-content">
                          <h1>Owner Services</h1>
                          <p>We have been managing rental properties for years. Our industry-specific experience and a wide range of processes and procedures meet the needs of property owners and help tenants receive excellent services.</p>
                         <span><Link href="/services/service-1" className="btn">Read More</Link></span> 
                        </div>
                
            </div>
            <div className="dev-services-section">
                    <div className="col-xl-4 col-md-12 dev-fit-image ">
                        <img src="/assets/img/project/service-3.jpg" />
                        {/* <VideoPopup style={1}/> */}
                    </div>
                
                        <div className=" col-xl-8 dev-service-content">
                          <h1>Leasing Services</h1>
                          <p>Discover a wide range of leasing options across Kuwait. Browse our extensive listings or use our convenient contact form to find the perfect property for your needs. We make leasing easy!</p>
                        <span><Link href="/services/service-2" className="btn">Read More</Link></span> 
                        </div>
                
            </div>  <div className="dev-services-section">
                    <div className="col-xl-4 col-md-12 dev-fit-image ">
                        <img src="/assets/img/project/service-4.jpg" />
                        {/* <VideoPopup style={1}/> */}
                    </div>
                
                        <div className="dev-service-content">
                          <h1>Auction Services</h1>
                          <p>You can also choose the property that meets your needs by using the contact form below. You can also choose the property that meets your needs by using the contact form below.</p>
                        <span><Link href="/services/service-3" className="btn">Read More</Link></span> 
                        </div>
                
            </div>  <div className="dev-services-section">
                    <div className="col-xl-4 col-md-12 dev-fit-image ">
                        <img src="/assets/img/project/service-5.jpg" />
                        {/* <VideoPopup style={1}/> */}
                    </div>
                
                        <div className="dev-service-content">
                          <h1>Security Services</h1>
                          <p>We are pleased to offer security services across all the public and private sector. We always look forward to supporting all businesses by providing security guard services with highly trained security personnel.</p>
                        <span><Link href="/services/service-4" className="btn">Read More</Link></span> 
                        </div>
                
            </div>
            <div className="dev-services-section">
                    <div className="col-xl-4 col-md-12 dev-fit-image ">
                        <img src="/assets/img/project/service-1.jpg" />
                        {/* <VideoPopup style={1}/> */}
                    </div>
                
                        <div className="dev-service-content">
                          <h1>Consultancy Services</h1>
                          <p>We offer real estate consultancy services to clients who would like to seek professional advice regarding investment in properties. We analyze markets, assess properties, and guide strategic decisions to maximize your investment returns.</p>
                        <span><Link href="/services/service-5" className="btn">Read More</Link></span> 
                        </div>
                
            </div>

 </div>
                    
                    </div>
         </>
    )
}