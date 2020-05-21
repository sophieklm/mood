import fs from "fs";
import path from "path";
import { Mood, Moods } from "./mood.interface";

export class MoodService {
  private moods: Moods;
  private file;

  constructor({ file = path.join(__dirname, "../db.json") }) {
    this.file = file;
    this.moods = this.getMoodsFromFile(file);
  }
  private getMoodsFromFile = (file) => {
    const data = fs.readFileSync(file);
    const moods = JSON.parse(data.toString());
    return moods;
  };

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
      this.moods[id] = {
        ...newItem,
        createdAt,
      };
      fs.writeFileSync(this.file, JSON.stringify(this.moods));
      return this.moods[id];
    } catch (error) {
      console.log("Something went wrong: create", error);
      throw new Error(error);
    }
  };
}

const moodService = new MoodService({
  file: path.join(__dirname, "../db.json"),
});

export { moodService };
