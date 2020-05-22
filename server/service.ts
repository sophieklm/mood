import { Mood, Moods } from "./mood.interface";

export class MoodService {
  private moods: Mood[];

  constructor() {
    this.moods = [];
  }

  public findAll = async (): Promise<Moods> => {
    return this.moods;
  };

  public create = async (newItem: Mood) => {
    try {
      if (!newItem.mood || !newItem.feeling) {
        throw new Error("Must enter both mood and feeling");
      }
      const createdAt = new Date();
      const id = createdAt.valueOf();
      const mood: Mood = {
        ...newItem,
        id,
        createdAt,
      };
      this.moods.push(mood);
      return mood;
    } catch (error) {
      console.log("Something went wrong: create", error);
      throw new Error(error);
    }
  };
}

const moodService = new MoodService();

export { moodService };
