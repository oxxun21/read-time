import { connectDatabase, deleteDocument } from "@/lib/helpers/db-util";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  const pathname = req.url;
  const parts = pathname.split("/");
  const postId = parts[parts.length - 2];

  let client;
  try {
    client = await connectDatabase();
    await deleteDocument(client, "bookPost", { _id: new ObjectId(postId) });
    return NextResponse.json({ message: "post delete 성공" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "post delete 서버 오류" }, { status: 500 });
  } finally {
    client.close();
  }
}
