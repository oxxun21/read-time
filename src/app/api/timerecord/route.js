import { connectDatabase, insertDocument } from "@/lib/helpers/db-util";
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
    client.close();

    if (res) {
      return NextResponse.json({ res });
    } else {
      return NextResponse.json({ message: "시간 기록을 실패하였습니다." });
    }
  } catch (error) {
    client.close();
    return NextResponse.json({ message: "서버 오류" });
  }
}
