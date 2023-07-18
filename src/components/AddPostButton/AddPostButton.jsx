import React from "react";
import styles from "./page.module.css";

const NewPostButton = () => {
  return (
    <button className={styles.newPostButton}>
      <span className={styles.plusSign}>+</span>
    </button>
  );
};

export default NewPostButton;
