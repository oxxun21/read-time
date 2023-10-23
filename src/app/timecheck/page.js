import React from "react";
import s from "./timeCheckPage.module.css";
import Calender from "@/components/time/calender";
import Timeform from "@/components/time/timeform";

export default function TimeCheck() {
  return (
    <div className={s.contain}>
      <Calender />
      <Timeform />
    </div>
  );
}
