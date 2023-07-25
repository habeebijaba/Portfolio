import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            {/* <Button url={item.url}  text="Open Address" /> */}
            <div className={styles.iconContainer}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img className={styles.icon} src="/web.png" alt="Live Link" />
              </a>
              <a
                href={item.gitHubLink}
                target="_blank"
                rel="noopener noreferrer">
                <img className={styles.icon} src="/git.png" alt="GitHub Link" />
              </a>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              src={item.image}
              alt=""
              fill={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default category;
