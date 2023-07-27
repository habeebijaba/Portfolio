import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Habeeb Ijaba Portfolio Page",
  description: "This is Portfolio Page",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.subTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/webApplications" className={styles.item}>
          <span className={styles.title}>Web Apps</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
