"use client";
import React from "react";
import styles from "./OurPartners.module.css";
import Image from "next/image";
import logo1 from "../../../../../public/assets/images/waylc_hub_logo.jpg";
import logo2 from "../../../../../public/assets/images/iTalkAdventures.png";
import logo3 from "../../../../../public/assets/images/e-medatt.png";
import logo4 from "../../../../../public/assets/images/malva.jpg";
import logo5 from "../../../../../public/assets/images/conceptro.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const OurPartners = () => {
  const partners = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
  ];
  return (
    <section className={styles.ourPartners}>
      <h1>Our Partners</h1>
      <div className={styles.img_group}>
      <Swiper
        modules={[Navigation]} // Install required modules
        spaceBetween={5}
        slidesPerView={5} // Number of visible cards on larger screens
        navigation // Enables navigation arrows
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className={styles.Swiper}>
            <div className={styles.img_container} key={index}>
              <Image
                  src={partner.logo}
                  width={500}
                  height={200}
                  alt="partner-logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPartners;
