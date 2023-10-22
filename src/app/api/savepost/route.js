import { connectDatabase, insertDocument } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();

  let client;

  try {
    client = await connectDatabase();

    await insertDocument(client, "bookPost", res);
    client.close();

    if (res) {
      return NextResponse.json({ res });
    } else {
      return NextResponse.json({ message: "책 저장을 실패하였습니다." });
    }
  } catch (error) {
    client.close();
    return NextResponse.json({ message: "서버 오류" });
  }
}
