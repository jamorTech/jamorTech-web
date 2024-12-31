"use client";
import React, { useEffect, useState } from "react";
import styles from "./ContactUs.module.css";
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
  const [isLoading, setisLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let validationErrors = {};
    if (!firstName) validationErrors.firstName = "First name is required.";
    if (!lastName) validationErrors.lastName = "Last name is required.";
    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email address is invalid.";
    }
    if (!message) validationErrors.message = "Message is required.";
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setisLoading(true)
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
        setisLoading(false)
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
        setisLoading(false)
      }
    } catch (error) {
      setErrors({ form: "Network error. Please try again later." });
    }finally{
      setisLoading(false)
    }
  };

  const {openModal, closeModal} = userStore()
  
    useEffect(() => {
      closeModal()
      if (successMessage) openModal(successMessage, "success");
    }, [successMessage]);

  return (
    <section className={styles.contactUs}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        {isLoading && <div className="loader"></div>}
        {errors.form && <p className={styles.error}>{errors.form}</p>}
        <div className={styles.inputs_container}>
          <div className={styles.input_section}>
            <label htmlFor="first_name">First Name</label>
            <div className={styles.check}>
              <div className={styles.input}>
                <AiOutlineUser className={`${styles.userIcon} ${styles.icon}`} />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              {errors.firstName && <small className={styles.error}>{errors.firstName}</small>}
            </div>
          </div>
          <div className={styles.input_section}>
            <label htmlFor="last_name">Last Name</label>
            <div>
              <div className={styles.input}>
                <AiOutlineUser className={`${styles.userIcon} ${styles.icon}`} />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              {errors.lastName && <small className={styles.error}>{errors.lastName}</small>}
            </div>
          </div>
          <div className={styles.input_section}>
            <label htmlFor="mail">Email</label>
            <div>
              <div className={styles.input}>
                <CiMail className={styles.icon} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <small className={styles.error}>{errors.email}</small>}
            </div>
          </div>
          <div className={styles.input_section}>
            <label htmlFor="message">Message</label>
            <div>
              <div className={styles.input}>
                <FiMessageSquare className={styles.icon} />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {errors.message && <small className={styles.error}>{errors.message}</small>}
            </div>
          </div>
        </div>
        <button className={styles.contact_us_btn}>
          {isLoading ? <div className="btnLoader"></div>: "Contact Us"}
          {!isLoading && <FaLongArrowAltRight />}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
