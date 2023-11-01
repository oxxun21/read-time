import { connectDatabase, deleteDocument, getAllDocuments } from "@/lib/helpers/db-util";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  const res = await req.json();
  const session = await getServerSession(authOptions);

  let client;
  try {
    client = await connectDatabase();

    await deleteDocument(client, "time", { _id: new ObjectId(res._id) });

    if (!res) return NextResponse.json({ message: "기록 삭제에 실패하였습니다." });

    try {
      const timeRecord = await getAllDocuments(client, "time", { id: session.id });
      if (!timeRecord) return NextResponse.json({ message: "기록 가져오기를 실패하였습니다." });
      return NextResponse.json(timeRecord);
    } catch (error) {
      return NextResponse.json({ message: "기록 불러오기 서버 오류" });
    }
  } catch (error) {
    return NextResponse.json({ message: "기록 서버 오류" });
  } finally {
    client.close();
  }
}
