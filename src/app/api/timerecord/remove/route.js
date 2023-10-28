import { connectDatabase, deleteDocument } from "@/lib/helpers/db-util";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  const res = await req.json();

  let client;
  try {
    client = await connectDatabase();

    await deleteDocument(client, "time", { _id: new ObjectId(res._id) });
    client.close();

    if (res) {
      return NextResponse.json({ res });
    } else {
      return NextResponse.json({ message: "기록 삭제에 실패하였습니다." });
    }
  } catch (error) {
    client.close();
    return NextResponse.json({ message: "서버 오류" });
  }
}
