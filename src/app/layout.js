import CustomLayout from "@/components/layout/customLayout";
import "@/style/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Read Time",
  description: "다양한 책을 알아보고 독서 시간을 체크하세요",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={poppins.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
