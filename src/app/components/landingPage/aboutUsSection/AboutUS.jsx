import React from 'react'
import styles from "./AboutUs.module.css"
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";
import pic1 from "../../../../../public/assets/images/ilustration1.png"
import pic2 from "../../../../../public/assets/images/ilustration2.png"
import pic3 from "../../../../../public/assets/images/ilustration3.png"
import Link from 'next/link';

const AboutUS = () => {

  const imgs = [
    {img: pic1},
    {img: pic2},
    {img: pic3},
  ]
  return (
    <section className={styles.aboutUS}>
       <div className={styles.container}>
       <h1 className={styles.title}>About Us</h1>
        <p>JamorT is an organization dedicated to empowering new tech graduates from technology schools by providing them with valuable professional experience on live projects. Our mission is to bridge the gap between academia and the professional world, ensuring that graduates are well-prepared and employable in the competitive technology industry. We achieve this by offering opportunities to build them professional experience and portfolios and facilitating collaborations with companies in need of tech talent.</p>
      <div className={styles.group_imgs}>
        {imgs.map((element, index)=>(
          <div className={styles.img_container} key={index}>
          <Image
              src={element.img}
              width={800}
              height={400}
              alt='illustration'
          />
      </div>
        ))}
      </div>
      <Link href={"about"} className={styles.learn_more}>Learn More <FaLongArrowAltRight /></Link>
       </div>
    </section>
  )
}

export default AboutUS
