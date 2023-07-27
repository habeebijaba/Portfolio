"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/components/Loading/Loading";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <LoadingComponent />;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    await signIn("credentials", {
      email,
      password,
    });
  };
  const loginWithSocialmedia = () => {
    Swal.fire("Sorry !", "This feature will implemented soon !", "question");
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <div className={styles.linkContainer}>
        <p>
          Not a member ?{" "}
          <Link className={styles.link} href="/dashboard/register">
            Register
          </Link>
        </p>
      </div>
      <h1>Login</h1>

      <p>With your SocialMedia account</p>
      <div className={styles.socialmediaButtons}>
        <button
          className={styles.socialmediabutton}
          onClick={() => signIn("google")}>
          {" "}
          <Image height={20} width={20}  className={styles.logo} src="/google.png" alt="google" />{" "}
          <span className={styles.buttontext}>Google</span>
        </button>
        <button
          className={styles.socialmediabutton}
          onClick={loginWithSocialmedia}>
          <Image height={20} width={20}  className={styles.logo} src="/git.png" alt="github" />{" "}
          <span className={styles.buttontext}>GitHub</span>
        </button>
        <button
          className={styles.socialmediabutton}
          onClick={loginWithSocialmedia}>
          {" "}
          <Image height={20} width={20}  className={styles.logo} src="/1.png" alt="facebook" />{" "}
          <span className={styles.buttontext}>facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
