import Image from "next/image";
import s from "./mainPage.module.css";
import search_icon from "@/assets/search_icon.svg";
import { searchAPI } from "@/lib/api/searchAPI";
import SearchContain from "@/components/mainPage/search/searchContain";

export default function Home() {
  return (
    <div className={s.contain}>
      <SearchContain />
      <section className={s.postsSection}>
        <h3>Memories</h3>
        <article></article>
      </section>
    </div>
  );
}
