'use client'; // Mark this component as a client-side component

import { useState } from 'react';
import axios from 'axios';
import { Country } from 'country-state-city';
import { useTranslation } from 'next-i18next';
import { toast } from "react-toastify";


export default function Careerform() {
  const { t } = useTranslation('common');

  // Get country data using country-state-city library
  let countryData = Country.getAllCountries();

  const [formData, setFormData] = useState({
    position: '',
    fullName: '',
    dob: '',
    gender: '',
    mobileNumber: '',
    passportNumber: '',
    emailAddress: '',
    nationality: '',
    degreeLevel: '',
    careerLevel: '',
    jobDuties: '',
    additionalInfo: '',
    resumeUrl: '',
  });

  const [errMsg, seterrMsg] = useState("*please enter required filed")
  const [valiDateCheck, setvaliDateCheck] = useState(false)
  const [filecheck, setfilecheck] = useState(false)
  const [fileUplodingMsg, setfileUplodingMsg] = useState("")

  // Handler to manage input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler to upload files
  const handleFileUpload = async (files) => {


    setfileUplodingMsg("File Uploding...")
    setfilecheck(true)


    if (files && files.length > 0) {
      const fileData = new FormData();
      fileData.append('media', files[0]);

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/media`, fileData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setfilecheck(false)

        const filePath = `/${response.data.filename}`;

        console.log("file url", filePath)
        setFormData((prevState) => ({
          ...prevState,
          resumeUrl: filePath,
        }));
      } catch (error) {

        setfileUplodingMsg("File uploding failed try again")
        setfilecheck(true)
        console.error('Error in file upload:', error.response ? error.response.data : error.message);

      }
    }


  };


  const handleFileUpload2 = async (files) => {
    if (files && files.length > 0) {
      const fileData = new FormData();
      fileData.append('media', files[0]);

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/media`, fileData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        const filePath = `/${response.data.filename}`;
        setFormData((prevState) => ({
          ...prevState,
          resumeUrl: filePath,
        }));
      } catch (error) {
        console.error('Error in file upload:', error.response ? error.response.data : error.message);
      }
    }
  };


  // Validate form fields before submission
  const validateForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        return `*field ${key} is required`;
      } else if (key == "mobileNumber") {

        if (value.length !== 10) {

          return "Enter valid phone number"
        }
      }
    }

    //  if(formData.mobileNumber.length!==10){

    //      return "Enter valid phone number"
    //  }

    return null;
  };



  // Handler to manage form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before sending
    const errorMessage = validateForm();
    if (errorMessage) {
      seterrMsg(errorMessage)
      setvaliDateCheck(true)
      return;
    }




    try {
      setvaliDateCheck(false)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/careers/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {


        toast.success("Form submitted successfully.", {
          position: "top-center",
          hideProgressBar: true

        });

        setFormData({
          position: '',
          fullName: '',
          dob: '',
          gender: '',
          mobileNumber: '',
          passportNumber: '',
          emailAddress: '',
          nationality: '',
          degreeLevel: '',
          careerLevel: '',
          jobDuties: '',
          additionalInfo: '',
          resumeUrl: '',
        });


      } else {
        const errorData = await response.text();
        console.error('Failed to submit form', response.statusText, errorData);

        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          hideProgressBar: true

        });

        setFormData({
          position: '',
          fullName: '',
          dob: '',
          gender: '',
          mobileNumber: '',
          passportNumber: '',
          emailAddress: '',
          nationality: '',
          degreeLevel: '',
          careerLevel: '',
          jobDuties: '',
          additionalInfo: '',
          resumeUrl: '',
        });

      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        hideProgressBar: true

      });

      setFormData({
        position: '',
        fullName: '',
        dob: '',
        gender: '',
        mobileNumber: '',
        passportNumber: '',
        emailAddress: '',
        nationality: '',
        degreeLevel: '',
        careerLevel: '',
        jobDuties: '',
        additionalInfo: '',
        resumeUrl: '',
      });

    }



  };



  const handleFocus = (e) => {
    if (e.target.type === 'text') {
      e.target.type = 'date';
    }
  };


  return (
    <div   className="contact__form-wrap">
      <form id="contact-form" dir='ltr' onSubmit={handleSubmit}>
        {/* Input fields with onChange handlers */}
        <div className="row">
          {/* Position */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <input
                type="text"
                name="position"
                placeholder={t('Position-Applying-for')}
                value={formData.position}
                onChange={handleChange}

              />
            </div>
          </div>
          {/* Full Name */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <input
                type="text"
                name="fullName"
                placeholder={t("*Full-Name")}
                value={formData.fullName}
                onChange={handleChange}

              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* Date of Birth */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <input
                type="text"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onFocus={handleFocus}
                onChange={handleChange}

              />
            </div>
          </div>
          {/* Gender */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{ color: '#3E4073' }}

              >
                <option value="">{t('Gender')}</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Mobile Number */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <input
                type="number"
                name="mobileNumber"
                placeholder={t("Phone-Number")}
                value={formData.mobileNumber}
                onChange={handleChange}

              />
            </div>
          </div>
          {/* Passport Number */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <input
                type="text"
                name="passportNumber"
                placeholder={t("Passport-Number")}
                value={formData.passportNumber}
                onChange={handleChange}

              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* Email Address */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <input
                type="email"
                name="emailAddress"
                placeholder={t('email')}
                value={formData.emailAddress}
                onChange={handleChange}

              />
            </div>
          </div>
          {/* Nationality */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                style={{ color: '#3E4073' }}

              >
                <option value="">{t('Select-Nationality')}</option>
                {countryData.map((country) => (
                  <option key={country.isoCode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Degree Level */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <select
                name="degreeLevel"
                value={formData.degreeLevel}
                onChange={handleChange}
                style={{ color: '#3E4073' }}

              >
                <option value="">{t('Degree-Level')}</option>
                <option value="High School of Equivalent ">High School of Equivalent </option>
                <option value="Certification">Certification</option>
                <option value="Vocational">Vocational</option>
                <option value="Associated Degree">Associated Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
              </select>
            </div>
          </div>
          {/* Career Level */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <select
                name="careerLevel"
                value={formData.careerLevel}
                onChange={handleChange}
                style={{ color: '#3E4073' }}

              >
                <option value="">{t('Career-Level')}</option>
                <option value="Student">Student</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Career">Mid Career</option>
                <option value="Managment">Managment</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Job Duties */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <textarea
                name="jobDuties"
                placeholder={t('Briefly-describe-your-last-job-duties')}
                value={formData.jobDuties}
                onChange={handleChange}

              />
            </div>
          </div>
          {/* Additional Information */}
          <div className="col-md-6">
            <div className="form-grp">
              <label style={{ color: "red" }} > * </label>
              <textarea
                name="additionalInfo"
                placeholder={t('If-Any-Additional-Information')}
                value={formData.additionalInfo}
                onChange={handleChange}

              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* File Upload */}
          <div className="col-md-6">
            <div className="form-grp">
              <p>{t('Upload-Your-Resume')}</p>
              <label style={{ color: "red" }} > * </label>
              <input
                className='form-control form-control-lg'
                type="file"
                onChange={(e) => handleFileUpload(e.target.files)}
                style={{ color: '#3E4073' }}
                accept=".pdf,.doc,.docx"

              />

              {filecheck && <span> {fileUplodingMsg}   </span>}

            </div>
          </div>
        </div>
        {/* Submit Button */}

        {
          valiDateCheck && <> <span style={{ color: "red" }} > {errMsg}  </span><br /> </>
        }


        <button style={{ marginTop: "10px" }} type="submit" className="btn">{  t('submit') }</button>

      



      </form>
      <p className="ajax-response mb-0" />
    </div>
  );
}
