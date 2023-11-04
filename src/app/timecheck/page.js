import React from "react";
import s from "../layout.module.css";
import Calender from "@/components/time/calender";

export const metadata = {
  title: "Read Time | TimeCheck",
  description: "오늘의 독서 시간을 남겨봐요.",
};

export default async function TimeCheck() {
  return (
    <div className={`${s.contain} ${s.time}`}>
      <Calender />
    </div>
  );
}
