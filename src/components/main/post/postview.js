"use client";
import React, { useEffect, useState } from "react";
import s from "./postview.module.css";
import Image from "next/image";

export const dynamic = "force-dynamic";

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

  console.log(posts);
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
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PostView;
