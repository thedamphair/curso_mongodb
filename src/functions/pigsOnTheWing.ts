import { Db } from "mongodb";
import { findFriends } from "../data/excercise1";

function checkSelect(subject: any): boolean {
  if (subject._id) {
    return false
  }
  return true
}

function distinctCities(preCities:Array<string>): Array<string> {
  return Array.from(new Set(preCities))
}

async function searchForC (db: Db): Promise<any> {
  try {
    let friends = await findFriends(db);
    let preCity: Array<string> = [];
    friends.forEach((friend: any) => {
      preCity.push(friend.address.city);
    });
    const cities = distinctCities(preCity);
    const something = Math.ceil(cities.length / 10);

    return {
      last_name: friends[9].last_name,
      select: checkSelect(friends[0]),
      something
    }
  } catch (error) {
    throw new Error(`Sorry Friends ${error}`);
  }
}

export {
  searchForC
};