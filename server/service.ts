import fs from "fs";
import path from "path";
import { Mood, Moods } from "./mood.interface";

export class MoodService {
  private moods: Moods;
  constructor() {
    this.moods = this.getMoodsFromFile();
  }
  private getMoodsFromFile = (file = path.join(__dirname, "../db.json")) => {
    const data = fs.readFileSync(file);
    const moods = JSON.parse(data.toString());
    return moods;
  };

  public findAll = async (): Promise<Moods> => {
    return this.moods;
  };

  public create = async (newItem: Mood): Promise<void> => {
    try {
      console.log(newItem);
      const createdAt = new Date();
      const id = createdAt.valueOf();
      this.moods[id] = {
        ...newItem,
        createdAt,
      };
      console.log(this.moods[id]);
      fs.writeFileSync(
        path.join(__dirname, "../db.json"),
        JSON.stringify(this.moods)
      );
    } catch (error) {
      console.log("Something went wrong: create", error);
      throw new Error(error);
    }
  };
}

const moodService = new MoodService();

export { moodService };
