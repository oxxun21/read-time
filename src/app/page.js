import s from "./mainPage.module.css";
import SearchSection from "@/components/main/search/searchSection";
import PostsSection from "@/components/main/post/postsSection";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Read Time | Home",
  description: "기억하고 싶은 책 속 문장을 적어봐요.",
  openGraph: {
    ...openGraphImage,
  },
};

export default function Home() {
  return (
    <div className={s.contain}>
      <SearchSection />
      <PostsSection />
    </div>
  );
}
