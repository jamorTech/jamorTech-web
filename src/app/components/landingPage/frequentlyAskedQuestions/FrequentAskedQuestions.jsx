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
        answer: "The Jamortechnology Internship Program lasts for four months. It includes one month of practical digital soft skills training, followed by three months of hands-on experience."},
        {
        question: "Is the program virtual?",
        answer: "Yes, the internship program is entirely virtual, allowing participants to join from anywhere with an internet connection."},
        {
        question: "Why pay for the internship program?",
        answer: "The internship program requires payment to cover the cost of certification, guidance from experienced professionals, participation in tech events, and comprehensive soft skills training."},
        {
        question: "How do I bring my ideas to Jamor Technology for development?",
        answer: 'Jamor Technology specializes in turning innovative ideas into reality. We guide your concept from ideation to creating a Minimum Viable Product (MVP). To get started, click the "Join Us" button on our website and fill out the form. Our team will review your submission and contact you shortly.'},
        {
        question: "What is the difference between those paying and those who are not?",
        answer: `Paying participants will work closely with professionals who provide guidance throughout the internship. They will also receive additional perks such as recommendation letters, outsourcing opportunities with our partners, and certifications.
        Non-paying participants, on the other hand, will benefit from soft skills training and hands-on project experience but will not have access to these additional perks.`},
        {
        question: "How do I hire a Jamoteer?",
        answer: 'To hire a skilled Jamoteer, you must first register with us as a company. Once registered, you will receive a confirmation email. After that, you will gain access to our "Hire a Techie" platform, where you can connect with a wide range of Jamoteers for outsourcing and collaboration.'},
        {
        question: "How do I become an investor in Jamor Technology?",
        answer: "To become an investor, simply fill out the contact form, and we will get back to you shortly to discuss the next steps."},
    ]
  return (
    <section className={styles.container}>
      <div className={styles.upperSection}>
        <h1>Frequently Asked Questions (FAQ)</h1>
        <p>Welcome to our FAQ section! Here, you'll find answers to common questions about our courses, services, and support to help you make the most of what we offer.</p>
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
