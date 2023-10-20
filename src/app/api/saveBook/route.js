import { connectDatabase, insertDocument } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();

  if (!res) {
    return NextResponse.json({ message: "잘못된 요청입니다." });
  }

  let client;

  try {
    client = await connectDatabase();
    await insertDocument(client, "book", res);
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

export default {
  POST,
};
