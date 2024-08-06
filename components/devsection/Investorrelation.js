import Link from "next/link";
import Sectionfoot from "@/components/layout/DevsectionFoot"

export default function Contact() {
  return (
    <>
     <div className="container project__area-three ">
                    <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div  className="  mb-50 dev_gover " >
                            <span className="">Lorem ipsum dolor sit a</span>
                            <h2 className=" mt-4" style={{ color: '#110B79' }}>lorem ipsum dolor sit amet <br />congue ornare elit</h2>
                        </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem</div>
                    </div>
      <div className="container">
        <div className="row">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact__form-wrap">
                <h2 className="title">Give Us a Message</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form id="contact-form" action="assets/mail.php" method="POST">
                  <div className="row">
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
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="number" name="phone" placeholder="Phone" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea name="message" placeholder="Message" />
                  </div>

                  <button type="submit" className="btn">
                    Submit{" "}
                  </button>
                </form>
                <p className="ajax-response mb-0" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact__content">
                <div className="section-title mb-35">
                  <h2 className="title sidebar__widget-title">Connect Us</h2>
                </div>
                <div className="contact__info">
                  <ul className="list-wrap">
                    {/* <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Address</h4>
                                                        <p>Abdullah Al-Mobarak Street, Al-Enmaa Tower, Kuwait City</p>
                                                    </div>
                                                </li> */}
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
                        <Link href="mailto:enmaa@enmaa.com">
                          enmaa@enmaa.com
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <div className="dev-bottom"><Sectionfoot  bgColor={'#110B79'} fontColor={"#FFFFFF"}  fontColor2={'#FFFFFF'}/></div>
      </div></div>
    </>
  );
}
