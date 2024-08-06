import Sectionfoot from "@/components/layout/DevsectionFoot"

export default function Careerform() {
    return (

        <div className=" " style={{ backgroundColor: '#110B79' }} >

            <div className=" container project__area-three" >
                <div className="row ">
                    <div className="col-xl-7 space-betweeni col-lg-8">
                        <div className="  mb-50 dev_gover ">
                            <span className="">Lorem ipsum dolor sit a</span>
                            <h2 className=" mt-4">lorem ipsum dolor sit amet <br />congue ornare elit</h2>
                        </div>
                        <div className="dev_customsize mt-4">Lorem ipsum dolor sit amet consectetur. Mus et rhoncus pretium euismod pellentesque. Consectetur lacus enim eleifend vitae nibh sem</div>
                    </div>
                </div>
                <div className="contact__form-wrap">
                            
                                    <form id="contact-form" action="assets/mail.php" method="POST">

                                        {/* <div className="form-grp">

                                            <select name="list" id="pet-select">
                                                <option value="">Please select</option>
                                                <option value="AAA">AAA</option>
                                                <option value="BBBB">BBBB</option>
                                                <option value="CCCC">CCCC</option>
                                                <option value="DDDD">DDDD</option>
                                                <option value="SSSSS">SSSSS</option>
                                                <option value="FFFFF">FFFFF</option>
                                            </select>
                                        </div> */}
                                        {/* <div className="form-grp">
                                            <textarea name="message" placeholder="Description of your complaints or suggestions" />
                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="name" placeholder="Position Applying for" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="number" placeholder="Full Name" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" name="name" placeholder="Date of Birth" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                <select name="list" id="pet-select" style={{color:"#3E4073"}}>
                                                <option value="">Gender</option>
                                                <option value="male">male</option>
                                                <option value="female">female</option>
                                                
                                            </select>
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
                                                <input type="number" name="number" placeholder="Passport Number" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                <input type="email" name="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                <select name="list" id="pet-select" style={{color:"#3E4073"}}>
                                                <option value="">Select Nationality</option>
                                                <option value="AAA">AAA</option>
                                                <option value="BBBB">BBBB</option>
                                                <option value="CCCC">CCCC</option>
                                                <option value="DDDD">DDDD</option>
                                                <option value="SSSSS">SSSSS</option>
                                                <option value="FFFFF">FFFFF</option>
                                            </select>                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                <select name="list" id="pet-select"style={{color:"#3E4073"}}>
                                                <option value="">Degree Level</option>
                                                <option value="AAA">AAA</option>
                                                <option value="BBBB">BBBB</option>
                                                <option value="CCCC">CCCC</option>
                                                <option value="DDDD">DDDD</option>
                                                <option value="SSSSS">SSSSS</option>
                                                <option value="FFFFF">FFFFF</option>
                                            </select>                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                <select name="list" id="pet-select"style={{color:"#3E4073"}}>
                                                <option value="">Career Level</option>
                                                <option value="AAA">AAA</option>
                                                <option value="BBBB">BBBB</option>
                                                <option value="CCCC">CCCC</option>
                                                <option value="DDDD">DDDD</option>
                                                <option value="SSSSS">SSSSS</option>
                                                <option value="FFFFF">FFFFF</option>
                                            </select>                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                <textarea name="message" placeholder="Briefly Describe your Last Job Duties" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                <textarea name="message" placeholder="If Any Additional informations" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                                <div className="form-grp">
                                                    <p>Upload Your Resume ( pdf or docx only )</p>
                                                <input type="file" name="number" placeholder="Passport Number" style={{color:"#3E4073"}}/>
                                                </div>
                                            </div>
</div>
                                        <button type="submit" className="btn">Submit </button>
                                    </form>
                                    <p className="ajax-response mb-0" />
                                </div> 
            </div><div className="dev-bottom container"><Sectionfoot/></div> 
          </div>
    )
}