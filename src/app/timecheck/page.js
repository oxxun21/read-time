import React from "react";
import s from "./timeCheckPage.module.css";
import Calender from "@/components/time/calender";
import Timeform from "@/components/time/timeform";

export const metadata = {
  title: "Read Time | TimeCheck",
  description: "오늘의 독서 기록을 남겨봐요.",
};

export default function TimeCheck() {
  return (
    <div className={s.contain}>
      <Calender />
      <Timeform />
    </div>
  );
}
