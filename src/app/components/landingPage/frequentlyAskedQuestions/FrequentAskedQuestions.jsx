"use client"
import React, { useState } from 'react'
import styles from "./FrequentAsked.module.css"
import Image from 'next/image'
import faqImg from "../../../../../public/assets/images/confusedImg.png"
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

const FrequentAskedQuestions = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const frequentlyAskedQuestions = [
        {
        question: "What is the duration of the Internship Program?",
        answer: "The jamortechnology interns program is for 4 months. Whereby, we have 1 month training of practical Digital soft-skill training and 3 months of hands on experience."},
        {
        question: "Is the Program Virtual?",
        answer: "The internship Program is 100% virtual."},
        {
        question: "Why pay for the internship program?",
        answer: "The internship program is been paid for because of certificates awarded, professionals we are bringing to guide interns, the experienced professionals we are bringing in for tech events, and also the soft skill training."},
        {
        question: "How do I bring in my ideas to be worked on by jamor technology? ",
        answer: "Jamor technology is the core solution of innovation. We take your idea from ideation to a MVP. Click on the join us button and fill the form. We will get back to you shortly."},
        {
        question: "Whats the difference between those paying and those who ain’t paying? ",
        answer: `Those paying will be working with professionals who will guide the interns. They will also enjoy other perks like recommendation letters, outsourcing, to our partners and certifications.
        While those who won’t be paying won’t enjoy this benefits. But they will enjoy soft skill training and working on hands-on project.`},
        {
        question: "How do I hire a jamoteer? ",
        answer: "To hire a professional skill you need to first register with us as a company. You get a confirmation mail from us before we give you access to the hire a techie environment where you meet lots of jamoteers you can outsource."},
        {
        question: "How do I become and investor in jamor technology? ",
        answer: "Fill the contact form and we will work get back to you shortly."},
    ]
  return (
    <section className={styles.container}>
      <div className={styles.upperSection}>
        <h1>Frequently Asked Questions (FAQ)</h1>
        <p>Here, we address the most common questions our community has about our courses, services, and support.</p>
      </div>
      <div className={styles.fqa_section}>
        <div className={styles.img_container}>
            <Image
                src={faqImg}
                height={400}
                width={800}
                alt='fqa-img'
            />
        </div>
        <div className={styles.faq_container}>
            {frequentlyAskedQuestions.map((questions, index)=>(
                <div className={styles.question_container} key={index}>
                <div className={styles.question_title} onClick={()=>{ setOpenIndex(openIndex === index ? null : index)}}>
                    <h3 className={styles.question}>{questions.question}</h3>
                    {openIndex === index ? <span><IoIosArrowDropupCircle /></span> :
                    <span><IoIosArrowDropdownCircle /></span>}
                </div>
                <p className={`${styles.answer} ${openIndex === index ? styles.display_answer : ""}`}>{questions.answer}</p>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FrequentAskedQuestions
