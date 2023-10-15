"use client";
import s from "./mainPage.module.css";
import { RecoilRoot } from "recoil";
import SearchForm from "@/components/mainPage/search/searchForm";
import SearchView from "@/components/mainPage/search/searchView";
import PostForm from "@/components/mainPage/post/postForm";

export default function Home() {
  return (
    <RecoilRoot>
      <div className={s.contain}>
        <section className={s.searchSection}>
          <h2>Search</h2>
          <SearchForm />
          <SearchView />
        </section>
        <section className={s.postsSection}>
          <h3>Memories</h3>
          <PostForm />
          <article></article>
        </section>
      </div>
    </RecoilRoot>
  );
}
