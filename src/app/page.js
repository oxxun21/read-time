import SearchSeaction from "@/components/mainPage/search/searchSeaction";
import s from "./mainPage.module.css";

export default function Home() {
  return (
    <div className={s.contain}>
      <SearchSeaction />
      <section className={s.postsSection}>
        <h3>Memories</h3>
      </section>
    </div>
  );
}
