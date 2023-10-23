import { connectDatabase, getAllDocuments } from "@/lib/helpers/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  const session = await getServerSession({ req });
  let client;
  try {
    client = await connectDatabase();
    const timeRecord = await getAllDocuments(client, "time", {
      username: session.user.name,
    });
    client.close();

    if (timeRecord) {
      return NextResponse.json(timeRecord);
    } else {
      return NextResponse.json({ message: "기록 가져오기를 실패하였습니다." });
    }
  } catch (error) {
    client.close();
    return NextResponse.json({ message: "서버 오류" });
  }
}
