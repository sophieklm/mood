const { moodService } = require("../services/service");

describe("Mood Service", () => {
  let mockDate;

  beforeAll(() => {
    date = new Date("2020-01-01T10:20:30Z");
    mockDate = jest.spyOn(global, "Date").mockImplementation(() => date);
  });

  afterAll(() => {
    mockDate.mockRestore();
  });

  beforeEach(async () => {
    moodService.moods = [];
    jest.resetModules();
  });

  const moods = [
    {
      id: new Date("2020-01-01T10:20:30Z").valueOf(),
      mood: 3,
      feeling: "happy",
      comment: "",
      createdAt: new Date("2020-01-01T10:20:30Z"),
    },
  ];

  const moodRequest = {
    mood: 3,
    feeling: "happy",
  };

  it("should return a list of moods", async () => {
    await moodService.create(moodRequest);

    expect(moodService.moods).toStrictEqual(moods);
  });

  it("should add createdAt", async () => {
    await moodService.create(moodRequest);
    const allMoods = await moodService.findAll();

    expect(allMoods).toStrictEqual(moods);
  });
});
