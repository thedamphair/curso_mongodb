import { MongoClient, Db } from "mongodb";
const client = new MongoClient('mongodb://localhost:27017/video');

async function init (): Promise<Db> {
  try {
    await client.connect();
    const db = client.db('video');
    return db;
  } catch (error) {
    throw new Error(error);
  }
}

async function endConnection() {
  client.close();
}
init();
export {
  init,
  endConnection
}