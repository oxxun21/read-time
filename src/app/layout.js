import "@/style/globals.css";
import s from "./layout.module.css";
import localFont from "next/font/local";
import CustomLayout from "@/components/layout/customLayout";

export const Pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff2",
});

export const metadata = {
  title: "Read Time",
  description: "기억하고 싶은 책을 기록하고 독서 시간을 체크하세요",
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
