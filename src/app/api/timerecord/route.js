import { connectDatabase, getAllDocuments, insertDocument } from "@/lib/helpers/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const res = await req.json();
  const session = await getServerSession(authOptions);
  let client;
  try {
    client = await connectDatabase();

    const dataToInsert = {
      ...res,
      username: session.user.name,
      id: session.id,
    };

    await insertDocument(client, "time", dataToInsert);

    if (!res) return NextResponse.json({ message: "시간 기록을 실패하였습니다." });

    try {
      const timeRecord = await getAllDocuments(client, "time", { id: session.id });
      if (!timeRecord) return NextResponse.json({ message: "기록 가져오기를 실패하였습니다." });
      return NextResponse.json(timeRecord);
    } catch (error) {
      return NextResponse.json({ message: "기록 불러오기 서버 오류" });
    }
  } catch (error) {
    return NextResponse.json({ message: "기록 서버 오류" });
  } finally {
    client.close();
  }
}
