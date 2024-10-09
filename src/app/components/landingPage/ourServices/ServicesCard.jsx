import React from 'react'
import styles from "./OurServices.module.css"
import Image from 'next/image'

const ServicesCard = ({img, header, content}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_img}>
          <Image
            src={img}
            width={500}
            height={200}
            alt='icon'
          />
        </div>
        <h4>{header}</h4>
        <p>{content}</p>
    </div>
  )
}

export default ServicesCard
