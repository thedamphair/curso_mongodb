import { Db } from "mongodb";
const PEOPLE_COL = "people";

async function findFriends (db: Db): Promise<any> {
  try {
    let query = { };
    let select = { };
    let sortField = { }
    let data = await db.collection(PEOPLE_COL)
      .find(query, {
        projection: select,
        sort: sortField
      }).toArray();

    return data;
  } catch (error) {
    throw new Error(`Unable to find people: ${error}`);
  }
}

export {
  findFriends
}