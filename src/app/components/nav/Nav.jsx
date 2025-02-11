"use client";
import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.png";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import useLogout from "@/app/hooks/useLogout";
import { useUserStore } from "@/app/store/useUserStore";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { setUser, clearUser, isAuthenticated } = useUserStore();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { logout } = useLogout();

  useEffect(() => {
    const authRoutes = ["/login", "/signUp"];
    if (isAuthenticated && authRoutes.includes(pathName)) {
      const redirectTo = searchParams.get("redirect") || "/";
      
      // Prevent infinite redirects
      if (pathName !== redirectTo) {
        router.replace(redirectTo);
      }
    }
  }, [pathName, isAuthenticated, router, searchParams]);
  
  const handleLogout = async () => {
    setOpenMenu(false)
    await logout();
    clearUser()
    router.push("/login");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Community", href: "/community" },
    { name: "Investors’ Corner", href: "/investors" },
  ];

  return (
    <nav className={`${styles.nav}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" width={200} height={50} />
        </Link>
      </div>

      <div className={`${styles.links_auth} ${openMenu ? styles.openMenu : ""}`}>
        <ul>
          {navLinks.map((link) => {
            const active =
              (link.href === "/" && pathName === "/") ||
              (link.href !== "/" && pathName.startsWith(link.href));
            return (
              <li
                onClick={() => setOpenMenu(false)}
                className={`${active && styles.active}`}
                key={link.name}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.login_createAcct_container}>
          {isAuthenticated ? (
            <>
              <button onClick={handleLogout} className={styles.login}>
                Logout
              </button>
              <Link href={"profile"} className={styles.createAcct} onClick={()=>setOpenMenu(false)}>
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link href={`login?redirect=${encodeURIComponent(pathName)}`} className={styles.login} onClick={()=>setOpenMenu(false)}>
                Login
              </Link>
              <Link href={`signUp?redirect=${encodeURIComponent(pathName)}`} className={styles.createAcct} onClick={()=>setOpenMenu(false)}>
                Create an Account
              </Link>
            </>
          )}
        </div>
      </div>

      <div className={styles.menuToggle}>
        {!openMenu ? (
          <button
            aria-label="Open Menu"
            onClick={() => setOpenMenu(true)}
            className={styles.burgerIcon}
          >
            <AiOutlineMenu />
          </button>
        ) : (
          <button
            aria-label="Close Menu"
            onClick={() => setOpenMenu(false)}
            className={styles.closeIcon}
          >
            <IoMdClose />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
