// tests/index.test.js
const request = require("supertest");
const app = require("../app");

describe("Index routes", () => {
  it("GET / should return JSON with name 'frodo'", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect({ name: "frodo" })
      .expect(200, done);
  });

  it("POST /test then GET /test should reflect added item", (done) => {
    request(app)
      .post("/test")
      .type("form")
      .send({ item: "hey" })
      .then(() => {
        request(app)
          .get("/test")
          .expect({ array: ["hey"] }, done);
      });
  });
});
