import { connectDatabase, getAllDocuments, updateDocument } from "@/lib/helpers/db-util";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export async function PATCH(req) {
  const res = await req.json();
  const session = await getServerSession(authOptions);
  let client;
  if (!res) return NextResponse.json({ message: "request 문제 발생" }, { status: 500 });
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

    const timeRecord = await getAllDocuments(client, "time", { id: session.id });

    return NextResponse.json(timeRecord, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "time record edit 서버 오류: " + error.message }, { status: 500 });
  } finally {
    client.close();
  }
}
