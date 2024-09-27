"use client"
import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../../public/assets/images/logo.png"
import { FaLongArrowAltUp } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import { FaSquareXTwitter, FaFacebook, FaLinkedin} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {

    const pathName = usePathname()

    const infoLinks = [
        { name: "About Us", href: "/about"},
        { name: "Contact Us", href: "/contact"},
        { name: "Terms and Conditions", href: "/terms"},
        { name: "Privacy Policy", href: "/policy"},
      ]

    const resourcesLinks = [
        { name: "Getting Started", href: "/getting_started"},
        { name: "Training and Certification", href: "/training"},
        { name: "Mentoring", href: "/mentoring"},
        { name: "JamorTech Partners", href: "/partners"},
        { name: "Careers", href: "/careers"},
      ]

    const socialLinks = [
        {href: "https://x.com/JamorTech", icon: <FaSquareXTwitter />},
        {href: "https://www.facebook.com/JamorTechnology?mibextid=ZbWKwL", icon: <FaFacebook />},
        {href: "https://youtube.com/@jamortechnology?si=T4DHUWjPCZFRRvta", icon: <FaYoutube />},
        {href: "https://www.linkedin.com/company/jamor-technology/", icon: <FaLinkedin />},
        {href: "https://www.instagram.com/jamor_tech?igsh=MTJoODRvcXBwOWhubw==", icon: <RiInstagramFill />},
    ]

  return (
    <footer className={styles.footer}>
      <div className={styles.upper_footer}>
        <div className={styles.footer_logo}>
            <Link href={"/"}>
                <Image 
                    src={logo}
                    alt='logo'
                    width={500}
                    height={100}
                />
            </Link>
        </div>
        <div className={styles.section_group}>
        <section className={styles.footer_information}>
            <h2>Information</h2>
            <div className={styles.content}>
                {infoLinks.map(link=>{
                    const active = pathName.startsWith(link.href)
                    return <Link href={link.href} className={`${active && styles.active}`} key={link.name}>
                            {link.name}
                        </Link>
                    })}
            </div>
        </section>
        <section className={styles.footer_What_we_do}>
            <h2>What We Do</h2>
            <div className={styles.content}>
                <p>Internship Development</p>
                <p>Technology Solution</p>
                <p>Outsourcing</p>
            </div>
        </section>
        <section className={styles.footer_resources}>
            <h2>Resources</h2>
            <div className={styles.content}>
                {resourcesLinks.map(link=>{
                    const active = pathName.startsWith(link.href)
                    return <Link href={link.href} className={`${active && styles.active}`} key={link.name}>
                        {link.name}
                    </Link>
                })}
            </div>
        </section>
        </div>
        <span className={styles.arrowUp_icon} 
            onClick={()=>{window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });}}>
            <FaLongArrowAltUp className={styles.icon}/>
        </span>
      </div>
      <div className={styles.copyright}>
        <small>@copyright2024jamortech</small>
        <div className={styles.social_icons}>
            {socialLinks.map((links,index)=>(
                <Link target="_blank" href={links.href} key={index}>
                    {links.icon}
                </Link>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer



