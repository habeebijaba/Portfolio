"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 201) {
        router.push("/dashboard/login?success=account has been created");
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
      {error && "oops something went wrong"}
      <Link  href="/dashboard/login">Login with existing account</Link>
    </div>
  );
};

export default register;
