"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import Image from "next/image";
import Photo from "/public/illustration.png";
import LoadingComponent from "@/components/Loading/Loading";
import Swal from "sweetalert2";
import NewPostButton from "@/components/AddPostButton/AddPostButton";

const dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, mutate, error } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#53c28b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`/api/posts/${id}`, {
            method: "DELETE",
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
          mutate();
        } catch (error) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const handleEdit=()=>{
    Swal.fire(
      'Sorry !',
      'This feature will implemented soon !',
      'question'
    )
  }

  if (session.status === "loading") {
    return <LoadingComponent />;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <NewPostButton />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Photo</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <Image className={styles.image} src={item.img} alt="" width={80} height={80} />
                </td>
                <td>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEdit(item._id)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default dashboard;
