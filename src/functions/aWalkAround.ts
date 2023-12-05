import { Db } from 'mongodb';
import { findRestaurants, updateRestaurant } from '../data/walkAroundData';

const newRestaurant = {
  address: {
    building: '2980',
    coord: [ -73.98241999777, 41.579505 ],
    street: 'Different Avenue',
    zipcode: '10459'
  },
  borough: 'Brooklyn',
  cuisine: 'American',
  grades: [
    { date: new Date(), grade: 'A', score: 5 },
    { date: new Date(), grade: 'A', score: 7 },
    {
      date: new Date(),
      grade: 'A',
      score: 12
    },
    {
      date: new Date(),
      grade: 'A',
      score: 12
    }
  ],
  name: 'Riviera Caterer',
  restaurant_id: '90956018'
};

function checkSelect(subject: any): boolean {
  if (subject._id) {
    return false
  }
  return true
}

function distinctZipCodes(preCities:Array<string>): Array<string> {
  return Array.from(new Set(preCities));
}

export async function searchForC (db: Db): Promise<any> {
  try {
    let restaurants = await findRestaurants(db);
    let preCity: Array<string> = [];
    restaurants.forEach((restaurant: any) => {
      preCity.push(restaurant.address.zipcode);
    });
    const zipCodes = distinctZipCodes(preCity);
    const codesCount = zipCodes.length;

    return {
      name: restaurants[9].name,
      select: checkSelect(restaurants[0]),
      codesCount
    }
  } catch (error) {
    throw new Error(`Sorry Friends ${error}`);
  }
}

export async function somethingNew(db: Db): Promise<any>  {
  try {
    
  } catch (error) {
    throw new Error(`Failed with something new ${JSON.stringify(error)}`);
  }
}

export async function renameRestaurant(db: Db): Promise<any>  {
  const result = await updateRestaurant(db);
  return result;
}
