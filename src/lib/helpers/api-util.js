import { connectDatabase, getAllDocuments } from "./db-util";
import axios from "axios";
import { BASE_URL } from "../utils/BASE_URL";
import { RESTAPI_KEY } from "../utils/SEARCH_API_KEY";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: ` KakaoAK ${RESTAPI_KEY}`,
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export async function getBookSearch(query) {
  try {
    const response = await instance.get("/v3/search/book", {
      params: {
        query: query,
      },
    });

    const data = response.data.documents.filter((item) => item.thumbnail);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getBookPosts() {
  let client;

  try {
    client = await connectDatabase();
    const documents = await getAllDocuments(client, "bookPost");
    console.log(documents);
    return documents;
  } catch (e) {
    return console.error(e);
  } finally {
    if (client) {
      client.close();
    }
  }
}
