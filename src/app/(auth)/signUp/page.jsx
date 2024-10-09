"use client"
import React, { useState } from 'react'
import styles from "./signup.module.css"
import onboardingSvg from "../../../../public/assets/svgs/OnboardingAmico.svg"
import Image from 'next/image'
import { IoMdClose } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { PiLockThin } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaCloudUploadAlt, FaLongArrowAltRight } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import Link from 'next/link'

const page = () => {

  const [formType, setFormType] = useState("Interns")
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  // Validation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [techSchool, setTechSchool] = useState("");
  const [skill, setSkill] = useState("");
  const [certificate, setCertificate] = useState("");
  const [onboardMesg, setOnboardMesg] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessBrand, setBusinessBrand] = useState("");
  const [whatWeCanOffer, setWhatWeCanOffer] = useState("");
  const [checkBox, setCheckBox] = useState("");
  
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
    if (!username) validationErrors.username = "Username is required.";
    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }
    if (!checkBox) validationErrors.checkBox = "Make sure you go through our terms and conditions.";

    if (formType === "Interns") {
      if (!phone) {
        validationErrors.phone = "Phone number is required.";
      } else if (typeof(phone) !== Number) {
        validationErrors.phone = "Input format should be number";
      } else if (phone.length < 11) {
        validationErrors.phone = "Expecting up to 11 digits";
      }
      if (!techSchool) validationErrors.techSchool = "Tech school is required.";
      if (!skill) validationErrors.skill = "Skill is required.";
      if (!certificate) validationErrors.certificate = "Certificate is required.";
      if (!onboardMesg) validationErrors.onboardMesg = "On boarding message is required.";
    }
    
    if (formType === "Company") {
      if (!businessName) validationErrors.businessName = "Business name is required.";
      if (!businessBrand) validationErrors.businessBrand = "Business brand is required.";
      if (!whatWeCanOffer) validationErrors.whatWeCanOffer = "What Can We Offer You field is required.";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted successfully!");
      // Clear form fields
      setFirstName
      setLastName("")
      setPhone("")
      setEmail("")
      setUsername("")
      setPassword("")
      setConfirmPassword("")
      setTechSchool("")
      setSkill("")
      setCertificate("")
      setOnboardMesg("")
      setBusinessName("")
      setBusinessBrand("")
      setWhatWeCanOffer("")
      setCheckBox("")
      setErrors({});
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.img_conainer}>
        <Image
            src={onboardingSvg}
            width={800}
            height={500}
            alt='signUp-img'
        />
      </div>
      <div className={styles.form_container}>
        <div className={styles.page_title}>
          <IoMdClose 
            className={styles.closeIcon}
            onClick={()=>history.back()}
        
          />
          <h2 className={styles.title}>Sign Up</h2>
        </div>
        <div className={styles.page_nav}>
          <span className={`${styles.interns} ${formType === "Interns" ? styles.active:""}`} 
            onClick={()=>setFormType("Interns")}>Interns</span>
          <span className={`${styles.company} ${formType === "Company" ? styles.active:""}`} 
            onClick={()=>setFormType("Company")}>Company</span>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_section}>
                <label htmlFor="first_name">First Name</label>
                <div>
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
            {formType === "Company" && <><div className={styles.input_section}>
                <label htmlFor="Business_name">Business Name</label>
                <div>
                  <div className={styles.input}>
                      <AiOutlineUser className={`${styles.userIcon} ${styles.icon}`}/>
                      <input type="text" 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                  </div>
                  {errors.businessName && <small className={styles.error}>{errors.businessName}</small>}
                </div>
            </div>
            <div className={styles.input_section}>
                <label htmlFor="Business_brand">Business  Brand</label>
                <div>
                  <div className={styles.input}>
                      <AiOutlineUser className={`${styles.userIcon} ${styles.icon}`}/>
                      <input type="text" 
                        value={businessBrand}
                        onChange={(e) => setBusinessBrand(e.target.value)}
                      />
                  </div>
                  {errors.businessBrand && <small className={styles.error}>{errors.businessBrand}</small>}
                </div>
            </div></>}
            {formType === "Interns" && <div className={styles.input_section}>
                <label htmlFor="phone">Mobile Number</label>
                <div>
                  <div className={styles.input}>
                      <HiOutlineDevicePhoneMobile className={styles.icon}/>
                      <input type="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                  </div>
                  {errors.phone && <small className={styles.error}>{errors.phone}</small>}
                </div>
            </div>}
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
                <label htmlFor="username">Username</label>
                <div>
                  <div className={styles.input}>
                      <AiOutlineUser className={styles.icon}/>
                      <input type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                  </div>
                  {errors.username && <small className={styles.error}>{errors.username}</small>}
                </div>
            </div>
            <div className={styles.input_section}>
                <label htmlFor="password">Password</label>
                <div>
                  <div className={styles.input}>
                      <PiLockThin className={styles.icon}/>
                      <input type={`${passwordVisible?"text":"password"}`} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {passwordVisible ? <FiEye className={`${styles.icon} ${styles.passwordIcon}`} 
                        onClick={()=>setPasswordVisible(prev=>!prev)}/>:
                        <IoEyeOffOutline className={`${styles.icon} ${styles.passwordIcon}`} 
                          onClick={()=>setPasswordVisible(prev=>!prev)}/>}
                  </div>
                  {errors.password && <small className={styles.error}>{errors.password}</small>}
                </div>
            </div>
            <div className={styles.input_section}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div>
                  <div className={styles.input}>
                      <PiLockThin className={styles.icon}/>
                      <input type={`${confirmPasswordVisible?"text":"password"}`} 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {confirmPasswordVisible ? <FiEye className={`${styles.icon} ${styles.passwordIcon}`} 
                        onClick={()=>setConfirmPasswordVisible(prev=>!prev)}/>:
                        <IoEyeOffOutline className={`${styles.icon} ${styles.passwordIcon}`}
                          onClick={()=>setConfirmPasswordVisible(prev=>!prev)}/>}
                  </div>
                  {errors.confirmPassword && <small className={styles.error}>{errors.confirmPassword}</small>}
                </div>
              </div>
              {formType === "Company" && <div className={styles.input_section}>
                <label htmlFor="offer">What Can We Offer You</label>
                <div>
                  <div className={styles.input}>
                      <AiOutlineUser className={`${styles.userIcon} ${styles.icon}`}/>
                      <input type="text" 
                        value={whatWeCanOffer}
                        onChange={(e) => setWhatWeCanOffer(e.target.value)}
                      />
                  </div>
                  {errors.whatWeCanOffer && <small className={styles.error}>{errors.whatWeCanOffer}</small>}
                </div>
              </div>}
                {formType === "Interns" && <><div className={styles.input_section}>
                  <label htmlFor="tech-school">Tech school you graduated from</label>
                  <div>
                  <div className={styles.input}>
                      <IoSchoolOutline className={styles.icon}/>
                      <input type="text" 
                        value={techSchool}
                        onChange={(e) => setTechSchool(e.target.value)}
                      />
                  </div>
                  {errors.techSchool && <small className={styles.error}>{errors.techSchool}</small>}
                  </div>
                </div>
                <div className={styles.input_section}>
                  <label htmlFor="skill">Tech Skill</label>
                  <div>
                    <div className={styles.input}>
                        <BsBarChart className={styles.icon}/>
                        <input type="text" 
                          value={skill}
                          onChange={(e) => setSkill(e.target.value)}
                        />
                    </div>
                    {errors.skill && <small className={styles.error}>{errors.skill}</small>}
                  </div>
                </div>
                <div className={styles.input_section}>
                  <label htmlFor="certificate">Certificate Earn</label>
                  <div>
                    <div className={styles.input}>
                        <LiaCertificateSolid className={styles.icon}/>
                        <input type="file" placeholder="Upload your certificate (.pdf)"
                          value={certificate}
                          onChange={(e) => setCertificate(e.target.value)}
                        />
                        <FaCloudUploadAlt className={`${styles.icon} ${styles.isGrey}`}/>
                    </div>
                    <small className={styles.isGrey}><GoAlertFill /> Max file size is 5MB</small> <br />
                    {errors.certificate && <small className={styles.error}>{errors.certificate}</small>}
                  </div>
                </div>
                <div className={styles.input_section}>
                  <label htmlFor="onBoard">Why should We Onboard You?</label>
                  <div>
                    <div className={`${styles.input} ${styles.textInput}`}>
                        <textarea type="text" 
                          value={onboardMesg}
                          onChange={(e) => setOnboardMesg(e.target.value)}
                        />
                    </div>
                    <small className={styles.isGrey}><GoAlertFill /> 50 words max.</small> <br />
                    {errors.onboardMesg && <small className={styles.error}>{errors.onboardMesg}</small>}
                  </div>
                </div></>}
                
                <div>
                  <div className={styles.terms_policy}>
                    <input type="checkBox"
                      value={checkBox}
                      onChange={(e) => setCheckBox(e.target.value)}
                    />
                    <small>I Agree To The <Link href={"/terms"}>Terms And Conditions</Link> And <Link href={"/policy"}>Privacy Policy</Link></small>
                  </div>
                  {errors.checkBox && <small className={styles.error}>{errors.checkBox}</small>}
                </div>
            <button className={styles.signUp}>Sign Up <FaLongArrowAltRight /></button>
            <p className={styles.have_acct}>Already have an account?<Link href={"/login"}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default page
