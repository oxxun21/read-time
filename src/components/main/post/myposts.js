import React from "react";
import s from "./postview.module.css";
import Image from "next/image";
import { headers } from "next/headers";
import MyPostDeleteBtn from "./mypostdeletebtn";

async function dataFetch() {
  try {
    const host = headers().get("host");
    const protocal = process.env.NODE_ENV === "development" ? "http" : "https";
    let res = await fetch(`${protocal}://${host}/api/postsview`, {
      cache: "no-store",
      headers: headers(),
    });
    let data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Myposts() {
  const posts = await dataFetch();
  console.log(posts);

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
              <MyPostDeleteBtn post={post} />
            </li>
          ))}
        </>
      )}
    </>
  );
}
