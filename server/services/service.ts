import { Mood, Moods } from "./mood.interface";

export class MoodService {
  private moods: Mood[];

  constructor() {
    this.moods = [];
  }

  public findAll = async () => {
    return this.moods;
  };

  public create = async (newItem) => {
    if (!newItem.mood || !newItem.feeling) {
      throw new Error("Must enter both mood and feeling");
    }
    const createdAt = new Date();
    const id = createdAt.valueOf();
    const mood: Mood = {
      id,
      mood: newItem.mood,
      feeling: newItem.feeling,
      comment: newItem.comment || "",
      createdAt,
    };
    this.moods.push(mood);
    return mood;
  };
}

const moodService = new MoodService();

export { moodService };
