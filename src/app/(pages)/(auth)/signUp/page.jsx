"use client"
import React, { useEffect, useState } from 'react'
import styles from "./signup.module.css"
import onboardingSvg from "../../../../../public/assets/svgs/OnboardingAmico.svg"
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
import Form from './form/Form'
import { Input, TextArea } from './form/input/Input'
import useSignUp from '@/app/hooks/useSignUp'
import { userStore } from '@/app/store/userStore'

const page = () => {

  const [userType, setUserType] = useState("intern")
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [errors, setErrors] = useState({});
  const [fileErr, setFileErr] = useState(null);
  const [fileChange, setFileChange] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [formData, setFormData] = useState({
    userType,
    fullName:"",
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    username:"",
    password:"",
    confirmPassword:"",
    techSchool:"",
    skill:"",
    certificate: null,
    onboardMesg:"",
    businessName:"",
    businessBrand:"",
    whatWeCanOffer:"",
  });

  const resetFormData = () => {
    setFormData({
      userType,
      fullName: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      techSchool: "",
      skill: "",
      certificate: null,
      onboardMesg: "",
      businessName: "",
      businessBrand: "",
      whatWeCanOffer: "",
    });
    setSelectedFileName(""); // Reset the selected file name
  };

  const handleuserTypeChange = (type) => {
    setUserType(type);  // Set the selected form type
  };

  useEffect(() => {
    resetFormData();
  }, [userType]);

// Utility functions for validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+?[0-9]{10,14}$/;
  return phoneRegex.test(phone);
};

const validatePassword = (password) => {
  return password.length >= 8;  // Example: password should be at least 8 characters long
};

// Function to validate each step's inputs
const validateStep = (step) => {
let stepErrors = {};

  if (userType === "intern") {
    if (step === 1) {
      if (!formData.firstName) stepErrors.firstName = "First name is required";
      if (!formData.lastName) stepErrors.lastName = "Last name is required";
      if (formData.phone.length < 10) stepErrors.phone = "Phone digits should be more than 9";
      if (!validatePhone(formData.phone)) stepErrors.phone = "Enter a valid phone number";
      if (!formData.phone) stepErrors.phone = "Phone number is required";
      if (!validateEmail(formData.email)) stepErrors.email = "Enter a valid email";
    } else if (step === 2) {
      if (!formData.techSchool) stepErrors.techSchool = "Tech school is required";
      if (!formData.skill) stepErrors.skill = "Tech skill is required";
      if (!formData.certificate) stepErrors.certificate = "PDF file is required for certificate";
      if (!formData.onboardMesg || formData.onboardMesg.length > 50) 
        stepErrors.onboardMesg = "Onboarding message must be within 50 words";
    } else if (step === 3) {
      if (!formData.username) stepErrors.username = "Username is required";
      if (!formData.password) stepErrors.password = "Password is required";
      if (!formData.confirmPassword) stepErrors.confirmPassword = "Confirm password is required";
      if (!validatePassword(formData.password)) stepErrors.password = "At least 8 characters required";
      if (formData.password !== formData.confirmPassword) stepErrors.confirmPassword = "Passwords do not match";
    }
  } else if (userType === "company") {
    if (!formData.fullName) stepErrors.fullName = "Full name is required";
    if (!formData.username) stepErrors.username = "Username is required";
    if (!formData.businessName) stepErrors.businessName = "Business name is required";
    if (!formData.businessBrand) stepErrors.businessBrand = "Business brand is required";
    if (!validateEmail(formData.email)) stepErrors.email = "Enter a valid email";
    if (!formData.whatWeCanOffer) stepErrors.whatWeCanOffer = "What we can offer is required";
    if (!formData.password) stepErrors.password = "Password is required";
    if (!formData.confirmPassword) stepErrors.confirmPassword = "Confirm password is required";
    if (!validatePassword(formData.password)) stepErrors.password = "At least 8 characters required";
    if (formData.password !== formData.confirmPassword) stepErrors.confirmPassword = "Passwords do not match";
  }

  return stepErrors;
};


// Handle input change with sanitization
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  if (errors[name]) {
    setErrors((prevErrors) => {
      const { [name]: _, ...rest } = prevErrors;
      return rest;
    });
  }
};

const handleFileChange = (e) => {
  setFileChange(prev=>!prev)
  setFileErr("")
  setErrors(prevErrors => ({
    ...prevErrors,
    certificate: ""  // Correct way to update the certificate field
  }));
  
  
  const file = e.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB

    // Validate file extension
    if (fileExtension !== 'pdf') {
      setFileErr('Only PDF files are allowed!');
      resetFileInput(); // Reset the file input
      return;
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
      setFileErr('File size must not exceed 5MB!');
      resetFileInput(); // Reset the file input
      return;
    }

    // Valid file
    setFormData({ ...formData, certificate: file }); // Store the file in state
    setSelectedFileName(file.name); // Set the selected file name
  } else {
    resetFileInput(); // Reset if no file is selected
  }
};

// Helper function to reset the file input
const resetFileInput = () => {
  setFormData({ ...formData, certificate: null });
  setSelectedFileName('');
};



// Move to next step with validation
const nextStep = () => {
  const stepErrors = validateStep(currentStep);
  if (Object.keys(stepErrors).length === 0) {
    setCurrentStep(currentStep + 1);
    setErrors({});
  } else {
    setErrors(stepErrors);
  }
};

const prevStep = () => {
  resetFileInput();  // Clear file input if necessary
  setCurrentStep(currentStep - 1);
};
  const {err, isLoading, msg, signUp} = useSignUp(`${process.env.NEXT_PUBLIC_BASE_URL}/users/signup`)
// Example handleSubmit function
const handleSubmit = async(e) => {
  e.preventDefault();
  const stepErrors = validateStep(currentStep);
  if (Object.keys(stepErrors).length === 0) {
  // Submit form logic
  await signUp(formData)
  } else {
    setErrors(stepErrors);
  }
};

const {openModal, closeModal} = userStore()
    
useEffect(() => {
  closeModal()
  if (err) openModal(err, "error");
  if (fileErr) openModal(fileErr, "error");
  if (msg) openModal(msg, "success");
}, [err, msg, fileErr, fileChange]);

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
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
        {isLoading && <div className="loader"></div>}
        <div className={styles.page_nav}>
          <span 
            className={`${styles.interns} ${userType === "intern" ? styles.active : ""}`} 
            onClick={() => handleuserTypeChange("intern")}
          >
            Interns
          </span>
          
          <span 
            className={`${styles.company} ${userType === "company" ? styles.active : ""}`} 
            onClick={() => handleuserTypeChange("company")}
          >
            Company
          </span>
        </div>
        <p className={styles.have_acct}>Already have an account?<Link href={"/login"}>Login</Link></p>
        {userType === "company" && <Form
          handleSubmit={handleSubmit}
          FormInput={[
            <Input
              title={"Full Name (Surname First)"}
              icon={<AiOutlineUser />}
              name={"fullName"}
              type={"text"}
              value={formData?.fullName}
              err={errors.fullName}
              handleInputChange={handleInputChange}
            />,
            <Input
                title={"Username"}
                icon={<AiOutlineUser />}
                name={"username"}
                type={"text" }
                value={formData?.username}
                err={errors.username}
                handleInputChange={handleInputChange}
              />,
            <Input
                title={"Business Name"}
                icon={<AiOutlineUser />}
                name={"businessName"}
                type={"text" }
                value={formData?.businessName}
                err={errors.businessName}
                handleInputChange={handleInputChange}
              />,
            <Input
                title={"Business Brand"}
                icon={<AiOutlineUser />}
                name={"businessBrand"}
                type={"text" }
                value={formData?.businessBrand}
                err={errors.businessBrand}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Email"}
                icon={<CiMail />}
                name={"email"}
                type={"email"}
                value={formData?.email}
                err={errors.email}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"What can we offer"}
                name={"whatWeCanOffer"}
                type={"text"}
                value={formData?.whatWeCanOffer}
                err={errors.whatWeCanOffer}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Password"}
                icon={<PiLockThin />}
                name={"password"}
                type={passwordVisible ? "text" : "password"}
                secondaryIcon={passwordVisible ? 
                  <IoEyeOffOutline onClick={()=>setPasswordVisible(prev=>!prev)}/> :
                  <FiEye onClick={()=>setPasswordVisible(prev=>!prev)} />}
                value={formData?.password}
                err={errors.password}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Confirm Password"}
                icon={<PiLockThin />}
                name={"confirmPassword"}
                type={confirmPasswordVisible ? "text" : "password"}
                secondaryIcon={confirmPasswordVisible ? 
                  <IoEyeOffOutline onClick={()=>setConfirmPasswordVisible(prev=>!prev)}/> :
                  <FiEye onClick={()=>setConfirmPasswordVisible(prev=>!prev)} />}
                value={formData?.confirmPassword}
                err={errors.confirmPassword}
                handleInputChange={handleInputChange}
              />,
          ]}
        />}
        {userType === "intern" && <Form
          handleSubmit={handleSubmit}
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          FormInput={
            currentStep === 1 ? [
              // Step 1 inputs
              <Input
                title={"First Name"}
                icon={<AiOutlineUser />}
                name={"firstName"}
                type={"text"}
                value={formData?.firstName}
                err={errors.firstName}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Last Name"}
                icon={<AiOutlineUser />}
                name={"lastName"}
                type={"text"}
                value={formData?.lastName}
                err={errors.lastName}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Mobile Number"}
                icon={<HiOutlineDevicePhoneMobile />}
                name={"phone"}
                type={"tel"}
                value={formData?.phone}
                err={errors.phone}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Email"}
                icon={<CiMail />}
                name={"email"}
                type={"email"}
                value={formData?.email}
                err={errors.email}
                handleInputChange={handleInputChange}
              />
            ] 
            :
            currentStep === 2 ? [
              // Step 2 inputs
              <Input
                title={"Tech school you graduated from"}
                icon={<IoSchoolOutline />}
                name={"techSchool"}
                type={"text"}
                value={formData?.techSchool}
                err={errors.techSchool}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Tech Skill"}
                icon={<BsBarChart />}
                name={"skill"}
                type={"text"}
                value={formData?.skill}
                err={errors.skill}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Certificate Earn"}
                icon={<LiaCertificateSolid />}
                name={"certificate"}
                type={"file"}
                accept=".pdf"
                placeholder={"Upload your certificate (.pdf)"}
                secondaryIcon={<FaCloudUploadAlt />}
                thirdIcon={<GoAlertFill />}
                thirdIconContent={"Max file size is 5MB"}
                err={errors.certificate}
                handleInputChange={handleFileChange}
              />, 
              <TextArea
                title={"Why should We Onboard You?"}
                name={"onboardMesg"}
                type={"text"}
                thirdIcon={<GoAlertFill />}
                thirdIconContent={"50 words max."}
                value={formData?.onboardMesg}
                err={errors.onboardMesg}
                handleInputChange={handleInputChange}
              />,
            ] 
            :
            currentStep === 3 ? [
              // Step 3 inputs (add as needed)
              <Input
                title={"Username"}
                icon={<AiOutlineUser />}
                name={"username"}
                type={"text" }
                value={formData?.username}
                err={errors.username}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Password"}
                icon={<PiLockThin />}
                name={"password"}
                type={passwordVisible ? "text" : "password"}
                secondaryIcon={passwordVisible ? 
                  <IoEyeOffOutline onClick={()=>setPasswordVisible(prev=>!prev)}/> :
                  <FiEye onClick={()=>setPasswordVisible(prev=>!prev)} />}
                value={formData?.password}
                err={errors.password}
                handleInputChange={handleInputChange}
              />,
              <Input
                title={"Confirm Password"}
                icon={<PiLockThin />}
                name={"confirmPassword"}
                type={confirmPasswordVisible ? "text" : "password"}
                secondaryIcon={confirmPasswordVisible ? 
                  <IoEyeOffOutline onClick={()=>setConfirmPasswordVisible(prev=>!prev)}/> :
                  <FiEye onClick={()=>setConfirmPasswordVisible(prev=>!prev)} />}
                value={formData?.confirmPassword}
                err={errors.confirmPassword}
                handleInputChange={handleInputChange}
              />,
            ] : null
          }
/>}

      </div>
    </div>
  )
}

export default page