import { connectDatabase, getAllDocuments } from "./db-util";

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
