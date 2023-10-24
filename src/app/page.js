import s from "./mainPage.module.css";
import SearchSection from "@/components/main/search/searchSection";
import PostsSection from "@/components/main/post/postsSection";

export default function Home() {
  return (
    <div className={s.contain}>
      <SearchSection />
      <PostsSection />
    </div>
  );
}
