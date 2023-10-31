import React from "react";
import Calender from "@/components/time/calender";
import { BASE_URL } from "@/lib/BASE_URL";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function dataFetch() {
  const session = await getServerSession(authOptions);
  const sessionId = session.id;
  const url = BASE_URL();
  try {
    const response = await fetch(`${url}/api/getrecord`, {
      cache: "no-store",
    });
    const resjson = await response.json();
    const data = resjson.filter((i) => i.id === sessionId);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function TimeFetch() {
  const record = await dataFetch();
  return <>{record && <Calender record={record} />}</>;
}
