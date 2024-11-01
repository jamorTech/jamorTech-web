"use client";
import React from 'react';
import styles from "./Updates.module.css";
import pic from "../../../../../public/assets/images/updateBg.png";
import pic1 from "../../../../../public/assets/images/updateBg1.png";
import pic2 from "../../../../../public/assets/images/updateBg2.png";
import { FaLongArrowAltRight } from 'react-icons/fa';
import UpdateCard from './UpdateCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css'; // Core styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles

// Import required modules
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';

const Updates = () => {
  const updates = [
    {
      title: "Tech Quest",
      img: pic,
      content: "Techquest ia a journey of learning and development, with different guest speakers providing valuable insights to tech interns over a three-month program. Be the first to know when we start the next one"
    },
    {
      title: "Skill Enhancement",
      img: pic1,
      content: "A dedicated initiative aimed at equipping tech interns with essential soft skills to complement their technical expertise.  we focus on developing critical skills that are crucial for personal and professional success in the tech industry."
    },
    {
      title: "Tips & Tutorials",
      img: pic2,
      content: "Gain valuable tips, tutorials, and best practices from industry experts to enhance your learning experience."
    },
  ];

  return (
    <section className={styles.updates}>
        <div className={styles.services}>
            <h1 className={styles.title}>Stay Updated</h1>
            <p className={styles.content}>Stay informed and inspired with Jamor Tech's Monthly Newsletter!</p>
        </div>

        <div className={styles.update_section}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay ]} // Install required modules
              spaceBetween={30}
              slidesPerView={3} // Number of visible cards on larger screens
              navigation // Enables navigation arrows
              pagination={{ clickable: true }} // Enables pagination dots
              scrollbar={{clickable: true}}
              loop={true}
              autoplay={{
                delay: 10000, // Time in milliseconds (10 seconds)
                disableOnInteraction: false, // Continue autoplay after user interactions
              }}
              style={{"--swiper-pagination-bottom": 0}}
              breakpoints={{
                // Responsive breakpoints
                0: {
                  slidesPerView: 1, // Show 1 card on small screens
                  // spaceBetween: 20,
                },
                450: {
                  slidesPerView: 2, // Show 2 cards on medium screens
                  // spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3, // Show 2 cards on medium screens
                  // spaceBetween: 30,
                },
              }}
            >
              {updates.map((update, index) => (
                <SwiperSlide key={index} className={styles.Swiper}>
                  <UpdateCard 
                    title={update.title}
                    img={update.img}
                    content={update.content}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>

        <Link href={"/community"} className={styles.explore}>
          Explore More <FaLongArrowAltRight />
        </Link>
    </section>
  );
}

export default Updates;