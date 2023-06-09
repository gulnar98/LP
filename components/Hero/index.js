import React from 'react'
import styles from "./asset/css/style.module.css"
import Button from "../../ui/button"
import heroImg from './asset/image/heroImg.svg'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function Hero() {

    const buttonProps = {
        btncolor: "black",
        btncolorHover: "white",
        text: "Join the waitlist",
        textColorHover: "black",
        border:"none",
        textColor: "white",
        borderRadius: "10px",
        padding: "14px 16px",
        fontSize: "1.4em",
        fontWeight:"700",
        fontFamily:"Arial",
        margin:"0 0 0 12px",
        icon:faArrowRight,
        iconPosition:"right",
        href:"https://mma8y7la0kp.typeform.com/to/fl7pDe5b"
       
      };
  return (
  <>
  <div className={styles.wrapper}>
    <div className={styles.textContainer}>
        <div className={styles.text}>
            <span>Web3 behavioral analytics &</span>
            <span>insight platform has arrived!</span>
       </div>
       <p className={styles.title}>Everything web3 products need to uncover insights and make the right changes</p>
    </div>
    <div className={styles.btn}>
      <Button {...buttonProps}/>
    </div>
    <div className={styles.imgContainer}>
        <img src={heroImg.src} alt="image" className={styles.heroImg}/>
    </div>
  </div>
  
  </>
  )
}

export default Hero