import React from "react";
import s from "./postview.module.css";
import {BASE_URL} from "@/lib/BASE_URL"

async function dataRandomFetch() {
  const url = BASE_URL();
  try {
    const response = await fetch(`${url}/api/randompostview`);
    if (!response.ok) {
      alert("게시글 불러오는 중 문제가 발생하였습니다.")
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Randomposts() {
  const randomPosts = await dataRandomFetch();
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
              <img
                src={post.thumbnail}
                alt={post.title}
                className={s.bookThumbnail}
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
