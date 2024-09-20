import React from 'react'
import styles from "./Benefits.module.css"
import { CiCircleCheck } from "react-icons/ci";
import Image from 'next/image';

const BenefitCard = ({img, cardTitle, cardOptions}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
            <Image
                src={img}
                width={500}
                height={200}
                alt='illustration'
            />
        </div>
        <h2 className={styles.card_header}>{cardTitle}</h2>
        <div className={styles.list}>
            {cardOptions.map((option, index)=>(
                <span key={index}><CiCircleCheck />{option}</span>
            ))}
        </div>
    </div>
  )
}

export default BenefitCard
