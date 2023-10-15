"use client";
import s from "./mainPage.module.css";
import SearchForm from "@/components/mainPage/search/searchForm";
import SearchView from "@/components/mainPage/search/searchView";
import { RecoilRoot } from "recoil";

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
          <article></article>
        </section>
      </div>
    </RecoilRoot>
  );
}
