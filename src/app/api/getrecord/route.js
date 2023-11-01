import { connectDatabase, getAllDocuments } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET() {
  let client;
  const session = await getServerSession(authOptions);

  try {
    client = await connectDatabase();

    const timeRecord = await getAllDocuments(client, "time", { id: session.id });

    if (!timeRecord) return NextResponse.json({ message: "기록 가져오기를 실패하였습니다." });
    return NextResponse.json(timeRecord);
  } catch (error) {
    return NextResponse.json({ message: "서버 오류" });
  } finally {
    client.close();
  }
}
