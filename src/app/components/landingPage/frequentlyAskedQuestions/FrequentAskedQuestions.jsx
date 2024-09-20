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
        question: "What is the duration of the Internship Program",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium repellendus reiciendis ullam, excepturi vitae dolore. Quae rem in error, quod similique aut, cupiditate voluptates inventore minima, animi illo blanditiis est? Ducimus rem eius perspiciatis illum quam unde recusandae quibusdam, sapiente totam ipsa modi ad eum est, soluta harum qui culpa odio nam quos officiis assumenda ullam! Omnis eius debitis dignissimos?"},
        {
        question: "Is the Program Virtual?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium repellendus reiciendis ullam, excepturi vitae dolore. Quae rem in error, quod similique aut, cupiditate voluptates inventore minima, animi illo blanditiis est? Ducimus rem eius perspiciatis illum quam unde recusandae quibusdam, sapiente totam ipsa modi ad eum est, soluta harum qui culpa odio nam quos officiis assumenda ullam! Omnis eius debitis dignissimos?"},
        {
        question: "Is it Paid?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium repellendus reiciendis ullam, excepturi vitae dolore. Quae rem in error, quod similique aut, cupiditate voluptates inventore minima, animi illo blanditiis est? Ducimus rem eius perspiciatis illum quam unde recusandae quibusdam, sapiente totam ipsa modi ad eum est, soluta harum qui culpa odio nam quos officiis assumenda ullam! Omnis eius debitis dignissimos?"},
        {
        question: "Is the internship program Expert-led? ",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium repellendus reiciendis ullam, excepturi vitae dolore. Quae rem in error, quod similique aut, cupiditate voluptates inventore minima, animi illo blanditiis est? Ducimus rem eius perspiciatis illum quam unde recusandae quibusdam, sapiente totam ipsa modi ad eum est, soluta harum qui culpa odio nam quos officiis assumenda ullam! Omnis eius debitis dignissimos?"},
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
