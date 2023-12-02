import { Db } from "mongodb";
const PEOPLE = "people";

async function centrefolds (db: Db): Promise<any> {
  try {
    let stages: object[] | undefined = [ ];
    let data = await db.collection(PEOPLE)
      .aggregate(stages)
      .toArray();

    return data;
  } catch (error) {
    throw new Error(`Unable to give you some coins: ${error}`);
  }
}

export {
  centrefolds
}
