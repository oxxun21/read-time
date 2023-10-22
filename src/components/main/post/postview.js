"use client";
import React, { useEffect, useState } from "react";
import s from "./postview.module.css";
import Image from "next/image";
import trash_icon from "@/assets/trash_icon.png";

function PostView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("/api/postview", { cache: "no-store" });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`/api/postdelete/${postId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const updatedPosts = posts.filter((post) => post._id !== postId);
        setPosts(updatedPosts);
        console.log("삭제 성공");
      } else {
        console.error("게시물 삭제 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={s.postViewList}>
          {posts.map((post) => (
            <li key={post._id}>
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={70}
                height={100}
              />
              <div>
                <strong>{post.title}</strong>
                <p>{post.sentence}</p>
              </div>
              <button type="button" onClick={() => handleDelete(post._id)}>
                <Image
                  src={trash_icon}
                  alt="게시글 삭제"
                  width={20}
                  height={20}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PostView;
