import { Db } from 'mongodb';

const MOVIES_COL = 'movies';

export async function findMovies (db: Db): Promise<any> {
    try {
      let query = { };
      let select = { };
      let sortField = { }
      let data = await db.collection(MOVIES_COL)
        .find(query, {
          projection: select,
          sort: sortField
        }).toArray();
  
      return data;
    } catch (error) {
      throw new Error(`Unable to find movies: ${error}`);
    }
  }