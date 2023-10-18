import { getBookSearch } from "@/lib/helpers/api-util";

export default async function GET(req, res) {
  console.log(req.query.search);
  try {
    const search = req.query.search; // 쿼리 매개변수에서 검색어 추출
    const searchResult = await getBookSearch(search);
    return NextResponse.json(searchResult);
  } catch (error) {
    console.error("API 호출 실패:", error);
    res.status(500).json({ error: "API 호출 실패" });
  }
}
