import { connectDatabase, getRandomDocuments } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";

export async function GET() {
  let client;
  try {
    client = await connectDatabase();
    const posts = await getRandomDocuments(client, "bookPost");
    client.close();

    if (posts) {
      return NextResponse.json(posts);
    } else {
      return NextResponse.json({ message: "책 불러오기를 실패하였습니다." });
    }
  } catch (error) {
    client.close();
    return NextResponse.json({ message: "서버 오류" });
  }
}
