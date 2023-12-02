import { MongoClient, Db } from 'mongodb';
import { searchForC } from './functions/aWalkAround';

const client = new MongoClient('mongodb+srv://<username>:<password>@mflix.zafbexs.mongodb.net/?retryWrites=true&w=majority');

async function init (): Promise<Db> {
  try {
    await client.connect();
    const db = client.db('sample_restaurants');
    return db;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function endConnection() {
  client.close();
}
init();

(async () => {
  try {
      const res_db = await init();
      const result = await searchForC(res_db);
      console.log(result);
      endConnection();
  } catch (e) {
      // Deal with the fact the chain failed
  }
  // `text` is not available here
})();