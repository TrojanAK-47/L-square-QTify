import React from "react";
import styles from "./HeroSection.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assets/vibrating-headphone.svg";


function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroHeading}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <VibratingHeadphone />
    </div>
  );
}

export default HeroSection;