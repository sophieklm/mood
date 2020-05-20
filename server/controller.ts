import * as express from "express";
import { Mood, Moods } from "./mood.interface";
import { moodService } from "./service";

export class MoodController {
  public createMood = async (req: express.Request, res: express.Response) => {
    try {
      const item: Mood = req.body.item;

      await moodService.create(item);

      res.sendStatus(201);
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  public getMoods = async (req: express.Request, res: express.Response) => {
    try {
      const items: Moods = await moodService.findAll();
      res.status(200).send(items);
    } catch (e) {
      res.status(404).send(e.message);
    }
  };
}

const moodController = new MoodController();

export { moodController };
