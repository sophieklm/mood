const { moodController } = require("../controllers/controller");

describe("Mood Controller", () => {
  describe("createMood", () => {
    const mockResponse = () => {
      const res = {};
      res.send = jest.fn().mockReturnValue(res);
      res.status = jest.fn().mockReturnValue(res);
      res.sendStatus = jest.fn().mockReturnValue(res);
      return res;
    };

    const mockRequest = (body) => {
      return {
        body,
      };
    };

    const moodRequest = {
      mood: 3,
      feeling: "happy",
    };

    it("should return 200 success", async () => {
      const req = mockRequest(moodRequest);
      const res = mockResponse();
      await moodController.createMood(req, res);
      expect(res.sendStatus).toHaveBeenCalledWith(201);
    });

    it("should error if no params in request", async () => {
      const req = mockRequest({});
      const res = mockResponse();
      await moodController.createMood(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe("getMoods", () => {
    const mockResponse = () => {
      const res = {};
      res.send = jest.fn().mockReturnValue(res);
      res.status = jest.fn().mockReturnValue(res);
      return res;
    };

    it("should return 200 success", async () => {
      const res = mockResponse();
      await moodController.getMoods(null, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    xit("should error if there was a problem", async () => {
      jest.mock("../services/service");
      const { moodService } = require("../services/service");
      const res = mockResponse();
      moodService.findAll.mockImplementation(() => Promise.reject("error"));
      await moodController.getMoods(null, res);
      expect(moodService.findAll).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
    });
  });
});
