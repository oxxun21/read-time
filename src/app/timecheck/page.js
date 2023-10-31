import React from "react";
import s from "./timeCheckPage.module.css";
import TimeFetch from "@/components/time/timefetch";

export const metadata = {
  title: "Read Time | TimeCheck",
  description: "오늘의 독서 기록을 남겨봐요.",
};

export default async function TimeCheck() {
  return (
    <div className={s.contain}>
      <TimeFetch />
    </div>
  );
}
