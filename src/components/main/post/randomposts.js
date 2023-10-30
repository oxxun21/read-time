"use client";
import React, { useEffect, useState } from "react";
import s from "./postview.module.css";
import Image from "next/image";

export default function Randomposts() {
  const [randomPosts, setRandomPosts] = useState([]);

  // 함수 분리해서 ssr로 가능
  useEffect(() => {
    const dataRandomFetch = async () => {
      try {
        const response = await fetch("/api/randompostview");
        const data = await response.json();
        setRandomPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    dataRandomFetch();
  }, []);
  return (
    <>
      {!randomPosts || randomPosts.length === 0 ? (
        <div className={s.noPosts}>
          <p>아직 게시글이 없어요</p>
        </div>
      ) : (
        <>
          {randomPosts.map((post) => (
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
                <p className={s.randomPostUser}>{post.username}님</p>
              </div>
            </li>
          ))}
        </>
      )}
    </>
  );
}
