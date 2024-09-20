import React from 'react'
import styles from "./OurPartners.module.css"
import Image from 'next/image'
import logo1 from "../../../../../public/assets/images/waylc_hub_logo.jpg"
import logo2 from "../../../../../public/assets/images/iTalkAdventures.png"
import logo3 from "../../../../../public/assets/images/e-medatt.png"
import logo4 from "../../../../../public/assets/images/malva.jpg"
import logo5 from "../../../../../public/assets/images/conceptro.png"

const OurPartners = () => {
    const logos =[
        {logo: logo1},
        {logo: logo2},
        {logo: logo3},
        {logo: logo4},
        {logo: logo5},
    ]
  return (
    <section className={styles.ourPartners}>
        <h1>Our Partners</h1>
      <div className={styles.img_group}>
        {logos.map((el, index)=>(
            <div className={styles.img_container} key={index}>
            <Image
                src={el.logo}
                width={500}
                height={200}
                alt='partner-logo'
            />
        </div>
        ))}
      </div>
    </section>
  )
}

export default OurPartners
