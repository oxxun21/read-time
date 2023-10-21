import React from "react";
import s from "./postsSection.module.css";
import PostView from "./postView";

export const dynamic = "force-dynamic";

export default async function PostsSection() {
  const apiEndpoint = process.env.API_ENDPOINT || "http://localhost:3000";
  let posts = [];

  try {
    const response = await fetch(`${apiEndpoint}/api/postView`, {
      cache: "no-store",
    });
    posts = await response.json();
  } catch (error) {
    console.error(error);
  }

  console.log(posts);
  return (
    <section className={s.postsSection}>
      <h3>Memories</h3>
      <PostView posts={posts} />
    </section>
  );
}
