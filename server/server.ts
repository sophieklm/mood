import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { moodController } from "./controller";

const app: express.Application = express();
const port: number = 3001;

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

router.get("/moods", moodController.getMoods);
router.post("/moods", moodController.createMood);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
