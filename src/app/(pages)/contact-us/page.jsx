"use client";
import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { userStore } from "@/app/store/userStore";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { openModal, closeModal } = userStore();

  const validateForm = useCallback(() => {
    let validationErrors = {};
    if (!firstName.trim()) validationErrors.firstName = "First name is required.";
    if (!lastName.trim()) validationErrors.lastName = "Last name is required.";
    if (!email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email address is invalid.";
    }
    if (!message.trim()) validationErrors.message = "Message is required.";
    return validationErrors;
  }, [firstName, lastName, email, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Thank you for your feedback!");
        // Clear form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        const errorData = await response.json();
        setErrors({ form: errorData.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setErrors({ form: "Network error. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    closeModal();
    if (successMessage) openModal(successMessage, "success");
  }, [successMessage, openModal, closeModal]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    // Clear the error for this field when the user starts typing
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} noValidate className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-950">Contact Us</h1>
        {isLoading && <div className="loader w-6 h-6 border-t-2 border-purple-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>}
        {errors.form && <p className="text-red-500 text-sm mb-4 text-center" role="alert">{errors.form}</p>}
        <div className="space-y-4">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <div className="relative">
              <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="first_name"
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleInputChange(setFirstName)}
                className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-950 focus:border-purple-950"
                aria-invalid={errors.firstName ? "true" : "false"}
              />
            </div>
            {errors.firstName && <small className="text-red-500 text-xs mt-1" role="alert">{errors.firstName}</small>}
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <div className="relative">
              <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="last_name"
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleInputChange(setLastName)}
                className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                aria-invalid={errors.lastName ? "true" : "false"}
              />
            </div>
            {errors.lastName && <small className="text-red-500 text-xs mt-1" role="alert">{errors.lastName}</small>}
          </div>
          <div>
            <label htmlFor="mail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="mail"
                name="email"
                type="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                aria-invalid={errors.email ? "true" : "false"}
              />
            </div>
            {errors.email && <small className="text-red-500 text-xs mt-1" role="alert">{errors.email}</small>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange(setMessage)}
                className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 h-32"
                aria-invalid={errors.message ? "true" : "false"}
              />
            </div>
            {errors.message && <small className="text-red-500 text-xs mt-1" role="alert">{errors.message}</small>}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 w-full bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-150 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="btnLoader w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
          ) : (
            <>
              Contact Us
              <FaLongArrowAltRight className="ml-2" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;

