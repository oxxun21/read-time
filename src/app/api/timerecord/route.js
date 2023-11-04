import { connectDatabase, getAllDocuments, insertDocument } from "@/lib/helpers/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const res = await req.json();
  const session = await getServerSession(authOptions);
  let client;
  if (!res) return NextResponse.json({ message: "request 문제 발생" }, { status: 500 });
  try {
    client = await connectDatabase();

    const dataToInsert = {
      ...res,
      username: session.user.name,
      id: session.id,
    };

    await insertDocument(client, "time", dataToInsert);
    const timeRecord = await getAllDocuments(client, "time", { id: session.id });
    return NextResponse.json(timeRecord, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "time record post 서버 오류: " + error.message }, { status: 500 });
  } finally {
    client.close();
  }
}
