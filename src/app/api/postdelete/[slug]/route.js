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

    return NextResponse.json("성공");
  } catch (e) {
    console.error(e);
    return NextResponse.json("서버 에러");
  } finally {
    client.close();
  }
}
