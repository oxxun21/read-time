import { connectDatabase, updateDocument } from "@/lib/helpers/db-util";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PATCH(req) {
  const res = await req.json();

  let client;
  try {
    client = await connectDatabase();

    await updateDocument(
      client,
      "time",
      { _id: new ObjectId(res._id) },
      {
        $set: {
          time: res.time,
        },
      }
    );

    if (!res) return NextResponse.json({ message: "시간 기록을 실패하였습니다." });
    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "서버 오류" });
  } finally {
    client.close();
  }
}
