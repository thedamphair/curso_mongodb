import { Db } from "mongodb";
import { centrefolds } from "../data/hands-on-3";

function iveBeenWaiting (first: any): boolean {
  const indx = first.count / 3;
  if (first.people[indx].city === "New Glen") {
    return first.people[indx].job === "Psychiatrist" ? true : false;
  }

  return false;
}

function missconduction (length: number, wrong: boolean): boolean {
  if (length > 2) {
    return false;
  } else if(length < 3 && wrong) {
    return true;
  }
  return false;
}

function deg2rad (deg: number) {
  return deg * (Math.PI/180);
}

function howUngrateful (second: any) {
  let count = 0;
  for (const person of second.people) {
    if (person.city === "North Danny") {
      count++;
    }
  }
  const R = 6371;
  const dLat = deg2rad(19.424249 - 32.1561235);
  const dLon = deg2rad(-99.159859 - -111.023891);
  const a = Math.sin(dLat/count) * Math.sin(dLat/count) +
        Math.cos(deg2rad(32.1561235)) * Math.cos(deg2rad(19.424249)) *
        Math.sin(dLon/count) * Math.sin(dLon/count);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const near = (R * c) * 1000
  
  return Number(near.toFixed(2));
}

async function forYouToBeMine (db: Db): Promise<any> {
  try {
    let all = await centrefolds(db);
    const wrong = iveBeenWaiting(all[0]);
    const yourFault = missconduction(all.length, wrong);
    const ashtray = howUngrateful(all[1]);
    return { yourFault, ashtray }
  } catch (error) {
    throw new Error(`I refuse to let you die ${error}`);
  }
}

export {
  forYouToBeMine
}