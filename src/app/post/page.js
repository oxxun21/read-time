import React from "react";
import s from "./post.module.css";
import PostForm from "@/components/mainPage/post/postForm";

function Post() {
  return (
    <section className={s.postSection}>
      <PostForm />
    </section>
  );
}

export default Post;
