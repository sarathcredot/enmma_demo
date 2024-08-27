'use client'; // Mark this component as a client-side component

import { useState } from 'react';
import axios from 'axios';

export default function Careerform() {
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

  // Handler to manage input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler to upload files
  const handleFileUpload = async (files) => {
    if (files && files.length > 0) {
      const fileData = new FormData();
      fileData.append('media', files[0]);

      try {
        const response = await axios.post('${process.env.NEXT_PUBLIC_BASE_URL}/media', fileData, {
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
        return `Field ${key} is required`;
      }
    }
    return null;
  };

  // Handler to manage form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before sending
    const errorMessage = validateForm();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    try {
      const response = await fetch('${process.env.NEXT_PUBLIC_BASE_URL}/careers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully');
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
        alert('Failed to submit form: ' + errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="contact__form-wrap">
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* Input fields with onChange handlers */}
        <div className="row">
          {/* Position */}
          <div className="col-md-6">
            <div className="form-grp">
              <input
                type="text"
                name="position"
                placeholder="Position Applying for"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Full Name */}
          <div className="col-md-6">
            <div className="form-grp">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* Date of Birth */}
          <div className="col-md-6">
            <div className="form-grp">
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Gender */}
          <div className="col-md-6">
            <div className="form-grp">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{ color: '#3E4073' }}
                required
              >
                <option value="">Gender</option>
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
              <input
                type="text"
                name="mobileNumber"
                placeholder="Phone Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Passport Number */}
          <div className="col-md-6">
            <div className="form-grp">
              <input
                type="text"
                name="passportNumber"
                placeholder="Passport Number"
                value={formData.passportNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* Email Address */}
          <div className="col-md-6">
            <div className="form-grp">
              <input
                type="email"
                name="emailAddress"
                placeholder="Email"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Nationality */}
          <div className="col-md-6">
            <div className="form-grp">
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                style={{ color: '#3E4073' }}
                required
              >
                <option value="">Select Nationality</option>
                <option value="AAA">AAA</option>
                <option value="BBBB">BBBB</option>
                <option value="CCCC">CCCC</option>
                <option value="DDDD">DDDD</option>
                <option value="SSSSS">SSSSS</option>
                <option value="FFFFF">FFFFF</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Degree Level */}
          <div className="col-md-6">
            <div className="form-grp">
              <select
                name="degreeLevel"
                value={formData.degreeLevel}
                onChange={handleChange}
                style={{ color: '#3E4073' }}
                required
              >
                <option value="">Degree Level</option>
                <option value="AAA">AAA</option>
                <option value="BBBB">BBBB</option>
                <option value="CCCC">CCCC</option>
                <option value="DDDD">DDDD</option>
                <option value="SSSSS">SSSSS</option>
                <option value="FFFFF">FFFFF</option>
              </select>
            </div>
          </div>
          {/* Career Level */}
          <div className="col-md-6">
            <div className="form-grp">
              <select
                name="careerLevel"
                value={formData.careerLevel}
                onChange={handleChange}
                style={{ color: '#3E4073' }}
                required
              >
                <option value="">Career Level</option>
                <option value="AAA">AAA</option>
                <option value="BBBB">BBBB</option>
                <option value="CCCC">CCCC</option>
                <option value="DDDD">DDDD</option>
                <option value="SSSSS">SSSSS</option>
                <option value="FFFFF">FFFFF</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Job Duties */}
          <div className="col-md-6">
            <div className="form-grp">
              <textarea
                name="jobDuties"
                placeholder="Briefly Describe your Last Job Duties"
                value={formData.jobDuties}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Additional Information */}
          <div className="col-md-6">
            <div className="form-grp">
              <textarea
                name="additionalInfo"
                placeholder="If Any Additional Information"
                value={formData.additionalInfo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* File Upload */}
          <div className="col-md-6">
            <div className="form-grp">
              <p>Upload Your Resume (pdf or docx only)</p>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e.target.files)}
                style={{ color: '#3E4073' }}
                required
              />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn">Submit</button>
      </form>
      <p className="ajax-response mb-0" />
    </div>
  );
}
