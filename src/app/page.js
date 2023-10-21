import s from "./mainPage.module.css";
import SearchSeaction from "@/components/main/search/searchSeaction";
import PostsSection from "@/components/main/post/postsSection";

export default function Home() {
  return (
    <div className={s.contain}>
      <SearchSeaction />
      <PostsSection />
    </div>
  );
}
