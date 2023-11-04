import { connectDatabase, getRandomDocuments } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  let client;
  try {
    client = await connectDatabase();
    const posts = await getRandomDocuments(client, "bookPost");
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "random post view 서버 오류: " + error.message }, { status: 500 });
  } finally {
    client.close();
  }
}
