import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 Habeebijaba. All rights reserved.</div>
      <div className={styles.socialMediaIcons}>
        <Image
          src="/1.png"
          className={styles.socialMediaIcon}
          width={15}
          height={15}
          alt="facebook"
        />
        <Image
          src="/2.png"
          className={styles.socialMediaIcon}
          width={15}
          height={15}
          alt="instagram"
        />
        <Image
          src="/3.png"
          className={styles.socialMediaIcon}
          width={15}
          height={15}
          alt="twitter"
        />
        <Image
          src="/4.png"
          className={styles.socialMediaIcon}
          width={15}
          height={15}
          alt="youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
