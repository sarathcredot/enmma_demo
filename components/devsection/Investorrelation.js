import { useState } from 'react';
import Link from 'next/link';
import Sectionfoot from '@/components/layout/DevsectionFoot';
import { useTranslation } from 'next-i18next';
import { toast } from "react-toastify";

export default function Contact({ data1, data }) {
  const { t, i18n } = useTranslation('common');

  const [formData, setFormData] = useState({
    option: '',
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [errMsg, seterrMsg] = useState("*please enter required filed")
  const [valiDateCheck, setvaliDateCheck] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const requiredFields = ['option', 'name', 'email', , 'message'];
    const isValid = requiredFields.every(field => formData[field]);

    if (!isValid) {

      setvaliDateCheck(true)
      return;
    } else if (formData.phoneNumber.length !== 10) {

      seterrMsg("Enter valid phone number")
      setvaliDateCheck(true)

      return;
    }

    try {
      setvaliDateCheck(false)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/investorform/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),

      });

      if (response.ok) {
        setvaliDateCheck(false)
        toast.success("Your form has been successfully submited.",{
          position: "top-center",
          hideProgressBar: true

        });
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


        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          hideProgressBar: true

        });

        setFormData({
          option: '',
          name: '',
          email: '',
          phoneNumber: '',
          message: ''
        });



      }
    } catch (error) {
      console.error('An error occurred:', error);

      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        hideProgressBar: true

      });

      setFormData({
        option: '',
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
      });





    }


  };

  return (
    <>
      <div className="container project__area-three">
        <div className="row container">
          {data.map((item) => (
            <div key={item._id} className="col-xl-7 space-betweeni col-lg-8 mb-5">
              <div className="dev_gover">
                <span>{item.subtitle}</span>
                <h2 className="mt-4 text-wrap devtextwrapo" style={{ color: '#110B79' }}>
                  {item.title}
                </h2>
              </div>
              <div className="dev_customsize  mt-0 mt-md-4" style={{ color: '#282739' }}>
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
                  <h2 className="title">{t('form-title1')}</h2>
                  <p>
                    {t("form-subtitle")}
                  </p>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-grp">
                        <select name="option" value={formData.option} onChange={handleChange}>
                          <option value="">{t('Please-select')}</option>
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
                            placeholder={t('Full-Name')}
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
                            placeholder={t('email')}
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
                            placeholder={t('Phone-Number')}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea
                        name="message"
                        placeholder={t('Message')}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {
                      valiDateCheck && <> <span style={{ color: "red", marginLeft: "5px" }} > {errMsg}  </span><br /> </>
                    }


                    <button style={{ marginTop: "10px" }} type="submit" className="btn">
                      {t('submit')}
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact__content">
                  <div className="section-title mb-35">
                    <h2 className="title sidebar__widget-title">{t('Contact-us')}</h2>
                  </div>
                  <div className="contact__info">
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call" />
                        </div>
                        <div className="content">
                          <h4 className="title">{t('phone')}</h4>
                          <Link dir="ltr" href="tel:0123456789">+ 88(9600)6002</Link>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-mail" />
                        </div>
                        <div className="content">
                          <h4 className="title">{t('email')}</h4>
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
