import { connectDatabase, getPostDocuments } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";

export async function GET() {
  let client;

  try {
    client = await connectDatabase();
    const book = await getPostDocuments(client, "book");
    client.close();

    if (book) {
      return NextResponse.json(book);
    } else {
      return NextResponse.json({ message: "책 불러오기를 실패하였습니다." });
    }
  } catch (error) {
    client.close();
    return NextResponse.json({ message: "서버 오류" });
  }
}
