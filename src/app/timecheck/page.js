import React from "react";
import s from "../layout.module.css";
import Calender from "@/components/time/calender";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Read Time | TimeCheck",
  description: "오늘의 독서 기록을 남겨봐요.",
};

export default async function TimeCheck() {
  const session = getServerSession();
  return (
    <div className={`${s.contain} ${s.time}`}>
      <Calender session={session} />
    </div>
  );
}
