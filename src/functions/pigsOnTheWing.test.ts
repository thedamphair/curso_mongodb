import * as pigsFn from "./pigsOnTheWing";
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

afterAll((done) => {
  try {
    endConnection();
    done();
  } catch (error) {
    done(error);
  }
})