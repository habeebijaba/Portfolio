import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Habeeb Ijaba Blog page",
  description: "This is Blog page",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const ImageWrapper = dynamic(() => import("next/image"), { ssr: false });
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item._id} className={styles.item}>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.desc}</p>
            <Button url={`/blog/${item._id}`} text="Read more" />
          </div>
          <div className={styles.imgContainer}>
            <ImageWrapper
              priority={false}
              className={styles.image}
              src={item.img}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
