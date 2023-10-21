import React from "react";
import s from "./postsSection.module.css";
import PostView from "./postview";

export default async function PostsSection() {
  return (
    <section className={s.postsSection}>
      <h3>Memories</h3>
      <PostView />
    </section>
  );
}
