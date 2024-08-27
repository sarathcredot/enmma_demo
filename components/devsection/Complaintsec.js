import Link from "next/link";
import { useState } from "react";

export default function Complaintsection() {
  const [formData, setFormData] = useState({
    description: '',
    contactNumber: '',
    civilId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requiredFields = ['description', 'contactNumber', 'civilId', 'firstName', 'lastName', 'phoneNumber', 'emailAddress'];
    const isValid = requiredFields.every(field => formData[field]);
  
    if (!isValid) {
      alert('Please fill in all required fields');
      return;
    }
  
    try {
      const response = await fetch('${process.env.NEXT_PUBLIC_BASE_URL}/complaints-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({
          description: '',
          contactNumber: '',
          civilId: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailAddress: ''
        });
      } else {
        const errorData = await response.text();
        console.error('Failed to submit form', response.statusText, errorData);
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while submitting the form');
    }
  };
  
  return (
    <>
      <section className="contact__area">
        <div className="container">
          <div className="row">
            <div className="row align-items-center mr-5">
              <div dir="ltr" className="col-lg-8">
                <div className="contact__form-wrap">
                  <h2 className="title">Give Us a Message</h2>
                  <p>We value your feedback. You can submit a complaint or offer a suggestion to help us improve our service.</p>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-grp">
                      <select name="option" value={formData.option} onChange={handleChange}>
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
                      <textarea
                        name="description"
                        placeholder="Description of your complaints or suggestions"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            type="text"
                            name="contactNumber"
                            placeholder="Contact Number"
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
                            placeholder="Civil ID"
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
                            placeholder="First Name"
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
                            placeholder="Last Name"
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
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
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
                            placeholder="Email"
                            value={formData.emailAddress}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                  </form>
                  <p className="ajax-response mb-0" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact__content">
                  <div className="section-title mb-35">
                    <h2 className="title">How can we help you?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Pellentesque ornare ipsum ultrices lacus. Quisque tortor accumsan ut pellentesque</p>
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
                          <Link dir="ltr" href="tel:0123456789">+48 1866667</Link>
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
  );
}
