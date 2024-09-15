// src/components/DynamicForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./DynamicForm.css"; // Import external CSS file for additional styling

function DynamicForm() {
  const { formType } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    countryCode: "",
    phoneNumber: "",
    formType,
  });
  const [errors, setErrors] = useState({});
  const [countryCodes, setCountryCodes] = useState(["+1", "+91", "+44", "+61"]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      formType,
    }));

    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData && savedData.formType === formType) {
      setFormData(savedData);
    }
  }, [formType]);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = /^[A-Za-z ]+$/.test(formData.name)
      ? ""
      : "Name should contain only alphabetic characters.";
    tempErrors.countryCode = formData.countryCode
      ? ""
      : "Country code is required.";
    tempErrors.phoneNumber = /^[0-9]+$/.test(formData.phoneNumber)
      ? ""
      : "Phone number should contain only numbers.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      try {
        await axios.post("http://localhost:5000/api/forms/submit", formData);
        alert("Form submitted successfully!");
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Form {formType}</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "form-input-error" : ""}`}
          />
          <div className="form-error">{errors.name}</div>
        </div>
        <div className="form-group">
          <label className="form-label">Country Code:</label>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className={`form-select ${
              errors.countryCode ? "form-select-error" : ""
            }`}
          >
            <option value="">Select Country Code</option>
            {countryCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <div className="form-error">{errors.countryCode}</div>
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`form-input ${
              errors.phoneNumber ? "form-input-error" : ""
            }`}
          />
          <div className="form-error">{errors.phoneNumber}</div>
        </div>
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;
