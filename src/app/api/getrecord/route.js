import { connectDatabase, getAllDocuments } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";

export async function GET() {
  let client;
  try {
    client = await connectDatabase();

    const timeRecord = await getAllDocuments(client, "time");

    if (!timeRecord) return NextResponse.json({ message: "기록 가져오기를 실패하였습니다." });
    return NextResponse.json(timeRecord);
  } catch (error) {
    return NextResponse.json({ message: "서버 오류" });
  } finally {
    client.close();
  }
}
