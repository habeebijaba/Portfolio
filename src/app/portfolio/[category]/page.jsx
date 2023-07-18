import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import Photo from "/public/illustration.png";
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
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            <Button url="" text="Read more" />
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
