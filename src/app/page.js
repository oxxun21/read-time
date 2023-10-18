import SearchSeaction from "@/components/mainPage/search/searchSeaction";
import s from "./mainPage.module.css";

export default function Home() {
  return (
    <div className={s.contain}>
      <section className={s.searchSection}>
        <h2>Search</h2>
        <SearchSeaction />
      </section>
      <section className={s.postsSection}>
        <h3>Memories</h3>
      </section>
    </div>
  );
}
