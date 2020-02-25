import * as pigsFn from "./pigsOnTheWing";
import * as ajjFn from "./zombieByTheCranberries";
import * as beFn from "./centrefolds";
import { init, endConnection } from "../index";
import { Db } from "mongodb";
let db: Db;

beforeAll(async (done) => {
  try {
    db = await init()
    done();
  } catch (error) {
    done(error);
  }
});

test('Set a shelter for pigs on the wind ', async ()=> {
  let result = await pigsFn.searchForC(db);
  expect(result.something).toEqual(11);
  expect(result.last_name).toBe('Contreras');
  expect(result.select).toBe(true);
});

test('You deserve to be self-sufficient ', async () => {
  let result = await ajjFn.ifIHadACigarette(db);
  expect(result.ride).toEqual(33.9);
  expect(result.whatAbout).toBe('Mayor Success!');
  expect(result.numFilms).toBe(1);
});

test('Youve long since faded from their eyes ', async () => {
  let result = await beFn.forYouToBeMine(db);
  expect(result.yourFault).toEqual(true);
  expect(result.ashtray).toBe(1845077.8);
});

afterAll((done) => {
  try {
    endConnection();
    done();
  } catch (error) {
    done(error);
  }
})