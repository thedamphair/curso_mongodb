import { Db } from "mongodb";
import { someCoins } from "../data/hands-on-2";

function howAboutARide(result: any): number {
  let sum = 0;
  result.forEach((single: any) => {
    sum += single.average
  });

  return sum * 6;
}

function eatDinerAtAndre(second: any): string {
  let actorArray = second.actor.split(" ");
  if (actorArray[1].length === 6) {
    return "Mayor Success!"
  } else {
    return "Take a Shower"
  }
}

function films (last: any): number {
  if (last.numFilms == 3) {
    return 1;
  } else {
    return 9;
  }
}

async function ifIHadACigarette(db: Db): Promise<any> {
  try {
    let result = await someCoins(db);
    const ride = howAboutARide(result) / 3;
    const whatAbout = eatDinerAtAndre(result[1]);
    const numFilms = films(result[2]);
    return {
      ride, whatAbout, numFilms
    };
  } catch (error) {
    throw new Error(`Sorry I have no coins ${error}`);
    
  }
}

export {
  ifIHadACigarette
}