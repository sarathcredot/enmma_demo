import Link from "next/link";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { toast } from "react-toastify";

export default function Complaintsection() {
  const { t, i18n } = useTranslation('common');
  const [formData, setFormData] = useState({
    description: '',
    contactNumber: '',
    civilId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    option:''
  });
  const [errMsg,seterrMsg]=useState("*please enter required filed")
  const [valiDateCheck, setvaliDateCheck] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requiredFields = ['description',  'civilId', 'firstName', 'lastName',  'emailAddress','option'];
    const isValid = requiredFields.every(field => formData[field]);
  
    if (!isValid) {
     setvaliDateCheck(true)
      return;
    }else if(formData.option.length!==10 && formData.contactNumber.length!==10){

          seterrMsg("Enter valid phone number ");
          setvaliDateCheck(true)
          return;
    }
    
    
    try {

      setvaliDateCheck(false)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/complaints-suggestions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok){
        
        toast.success("Your complaint has been successfully registered.", {
          position: "top-center",
          hideProgressBar: true

        });
        setFormData({
          description: '',
          contactNumber: '',
          civilId: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailAddress: '',
          option:""
        });
      
      } else {
        const errorData = await response.text();
        console.error('Failed to submit form', response.statusText, errorData);

        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          hideProgressBar: true

        });
        setFormData({
          description: '',
          contactNumber: '',
          civilId: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailAddress: '',
          option:""
        });
      
        
      }
    } catch (error) {
      console.error('An error occurred:', error);
      
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        hideProgressBar: true

      });
      setFormData({
        description: '',
        contactNumber: '',
        civilId: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        option:""
      });
      
   
    }
 
 
 
 
  };
  
  return (
    <>
      <section  className="contact__area">
        <div  className="container">
          <div className="row">
            <div  className="row align-items-center ">
              <div  dir="ltr" className="col-lg-8 ">
                <div  className="contact__form-wrap">
                  <h2 className="title">{t('Complaint-title')}</h2>
                  <p>{t('Complaint-subtitle')}</p>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-grp">
                      <select name="option" value={formData.option} onChange={handleChange}>
                        <option value="">{t('Please-select')}</option>
                        <option value="AAA">AAA</option>
                        <option value="BBBB">BBBB</option>
                        <option value="CCCC">CCCC</option>
                        <option value="DDDD">DDDD</option>
                        <option value="SSSSS">SSSSS</option>
                        <option value="FFFFF">FFFFF</option>
                      </select>
                    </div>
                    <div className="form-grp">
                      <textarea
                        name="description"
                        placeholder={t('Description-form')}
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="number"
                            name="contactNumber"
                            placeholder={t('Contact-Number')}
                            value={formData.contactNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            name="civilId"
                            placeholder={t('Civil-ID')}
                            value={formData.civilId}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            name="firstName"
                            placeholder={t('First-Name')}
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            name="lastName"
                            placeholder={t('Last-Name')}
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="number"
                            name="phoneNumber"
                            placeholder={t('Phone-Number')}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="email"
                            name="emailAddress"
                            placeholder={t('email')}
                            value={formData.emailAddress}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    {
                      valiDateCheck && <> <span style={{color:"red",marginLeft:"5px"}} > {errMsg} </span><br/> </>
                    }
                    
                    <button style={{marginTop:"10px"}} type="submit" className="btn">{t('submit')}</button>
                  </form>
                  <p className="ajax-response mb-0" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact__content">
                  <div className="section-title mb-35">
                    <h2 className="title">{t('complaint-contact-tittle')}</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur. Pellentesque ornare ipsum ultrices lacus. Quisque tortor accumsan ut pellentesque</p> */}
                  </div>
                  <div className="contact__info">
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-pin" />
                        </div>
                        <div className="content">
                          <h4 className="title">{t('Address')}</h4>
                          <p>{t('address')}</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call" />
                        </div>
                        <div className="content">
                          <h4 className="title">{t('phone')}</h4>
                          <Link dir="ltr" href="tel:0123456789">+48 1866667</Link>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-mail" />
                        </div>
                        <div className="content">
                          <h4 className="title">{t('email')}  </h4>
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
  );
}
