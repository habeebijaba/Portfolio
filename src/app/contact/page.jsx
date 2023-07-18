"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Contact from "/public/contact.png";
import Button from "@/components/button/Button";

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={Contact} fill={true} alt="" />
        </div>
        <form className={styles.form} action="">
          <input type="text" className={styles.input} placeholder="name" />
          <input type="text" className={styles.input} placeholder="email" />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default contact;
