import { connectDatabase, getAllDocuments } from "@/lib/helpers/db-util";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET() {
  let client;
  const session = await getServerSession(authOptions);
  try {
    client = await connectDatabase();
    const timeRecord = await getAllDocuments(client, "time", { id: session.id });
    return NextResponse.json(timeRecord, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "get time record 서버 오류: " + error.message }, { status: 500 });
  } finally {
    client.close();
  }
}
