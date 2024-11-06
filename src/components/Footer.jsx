import React, { useState } from "react";
import axios from "axios";
import { apiBaseUrl } from "../config";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling effect
    });
  };

  // State to store form data
  const [formData, setFormData] = useState({
    email: ""
  });

  // State to store errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    try {
        const response = await axios.post(`${ apiBaseUrl }/newsletter`, formData);
        if (response.status === 201) {
            alert("Form submitted successfully!");
        }
    } catch (error) {
        console.error("Error submitting the form", error);
        alert("There was an error submitting the form.");
    }
  };

  return (
    // <footer className="w-full px-5 lg:px-10 h-screen bg-black absolute flex flex-col justify-between">
    <footer className="w-full px-5 lg:px-10 h-screen bg-black flex flex-col justify-between">

      <div className="foot-note flex lg:flex-row flex-col w-full justify-start gap-[30px] lg:gap-[470px] mt-[40px] lg:mt-[72px]">
        <p className="text-white font-subHeading hover:underline cursor-pointer text-"
          onClick={scrollToTop}>
          Back to top
        </p>
        <div className="flex flex-col">
          <h1 className="font-subHeading text-white text-[40px] leading-[45px] tracking-[-3%] font-light lg:text-[52px] lg:w-[600px] lg:leading-[60px] w-600px">
            Be the first to know about our events and product updates.
            <span className="font-heading text-red"> #nospam</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="inputs flex flex-col lg:flex-row gap-4 mt-6 font-subHeading font-normal">
              <div>
                <input 
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-full lg:w-[320px] h-[42px] text-white text-[14px] rounded-md bg-[#292929] border-2 border-[#576275] focus-visible:border-y-white"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                /> <br />
                {errors.email && <span className="text-red">{errors.email}</span>}
              </div>

              <button type="submit" className="w-full lg:w-[100px] h-[42px] rounded-md bg-red text-white text-[14px] hover:underline">
                OK
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-links max-w-[90rem] mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mb-4">
        <img src="/logos/navLogo.png" alt="soujanya-logo" className="w-[120px] lg:w-auto" />
        <nav className="text-white flex flex-row lg:flex-row gap-10 lg:gap-20 text-base">
          <a href="#">Privacy Policy</a>
          <a href="#">Products</a>
          <a href="#">Applications</a>
        </nav>
        <p className="text-white lg:mt-0">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
