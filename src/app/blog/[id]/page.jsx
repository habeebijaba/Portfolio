import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Photo from "/public/application.jpg";
import { notFound } from "next/navigation";
import moment from 'moment'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const blogpost = async ({ params }) => {
  const data = await getData(params.id);
  const htmlcontent = data.content;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title} </h1>
          <p className={styles.description}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src="/avatar1.png"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div>
              <span className={styles.username}>
                {data.username}
                <img src="/badge.png" alt="badge" className={styles.badge} />
              </span>
            <p className={styles.date}>posted {moment(data.createdAt).fromNow()}</p>
              
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div
          dangerouslySetInnerHTML={{ __html: htmlcontent }}
          className={styles.text}></div>
      </div>
    </div>
  );
};

export default blogpost;
