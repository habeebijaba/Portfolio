"use client";
import React, { useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic"; 

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Write = () => {
  const state = {};
  const [quillInstance, setQuillInstance] = useState(null);
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const session = useSession();
  const router = useRouter();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    if (!file || !value) {
      Swal.fire("oops !?", "Content Validation Failed?", "question");
      return;
    }

    e.preventDefault();

    const imgUrl = await upload();
    const plainText = quillInstance?.getEditor().getText();
    try {
      const data = {
        username: session?.data?.user.name,
        title: title,
        desc: desc,
        content: value,
        img: imgUrl.fileUrl,
      };

      const jsonData = JSON.stringify(data);

      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: jsonData,
      });
      router.push("/dashboard");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for your contribution",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handlesaveDraft = () => {
    Swal.fire("Sorry !", "This feature will implemented soon !", "question");
  };

  return (
    <div className={styles.add}>
      <div className={styles.content}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={desc}
          placeholder="Description"
          className={styles.input}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className={styles.editorContainer}>
          <ReactQuill
            ref={(ref) => setQuillInstance(ref)}
            className={styles.editor}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.item}>
          <h1 className={styles.heading}>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className={styles.file} htmlFor="file">
            Upload Image
          </label>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handlesaveDraft}>
              Save as draft
            </button>
            <button className={styles.button} onClick={handleClick}>
              Publish
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <h1 className={styles.heading}>Category</h1>
          <div className={styles.cat}>
            <input
              type="radio"
              checked={cat === "art"}
              id="art"
              name="cat"
              value="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className={styles.cat}>
            <input
              type="radio"
              checked={cat === "science"}
              id="science"
              name="cat"
              value="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className={styles.cat}>
            <input
              type="radio"
              checked={cat === "technology"}
              id="technology"
              name="cat"
              value="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className={styles.cat}>
            <input
              type="radio"
              checked={cat === "cinema"}
              id="cinema"
              name="cat"
              value="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className={styles.cat}>
            <input
              type="radio"
              checked={cat === "design"}
              id="design"
              name="cat"
              value="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className={styles.cat}>
            <input
              type="radio"
              checked={cat === "food"}
              id="food"
              name="cat"
              value="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
