import { useState } from 'react';
import Link from 'next/link';
import Sectionfoot from '@/components/layout/DevsectionFoot';

export default function Contact({ data1, data }) {
  const [formData, setFormData] = useState({
    option: '',
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('${process.env.NEXT_PUBLIC_BASE_URL}/investorform/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully'); 
        setFormData({ 
          option: '',
          name: '',
          email: '',
          phoneNumber: '',
          message: ''
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
      <div className="container project__area-three">
        <div className="row">
          {data.map((item) => (
            <div key={item._id} className="col-xl-7 space-betweeni col-lg-8">
              <div className="mb-50 dev_gover">
                <span>{item.subtitle}</span>
                <h2 className="mt-4" style={{ color: '#110B79' }}>
                  {item.title}
                </h2>
              </div>
              <div className="dev_customsize mt-4" style={{ color: '#282739' }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="container">
          <div className="row">
            <div className="row align-items-center">
              <div dir="ltr" className="col-lg-8">
                <div className="contact__form-wrap">
                  <h2 className="title">Give Us a Message</h2>
                  <p>
                    Your email address will not be published. Required fields are marked *
                  </p>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-grp">
                        <select name="option" value={formData.option} onChange={handleChange}>
                          <option value="">Please select</option>
                          <option value="Angel Investment">Angel Investment</option>
                          <option value="Venture Capital">Venture Capital</option>
                          <option value="Equity">Equity</option>
                          <option value="Debt">Debt</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <div className="form-grp">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-grp">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-grp">
                          <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact__content">
                  <div className="section-title mb-35">
                    <h2 className="title sidebar__widget-title">Connect Us</h2>
                  </div>
                  <div className="contact__info">
                    <ul className="list-wrap">
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
        <div className="dev-bottom">
          <Sectionfoot data={data1} bgColor={'#110B79'} fontColor={"#FFFFFF"} fontColor2={'#FFFFFF'} />
        </div>
      </div>
    </>
  );
}
