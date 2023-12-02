import { Db } from 'mongodb';
const RESTAURANT_COL = 'restaurants';

async function createRestaurant(db: Db, newData: any): Promise<any> {
  try {
    const data = await db.collection(RESTAURANT_COL).insertOne(newData);
    return data;
  } catch (error) {
    throw new Error(`Unable to create restaurants: ${error}`);
  }
}

async function findRestaurants (db: Db): Promise<any> {
  try {
    let query = { };
    let select = { };
    let sortField = { }
    let data = await db.collection(RESTAURANT_COL)
      .find(query, {
        projection: select,
        sort: sortField
      }).toArray();

    return data;
  } catch (error) {
    throw new Error(`Unable to find restaurants: ${error}`);
  }
}

async function updateRestaurant(db:Db): Promise<any> {
  try {
    const query = {};
    const set = {};
    const data = await db.collection(RESTAURANT_COL)
      .updateOne(query, set);
    return data;
  } catch (error) {
    throw new Error(`Unable to update restaurant: ${error}`);
  }
}

export {
  createRestaurant,
  findRestaurants,
  updateRestaurant
}