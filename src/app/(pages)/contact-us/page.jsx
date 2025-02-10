"use client";
import React, { useEffect, useState, useCallback } from "react";
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import axios from "@/app/api/axios";
import { FiMessageSquare } from "react-icons/fi";
import { useUserStore } from "@/app/store/useUserStore";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { openModal, closeModal } = useUserStore();

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
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1 className={styles.heading}>Contact Us</h1>
          <p className={styles.subHeading}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {/* Contact Information */}
          <div className={styles.contactSection}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <FaPhone className={styles.icon} />
                </div>
                <div className={styles.infoContent}>
                  <h3>Phone</h3>
                  <p>+234 8027703576</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <FaEnvelope className={styles.icon} />
                </div>
                <div className={styles.infoContent}>
                  <h3>Email</h3>
                  <p>helpdesk@jamortechnology.com</p>
                  <p>hellojamortechnology@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>
                <div className={styles.infoContent}>
                  <h3>Address</h3>
                  <p>Virtual</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <FaClock className={styles.icon} />
                </div>
                <div className={styles.infoContent}>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
            </div>

            {/* <div className={styles.mapContainer}>
              <iframe
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.953166004527!2d-122.08424968468136!3d37.42199957982509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba4dfce1b8d5%3A0xbfbf6c4b1517a469!2sGoogleplex!5e0!3m2!1sen!2sus!4v1639245142053!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <h2 className={styles.formHeading}>Send us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange(setFirstName)}
                  className={styles.input}
                />
                {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="lastName" className={styles.label}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange(setLastName)}
                  className={styles.input}
                />
                {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange(setEmail)}
                  className={styles.input}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <div className={styles.textareaContainer}>
                  <FiMessageSquare className={styles.textareaIcon} aria-hidden="true" />
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleInputChange(setMessage)}
                    rows="4"
                    className={styles.textarea}
                  />
                </div>
                {errors.message && <p className={styles.error}>{errors.message}</p>}
              </div>

              {errors.form && <p className={styles.error}>{errors.form}</p>}

              <button
                type="submit"
                className={styles.button}
                disabled={isLoading}
              >
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
                <FaPaperPlane className={styles.buttonIcon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;