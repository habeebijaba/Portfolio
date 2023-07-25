import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const NewPostButton = () => {
  return (
    <Link href="/write">
    <button className={styles.newPostButton}>
      <span className={styles.plusSign}>+</span>
    </button>
    </Link>
  );
};

export default NewPostButton;
