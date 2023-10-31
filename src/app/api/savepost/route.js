import { connectDatabase, insertDocument } from "@/lib/helpers/db-util";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const res = await req.json();
  const session = await getServerSession(authOptions);

  let client;
  try {
    client = await connectDatabase();

    const dataToInsert = {
      ...res,
      username: session.user.name,
      id: session.id,
    };

    await insertDocument(client, "bookPost", dataToInsert);

    if (!res) return NextResponse.json({ message: "책 저장을 실패하였습니다." });
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "서버 오류" });
  } finally {
    client.close();
  }
}
