// const MoodService = require("../service");
// const path = require("path");

// describe("Mood Service", () => {
//   let server;

//   beforeEach(async () => {
//     jest.resetModules();
//   });

//   const moods = {
//     "1": {
//       mood: 4,
//       feeling: "happy",
//       comment: "",
//       createdAt: "2020-01-01T23:28:56.782Z",
//     },
//   };

//   const moodRequest = {
//     mood: 3,
//     feeling: "happy",
//   };

//   describe("findAll", () => {
//     it("should return a list of moods", async () => {
//       moodService = new MoodService(path.join(__dirname, "./mocks.json"));

//       moods = moodService.findAll();

//       expect(moods).toBe([]);
//     });
//   });

//   describe("create", () => {
//     it("should add createdAt", async () => {
//       moodService = new MoodService(path.join(__dirname, "./mocks.json"));

//       mood = moodService.create();

//       expect(mood).toBe([]);
//     });
//   });
// });
