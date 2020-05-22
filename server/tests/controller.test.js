// const MoodService = require("../service");

// describe("Mood Service", () => {
//   let server;

//   beforeEach(async () => {
//     jest.resetModules();
//   });

//   const moods = [{
//       id: 1,
//       mood: 4,
//       feeling: "happy",
//       comment: "",
//       createdAt: "2020-01-01T23:28:56.782Z",
//     },
//   ];

//   const moodRequest = {
//     mood: 3,
//     feeling: "happy",
//   };

//   describe("findAll", () => {
//     it("should return a list of moods", async () => {
//       moodService = new MoodService();

//       moods = moodService.findAll();

//       expect(moods).toBe([]);
//     });
//   });

//   describe("create", () => {
//     it("should add createdAt", async () => {
//       moodService = new MoodService();

//       mood = moodService.create();

//       expect(mood).toBe([]);
//     });
//   });
// });
