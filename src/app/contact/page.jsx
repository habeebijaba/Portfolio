"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.serviceID,
        process.env.templateID,
        {
          from_name: form.name,
          to_name: "Habeeb ijaba",
          from_email: form.email,
          to_email: "habeebav841@gmail.com",
          message: form.message,
        },
        process.env.publicKey
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          Swal.fire(
            "Thank you",
            "i will get back to you as soon as possible",
            "success"
          );
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error);
          alert("something went wrong");
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="/personal2.png"
            fill={true}
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.form} action="">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className={styles.input}
            placeholder="name"
          />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            className={styles.input}
            placeholder="email"
          />
          <textarea
            className={styles.textArea}
            name="message"
            placeholder="message"
            cols="30"
            onChange={handleChange}
            rows="10"></textarea>
          <button className={styles.button} type="submit">
            <span className={styles.buttonText}>
              {loading ? "sending ..." : "send"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
