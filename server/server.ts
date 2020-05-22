import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { moodController } from "./controllers/controller";

const app: express.Application = express();
const port: string = process.env.PORT;

const router: express.Router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

router.get("/moods", moodController.getMoods);
router.post("/moods", moodController.createMood);

app.listen(port, function () {
  // tslint:disable-next-line:no-console
  console.log(`Listening on port ${port}`);
});

module.exports = app;
