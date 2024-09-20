import React from 'react'
import styles from "./Updates.module.css"
import Image from 'next/image'

const UpdateCard = ({title, img, content}) => {


  return (
    <div className={styles.card}>
      <h2 className={styles.card_title}>{title}</h2>
      <div className={styles.img_container}>
        <Image
            src={img}
            height={600}
            width={1000}
            alt='update-img'
        />
      </div>
      <div className={styles.card_content}>{content}</div>
    </div>
  )
}

export default UpdateCard
