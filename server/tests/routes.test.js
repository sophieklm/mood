const request = require("supertest");

describe("/moods", () => {
  let server;

  beforeEach(async () => {
    jest.resetModules();
  });

  afterEach(async () => {
    // await server.close();
  });

  describe("POST /", () => {
    it("should return 201 when request body is correct", async () => {
      server = require("../server");

      const res = await request(server)
        .post("/moods")
        .send({ mood: 7, feeling: "happy" });

      expect(res.status).toBe(201);
    });

    it("should return 400 when there is no request body", async () => {
      server = require("../server");

      const res = await request(server).post("/moods");

      expect(res.status).toBe(400);
    });
  });

  describe("GET /", () => {
    it("should return 200", async () => {
      server = require("../server");
      const res = await request(server).get("/moods");

      expect(res.status).toBe(200);
    });

    xit("should return 400 if there was an error", async () => {
      server = require("../server");
      jest.mock("../controllers/controller", () => {
        return {
          getMoods: jest.fn().mockImplementation(() => Promise.reject("error")),
        };
      });
      const res = await request(server).get("/moods");

      expect(res.status).toBe(400);
    });
  });
});
