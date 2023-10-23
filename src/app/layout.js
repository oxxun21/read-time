import "@/style/globals.css";
import { Poppins } from "next/font/google";
import AuthSession from "./authSesstion";
import s from "./layout.module.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Read Time",
  description: "다양한 책을 알아보고 독서 시간을 체크하세요",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${poppins.className} ${s.scrollbar}`} suppressHydrationWarning={true}>
        <AuthSession>{children}</AuthSession>
        <div id="portal"></div>
      </body>
    </html>
  );
}
