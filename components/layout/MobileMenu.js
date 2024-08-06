import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                {/* <li className="active menu-item-has-children"><Link href="#">Home</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">01. Business</Link></li>
                        <li><Link href="index-2">02. Finance</Link></li>
                        <li><Link href="index-3">03. Consulting</Link></li>
                        <li><Link href="index-4">04. Insurance</Link></li>
                        <li><Link href="index-5">05. Digital agency</Link></li>
                        <li><Link href="/index-6">06. Finance Solutions</Link></li>
                        <li><Link href="/index-7">07. Accounting Services</Link></li>
                        <li><Link href="/index-8">08. IT Solutions</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="plus-line" /></div></li> */}
                <li className="menu-item-has-children"><Link href="/about">About </Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/about-sub/#director">Board Of Directors</Link></li>
                        <li><Link href="/about-sub/#management">Management</Link></li>
                        <li><Link href="/about-sub/#executive">Executive </Link></li>
             
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="plus-line" /></div></li>
                <li className="menu-item-has-children"><Link href="/government">Government Bots</Link></li>
                <li className="menu-item-has-children"><Link href="/services">Services</Link></li>
                <li className="menu-item-has-children"><Link href="/corporate">Corporative Governance</Link></li>
                <li className="menu-item-has-children"><Link href="#">Investor Relations</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="/annual-report">Annual report</Link></li>
                        <li><Link href="/disclosures">Disclosures</Link></li>
                        <li><Link href="/investor-relations">Investor Relations</Link></li>
                        <li><Link href="/financial-statement">Financial Statement</Link></li>
                  
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="#">Information center </Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link href="/blog">Latest News</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/complaints">Complaints</Link></li>
                        <li><Link href="mailto:whistleblower@enmaa.com">Report an incident</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="plus-line" /></div>
                </li>
                <li><Link href="/contact">contact</Link></li>
            </ul>
        </>
    )
}
