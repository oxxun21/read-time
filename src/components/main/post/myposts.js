import React from "react";
import s from "./postview.module.css";
import PostDeleteBtn from "./postdeletebtn";
import { headers } from "next/headers";

async function dataFetch() {
  try {
    const host = headers().get("host");
    const protocal = process.env.NODE_ENV === "development" ? "http" : "https";
    const response = await fetch(`${protocal}://${host}/api/postsview`, {
      cache: "no-store",
      headers: headers(),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default async function Myposts() {
  const posts = await dataFetch();

  return (
    <>
      {!posts || posts.length === 0 ? (
        <div className={s.noPosts}>
          <p>아직 게시글이 없어요</p>
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <li key={post._id}>
              <img src={post.thumbnail} alt={post.title} className={s.bookThumbnail} />
              <div>
                <strong>{post.title}</strong>
                <p>{post.sentence}</p>
              </div>
              <PostDeleteBtn post={post} />
            </li>
          ))}
        </>
      )}
    </>
  );
}
