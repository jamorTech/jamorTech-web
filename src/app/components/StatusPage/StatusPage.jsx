"use client";
import React, { useState } from "react";
import styles from "./StatusPage.module.css";
import logo from "../../../../public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter, FaFacebook, FaLinkedin} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const StatusPage = ({status="This page is under construction"}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required.");
      return
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return
    } else {
      setError("");
      // Submit form logic here
      console.log("Email submitted:", email);
    }
  };

  const socialLinks = [
    {href: "https://x.com/JamorTech", icon: <FaSquareXTwitter />},
    {href: "https://www.facebook.com/JamorTechnology?mibextid=ZbWKwL", icon: <FaFacebook />},
    {href: "https://youtube.com/@jamortechnology?si=T4DHUWjPCZFRRvta", icon: <FaYoutube />},
    {href: "https://www.linkedin.com/company/jamor-technology/", icon: <FaLinkedin />},
    {href: "https://www.instagram.com/jamor_tech?igsh=MTJoODRvcXBwOWhubw==", icon: <RiInstagramFill />},
    ]

  return (
    <div className={styles.container}>
    
      <section className={styles.StatusPageContainer}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={500} height={100} />
          </Link>
        </div>
        <h2>{status}</h2>
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mail Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>SignUp</button>
            </form>
            {error && <small className={styles.error}>{error}</small>}
        </div>
        <div className={styles.social_icons}>
            {socialLinks.map((links,index)=>(
                <Link target="_blank" href={links.href} key={index}>
                    {links.icon}
                </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default StatusPage;
