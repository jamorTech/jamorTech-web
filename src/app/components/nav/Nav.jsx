"use client"
import React, { useState } from 'react'
import styles from "./Nav.module.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../../public/assets/images/logo.png"
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const pathName = usePathname()
  
    const navLinks = [
      { name: "Home", href: "/"},
      { name: "About Us", href: "/about"},
      { name: "Services", href: "/services"},
      { name: "Community", href: "/community"},
      { name: "Investors’ Corner", href: "/investors"},
    ]
    
    return (
      <nav className={`${styles.nav}`}>
        <div className={styles.logo}>
            <Link href={"/"}>
                <Image 
                    src={logo}
                    alt='logo'
                    width={500}
                    height={100}
                />
            </Link>
        </div>
        <div className={`${styles.links_auth} ${openMenu ? styles.openMenu : ""}`}>
            <ul>
            {navLinks.map(link=>{
                const active = (link.href === "/" && pathName === "/") || 
                (link.href !== "/" && pathName.startsWith(link.href));
                return (
                    <li 
                    onClick={()=>setOpenMenu(prev => !prev)}
                    className={ `${active && styles.active}`} 
                    key={link.name}
                    >
                    <Link href={link.href}>
                        {link.name}
                    </Link>
                </li>
                )
            })}
            </ul>
            <div className={styles.login_createAcct_container}>
                <Link href={"login"} className={styles.login}>Login</Link>
                <Link href={"signUp"} className={styles.createAcct}>Create an Account</Link>
            </div>
        </div> 
        <div className={styles.menuToggle}>
            {!openMenu ? <AiOutlineMenu className={styles.burgerIcon} onClick={e=>setOpenMenu(prev=>!prev)}/> :
            <IoMdClose className={styles.closeIcon} onClick={e=>setOpenMenu(prev=>!prev)}/>}
        </div>
      </nav>
    )
}

export default Nav
