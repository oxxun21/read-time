import { connectDatabase, getAllDocuments } from "@/lib/helpers/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  let client;
  try {
    client = await connectDatabase();
    const posts = await getAllDocuments(client, "bookPost", {
      id: session.id,
    });
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
