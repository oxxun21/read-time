import { getBookSearch } from "@/lib/helpers/api-util";

export default async function handler(req, res) {
  try {
    const { query } = req.query;
    const res = await getBookSearch(query);
    if (res.ok) {
      res.status(200).json(res);
    } else {
      res.status(500).json({ error: "API 호출 실패" });
    }
  } catch (error) {
    console.error("API 호출 실패:", error);
    res.status(500).json({ error: "API 호출 실패" });
  }
}
