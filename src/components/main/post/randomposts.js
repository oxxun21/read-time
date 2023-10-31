import React from "react";
import s from "./postview.module.css";
import Image from "next/image";
import { BASE_URL } from "@/lib/BASE_URL";

async function dataRandomFetch() {
  const url = BASE_URL();
  try {
    const response = await fetch(`${url}/api/randompostview`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Randomposts() {
  const randomPosts = await dataRandomFetch();
  const url = BASE_URL();
  console.log(url);
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
              <Image src={post.thumbnail} alt={post.title} width={70} height={100} />
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
