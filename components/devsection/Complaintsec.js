import Link from "next/link"
import SVG from "@/components/elements/Allsvg"

export default function Disclosurelist({ item }) {
    return (
        <>
            <section className="contact__area">
                <div className="container">
                    <div className="row">
                        <div className="row align-items-center mr-5">
                            <div className="col-lg-8">
                                <div className="contact__form-wrap">
                                    <h2 className="title">Give Us a Message</h2>
                                    <p>We value your feedback. You can submit a complaint or offer a suggestion to help us improve our service.</p>
                                    <form id="contact-form" action="assets/mail.php" method="POST">

                                        <div className="form-grp">

                                            <select name="list" id="pet-select">
                                                <option value="">Please select</option>
                                                <option value="AAA">AAA</option>
                                                <option value="BBBB">BBBB</option>
                                                <option value="CCCC">CCCC</option>
                                                <option value="DDDD">DDDD</option>
                                                <option value="SSSSS">SSSSS</option>
                                                <option value="FFFFF">FFFFF</option>
                                            </select>
                                        </div>
                                        <div className="form-grp">
                                            <textarea name="message" placeholder="Description of your complaints or suggestions" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="name" placeholder="Contact Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="number" name="number" placeholder="Civil ID" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="name" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="name" placeholder="Last Name" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="number" name="number" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="email" name="email" placeholder="Email" />
                                                </div>
                                            </div>

                                        </div>

                                        <button type="submit" className="btn">Submit </button>
                                    </form>
                                    <p className="ajax-response mb-0" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact__content">
                                    <div className="section-title mb-35">
                                        <h2 className="title">How can we help you?</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur. Pellentesque ornare ipsum ultrices lacus. Quisque tortor accumsan ut pellentesque </p>
                                    </div>
                                    <div className="contact__info">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-pin" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">Address</h4>
                                                    <p>Abdullah Al-Mobarak Street, Al-Enmaa Tower, Kuwait City</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">Phone</h4>
                                                    <Link href="tel:0123456789">+48 1866667</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-mail" />
                                                </div>
                                                <div className="content">
                                                    <h4 className="title">E-mail</h4>
                                                    <Link href="mailto:enmaa@enmaa.com">enmaa@enmaa.com</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}
