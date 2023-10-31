import { connectDatabase, getRandomDocuments } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  let client;
  try {
    client = await connectDatabase();
    const posts = await getRandomDocuments(client, "bookPost");

    if (!posts) return NextResponse.json({ message: "책 불러오기를 실패하였습니다." });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "서버 오류" });
  } finally {
    client.close();
  }
}
