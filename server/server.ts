import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { moodController } from "./controllers/controller";

dotenv.config();

const app: express.Application = express();
const port: string = process.env.PORT;

const router: express.Router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

router.get("/moods", moodController.getMoods);
router.post("/moods", moodController.createMood);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log(`Listening on port ${port}`);
  });
}

module.exports = app;
