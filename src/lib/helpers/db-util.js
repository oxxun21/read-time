import { MongoClient } from "mongodb";

const db_key = process.env.DATABASE_KEY;

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://OhGaEun:${db_key}@cluster0.kach5sy.mongodb.net/ReadTime`
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getPostDocuments(client, collection) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();
  return documents;
}

export async function getAllDocuments(client, collection) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();
  return documents;
}
