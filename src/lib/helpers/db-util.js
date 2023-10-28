import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.DATABASE_URL);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function updateDocument(client, collection, query, update) {
  const db = client.db();
  const result = await db.collection(collection).updateOne(query, update);
  return result;
}

export async function getAllDocuments(client, collection, username) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(username)
    .sort({ _id: -1 })
    .toArray();
  return documents;
}

export async function getRandomDocuments(client, collection) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .limit(5)
    .toArray();
  return documents;
}

export async function deleteDocument(client, collection, query) {
  const db = client.db();
  const result = await db.collection(collection).deleteOne(query);
  return result;
}
