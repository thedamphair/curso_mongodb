import { Db } from "mongodb";
const MOVIE_DETAILS = "movieDetails";

async function someCoins (db: Db): Promise<any> {
  try {
    let stages: object[] | undefined = [ ];
    let data = await db.collection(MOVIE_DETAILS)
      .aggregate(stages)
      .toArray();

    return data;
  } catch (error) {
    throw new Error(`Unable to give you some coins: ${error}`);
  }
}

export {
  someCoins
}
