import { connectDatabase, getAllDocuments } from "@/lib/helpers/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  let client;
  try {
    client = await connectDatabase();

    const timeRecord = await getAllDocuments(client, "time", {
      id: session.id,
    });

    if (!timeRecord) return NextResponse.json({ message: "기록 가져오기를 실패하였습니다." });
    return NextResponse.json(timeRecord);
  } catch (error) {
    return NextResponse.json({ message: "서버 오류" });
  } finally {
    client.close();
  }
}
