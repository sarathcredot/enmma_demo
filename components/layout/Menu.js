import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                {/* <li className="active menu-item-has-children"><Link href="#">Home</Link>
                    <ul className="sub-menu">
                        <li><Link href="/">01. Business</Link></li>
                        <li><Link href="/index-2">02. Finance</Link></li>
                        <li><Link href="/index-3">03. Consulting</Link></li>
                        <li><Link href="/index-4">04. Insurance</Link></li>
                        <li><Link href="/index-5">05. Digital agency</Link></li>
                        <li><Link href="/index-6">06. Finance Solutions</Link></li>
                        <li><Link href="/index-7">07. Accounting Services</Link></li>
                        <li><Link href="/index-8">08. IT Solutions</Link></li>

                    </ul>
                </li> */}
                <li className="menu-item-has-children"><Link href="/about">About</Link>
                    <ul className="sub-menu">
                        <li><Link href="/about-sub/#director"  >Board Of Directors</Link></li>
                        <li><Link href="/about-sub/#management">Management</Link></li>
                        <li><Link href="/about-sub/#executive">Executive </Link></li>
                        {/* <li><Link href="/>Insurance About</Link></li>
                        <li><Link href="/#about-4">Digital agency About</Link></li> */}
                    </ul>
                </li>
                 <li> <Link href="/government">Govt. Bots</Link></li>
                    <li> <Link href="/services">Services</Link></li>
                    <li> <Link href="/corporate">Corporate Governance</Link></li>

                <li className="menu-item-has-children"><Link href="#">Investor Relations</Link>
                    <ul className="sub-menu">
                        <li><Link href="/annual-report">Annual report</Link></li>
                        <li><Link href="/disclosures">Disclosures</Link></li>
                        <li><Link href="/investor-relations">Investor Relations</Link></li>
                        <li><Link href="/financial-statement">Financial Statement</Link></li>
                        {/* <li><Link href="/#-5">Digital agency Service</Link></li>
                        <li><Link href="/#-details">Service Details One</Link></li>
                        <li><Link href="/#-details-2">Service Details Two</Link></li>
                        <li><Link href="/#-details-3">Service Details Three</Link></li>
                        <li><Link href="/#-details-4">Service Details Four</Link></li>
                        <li><Link href="/#-details-5">Service Details Five</Link></li> */}
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Info. center </Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Latest News</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/complaints">Complaints</Link></li>
                        <li><Link href="mailto:whistleblower@enmaa.com">Report an Incident</Link></li>
                        {/* <li><Link href="/#-details">Team Details</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                        <li><Link href="/error">404 Error Page</Link></li>
                        <li><Link href="/login">Login Page</Link></li>
                        <li><Link href="/register">Register Page</Link></li>
                        <li><Link href="/forgot-password">Forgot password Page</Link></li> */}
                    </ul>
                </li>
                {/* <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/contact">contact</Link></li>
            </ul>
        </>
    )
}
