import { MongoClient } from "mongodb";
import { DATABASE_KEY } from "../utils/DATABASE_KEY";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://OhGaEun:${DATABASE_KEY}@cluster0.kach5sy.mongodb.net/`
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection) {
  const db = client.db();
  const documents = await db.collection(collection).find().toArray();
  return documents;
}
