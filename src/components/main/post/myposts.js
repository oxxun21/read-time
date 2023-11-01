import React from "react";
import s from "./postview.module.css";
import PostDeleteBtn from "./postdeletebtn";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { BASE_URL } from "@/lib/BASE_URL";

async function dataFetch() {
  try {
    const session = await getServerSession(authOptions);
    const sessionId = session.id;
    const url = BASE_URL();

    const response = await fetch(`${url}/api/postsview`, {
      cache: "no-store",
    });
    const resjson = await response.json();
    const data = resjson.filter((i) => i.id === sessionId);
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
