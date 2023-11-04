import "@/style/globals.css";
import s from "./layout.module.css";
import localFont from "next/font/local";
import CustomLayout from "@/components/layout/customLayout";

export const Pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff2",
});

export const metadata = {
  metadataBase: new URL("https://read-time.vercel.app/"),
  title: "Read Time",
  description: "기억하고 싶은 책을 기록하고 독서 시간을 체크하세요",
  applicationName: "Read Time",
  keywords: ["Next.js", "React", "JavaScript", "MongoDB", "Next Auth","Kakao API", "book", "record", "search", "project"],
  authors: [{ name: "Ga Eun", url: "https://github.com/oxxun21" }],
  colorScheme: "dark",
  creator: "Ga Eun Oh",
  generator: "Next.js",
  publisher: "Ga Eun Oh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${Pretendard.className} ${s.scrollbar}`}
        suppressHydrationWarning={true}
      >
        <CustomLayout>{children}</CustomLayout>
        <div id="portal"></div>
      </body>
    </html>
  );
}
