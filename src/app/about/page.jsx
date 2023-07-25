import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Habeeb Ijaba About page",
  description: "This is About page",
};

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="photo"
          className={styles.image}
        />
        <div className={styles.imageText}>
          <h1 className={styles.imageTitle}>Empowering Dreams</h1>
          <h2 className={styles.imageDescription}>
            A Self-Taught Developer's Journey
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.description}>
            {" "}
            I am a versatile and skilled MERN (MongoDB, Express, React, Node.js)
            stack developer with a wide range of technical expertise. My journey
            in the world of web development has led me to master various
            languages, frameworks, libraries, and databases. With a strong
            foundation in JavaScript, HTML, CSS, C, and Java, I thrive in
            building feature-rich web applications that deliver exceptional user
            experiences.
            <br />
            <br />
            My enthusiasm for web development drives me to stay up-to-date with
            the latest trends and technologies in the industry. I am always
            eager to explore new tools and frameworks, continuously improving my
            skills to deliver cutting-edge solutions.
            <br />
            <br />I work proficiently with Visual Studio Code, leveraging its
            extensive features and extensions to enhance productivity and code
            quality. Git is my go-to tool for version control, allowing for
            efficient collaboration with team members and smooth project
            management. Postman is my choice for testing APIs, ensuring their
            functionality and stability before deployment. I am familiar with
            Figma, which facilitates seamless collaboration with designers,
            allowing me to implement their designs accurately and efficiently.
            <br />
            <br />I have expertise in using Mongoose to interact with MongoDB,
            ensuring efficient data storage, retrieval, and manipulation. I have
            hands-on experience with AWS (Amazon Web Services), enabling me to
            deploy and manage applications on cloud platforms.I have worked with
            Nginx, configuring it to handle web server functionalities,
            enhancing performance and security. I am skilled in utilizing Redux
            to manage complex application states, ensuring seamless
            communication between components and a smooth user experience. I
            have integrated Socket.IO into my projects, enabling real-time
            communication and enhancing the interactivity of applications.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I Do?</h1>
          <p className={styles.description}>
            {" "}
            <br />
            <br />
            <b>Full-Stack Development :</b> I have a comprehensive understanding
            of the entire web development process, enabling me to seamlessly
            integrate front-end and back-end components to create feature-rich
            applications.
            <br />
            <br />
            <b>Back-end Development :</b> My proficiency in Node.js and
            Express.js enables me to create powerful server-side applications
            and RESTful APIs. I have hands-on experience with MVC architecture
            and handle data effectively using databases like MongoDB and MySQL,
            along with Firebase for real-time data management.
            <br />
            <br />
            <b>Front-end Development :</b> I have a deep understanding of
            front-end technologies, using React.js as my primary framework to
            develop interactive and responsive user interfaces. I am well-versed
            in designing and styling applications with HTML, CSS, and the
            Material-UI (MUI) library.
            <br />
            <br /> - Full Stack Web Applications
            <br />
            <br /> - Websites
            <br />
            <br /> - UI/UX
            <br />
            <br /> - Design
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default about;
