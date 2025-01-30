"use client";
import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.png";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import useUserStore from "@/app/store/useUserStore";
import useLogout from "@/app/hooks/useLogout";
import { clearAllData } from "@/app/utils/localStorage";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, setUser } = useUserStore();
  const pathName = usePathname();
  const { push } = useRouter();
  const { logout } = useLogout();
  const [authUser, setAuthUser] = useState(false)

  // Remove session when "/login?from" is detected
  useEffect(() => {
    if (pathName?.includes("/login")) {
      sessionStorage.removeItem("user");
      clearAllData()
      setAuthUser(false); // Reset authentication status
    }
    
  }, [pathName, authUser, user]);

  useEffect(() => {
    const isAuth = JSON.parse(sessionStorage.getItem("user"));
    if (isAuth) {
      setAuthUser(true)
    }
  }, [user, authUser, pathName]);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    push("/login");
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
          {authUser ? (
            <>
              <button onClick={handleLogout} className={styles.login}>
                Logout
              </button>
              <Link href={"profile"} className={styles.createAcct}>
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link href={"login"} className={styles.login}>
                Login
              </Link>
              <Link href={"signUp"} className={styles.createAcct}>
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
