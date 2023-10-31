import React from "react";
import s from "./timeCheckPage.module.css";
import Calender from "@/components/time/calender";
import { headers } from "next/headers";

export const metadata = {
  title: "Read Time | TimeCheck",
  description: "오늘의 독서 기록을 남겨봐요.",
};

async function dataFetch() {
  try {
    const host = headers().get("host");
    const protocal = process.env.NODE_ENV === "development" ? "http" : "https";
    const response = await fetch(`${protocal}://${host}/api/getrecord`, {
      cache: "no-store",
      headers: headers(),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function TimeCheck() {
  const record = await dataFetch();

  return (
    <div className={s.contain}>
      <Calender record={record} />
    </div>
  );
}
