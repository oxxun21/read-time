import React, { Suspense } from "react";
import s from "./postssection.module.css";
import PostView from "./postview";

export default async function PostsSection() {
  return (
    <section className={s.postsSection}>
      <h3>Post</h3>
      <Suspense fallback={<p className={s.loading}>게시글을 불러오는 중입니다...</p>}>
        <PostView />
      </Suspense>
    </section>
  );
}
