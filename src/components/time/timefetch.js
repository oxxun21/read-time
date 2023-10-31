import React from "react";
import Calender from "@/components/time/calender";
import { headers } from "next/headers";

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

export default async function TimeFetch() {
  const record = await dataFetch();
  return <Calender record={record} />;
}
