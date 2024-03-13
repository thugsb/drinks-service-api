import request from "supertest";
import { app } from "../app";

test("GET /tea should return default object", async () => {
  const res = await request(app).get("/tea");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Redbush",
  });
});

test("GET /tea?type=Black should return black tea", async () => {
  const res = await request(app).get("/tea").query({ type: "Black" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Black",
  });
});
