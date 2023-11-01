import React from "react";
import s from "./postssection.module.css";
import PostView from "./postview";

export default async function PostsSection() {
  return (
    <section className={s.postsSection}>
      <h3>Post</h3>
      <PostView />
    </section>
  );
}
