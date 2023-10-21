export const dynamic = "force-dynamic";
import s from "./mainPage.module.css";
import SearchSeaction from "@/components/mainPage/search/searchSeaction";
import PostsSection from "@/components/mainPage/post/postsSection";

export default function Home() {
  return (
    <div className={s.contain}>
      <SearchSeaction />
      <PostsSection />
    </div>
  );
}
