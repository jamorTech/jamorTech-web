"use client"
import React, { useState } from 'react'
import styles from "./ContactUs.module.css"
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaLongArrowAltRight } from 'react-icons/fa';

const ContactUs = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

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

        return validationErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          // Proceed with form submission (e.g., API call)
          console.log("Form submitted successfully!");
          // Clear form fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setErrors({});
        }
    }

  return (
    <section className={styles.contactUs}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div className={styles.inputs_container}>
            <div className={styles.input_section}>
                <label htmlFor="first_name">First Name</label>
                <div className={styles.check}>
                  <div className={styles.input}>
                      <AiOutlineUser className={`${styles.userIcon} ${styles.icon}`}/>
                      <input type="text" 
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
                      <AiOutlineUser className={`${styles.userIcon} ${styles.icon}`}/>
                      <input type="text" 
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
                      <CiMail className={styles.icon}/>
                      <input type="email" 
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
                        <FiMessageSquare className={styles.icon}/>
                        <input type='text' 
                           value={message}
                           onChange={(e) => setMessage(e.target.value)} 
                        />
                    </div>
                    {errors.message && <small className={styles.error}>{errors.message}</small>}
                </div>
            </div>
        </div>
        <button className={styles.contact_us_btn}>Contact Us<FaLongArrowAltRight /></button>
      </form>
    </section>
  )
}

export default ContactUs
