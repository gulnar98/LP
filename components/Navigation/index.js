import React, { useState } from 'react';
import Link from 'next/link';
import styles from './asset/css/style.module.css';
import Button from '../../ui/button';
import logo from './asset/image/LogoInsightify.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonProps = {
    btncolor: "#fff",
    btncolorHover: "black",
    text: "Join the waitlist",
    textColorHover: "white",
    border: "none",
    textColor: "black",
    borderRadius: "12px",
    padding: "12px 12px",
    fontSize: "1.2em",
    fontFamily: "Inter",
    fontWeight: "700",
    href:"https://mma8y7la0kp.typeform.com/to/fl7pDe5b"
    // margin: "0 0 0 12px"
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <img src={logo.src} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.navLinks}>
          <Link legacyBehavior href="#">
            <a className={styles.text}>Our vision</a>
          </Link>
          <Link legacyBehavior href="https://twitter.com/get_insightify">
            <a className={styles.text} target="_blank">
              Twitter
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className={styles.text}>Blog</a>
          </Link>
          <div className={styles.btn}>
            <Button {...buttonProps} />
          </div>
        </div>
      </div>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
      </div>
      {isMenuOpen && (
        <div className={styles.menuContainer}>
          <Link legacyBehavior href="#">
            <a className={styles.text}>Our vision</a>
          </Link>
          <Link legacyBehavior href="https://twitter.com/get_insightify">
            <a className={styles.text} target="_blank">
              Twitter
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className={styles.text}>Blog</a>
          </Link>
          <div className={styles.btn}>
            <Button {...buttonProps} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
