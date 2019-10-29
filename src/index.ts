import { MongoClient, Db } from "mongodb";
// import { searchForC } from "./functions/pigsOnTheWing";
const client = new MongoClient('mongodb://localhost:27017/test');

async function init (): Promise<Db> {
  try {
    await client.connect();
    const db = client.db('test');

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