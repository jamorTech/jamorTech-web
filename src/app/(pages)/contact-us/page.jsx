"use client";
import React, { useEffect, useState, useCallback } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { userStore } from "@/app/store/userStore";
import axios from "@/app/api/axios";
import { FiMessageSquare } from "react-icons/fi";

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
    setSuccessMessage("");
    setErrors({});
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);

      // Axios POST request
      const response = await axios.post(`/users/feedback`, {
        firstName,
        lastName,
        email,
        message,
      });

      // Handle success
      if (response.status === 200) {
        setSuccessMessage("Thank you for your feedback!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setErrors({});
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        setErrors({ form: error.response.data?.error || "Something went wrong. Please try again." });
      } else if (error.request) {
        setErrors({ form: "No response from server. Please try again later." });
      } else {
        setErrors({ form: "An unexpected error occurred. Please try again later." });
      }
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
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#2E1065] rounded-lg p-3 text-white">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E1065] mb-2">Phone</h3>
                <p className="text-gray-600">+234 8027703576</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#2E1065] rounded-lg p-3 text-white">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E1065] mb-2">Email</h3>
                <p className="text-gray-600">helpdesk@jamortechnology.com</p>
                <p className="text-gray-600">hellojamortechnology@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#2E1065] rounded-lg p-3 text-white">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E1065] mb-2">Address</h3>
                <p className="text-gray-600">Virtual</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#2E1065] rounded-lg p-3 text-white">
                <FaClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2E1065] mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-4 h-64 relative overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.953166004527!2d-122.08424968468136!3d37.42199957982509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba4dfce1b8d5%3A0xbfbf6c4b1517a469!2sGoogleplex!5e0!3m2!1sen!2sus!4v1639245142053!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
</div>

        </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2E1065] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange(setFirstName)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E1065] focus:border-transparent"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange(setLastName)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E1065] focus:border-transparent"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E1065] focus:border-transparent"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleInputChange(setMessage)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E1065] focus:border-transparent"
                />
                </div>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {errors.form && <p className="text-red-500 text-sm mt-1">{errors.form}</p>}

              <button
                type="submit"
                className="w-full bg-[#2E1065] text-white py-3 px-6 rounded-lg hover:bg-[#4C1D95] transition-colors duration-300 flex items-center justify-center space-x-2"
                disabled={isLoading}
              >
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
