import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Photo from "/public/illustration.png";
import Link from "next/link";
import Button from "@/components/button/Button";

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

const blog = async () => {
  const data = await getData();
  return (
    // <div className={styles.container}>
    //   {data.map((item) => (
    //     <Link href={`/blog/${item._id}`} key={item.id}>
    //       <div className={styles.item}>
    //         <div className={styles.imgContainer}>
    //           <Image className={styles.img} src={Photo} fill={true} alt="" />
    //         </div>
    //         <div className={styles.content}>
    //           <h3 className={styles.title}>{item.title}</h3>
    //           <p className={styles.description}>
    //            {item.desc}
    //           </p>
    //           <Button url={`/blog/${item._id}`} text="Read more" />
    //         </div>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
    <div className={styles.container}>
      {data.map((item) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.desc}</p>
            <Button url={`/blog/${item._id}`} text="Read more" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.image} src={item.img} alt="" fill={true} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default blog;
