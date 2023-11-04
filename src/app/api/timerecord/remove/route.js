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
    const timeRecord = await getAllDocuments(client, "time", { id: session.id });
    return NextResponse.json(timeRecord , { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "time record remove 서버 오류" + error.message }, { status: 500 });
  } finally {
    client.close();
  }
}
