import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";
import { DB_URL, DB_URL2 } from "./config/server.config";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.all("*", (req, res, next) => next({ name: "NotFoundError" }));

app.use(errorHandler);

const connectToMongooseEntriesDB = () => {
  const conn = mongoose.createConnection(DB_URL);
  conn.model("Hero", require("./models/hero.model/hero.model"));
  conn.model("HeroGroup", require("./models/hero.model/hero_group.model"));
  conn.model("Heroweapon", require("./models/hero.model/hero_weapon.model"));
};

const connectToMongooseEntries2DB = () => {
  const conn2 = mongoose.createConnection(DB_URL2);
  conn2.model("Villain", require("./models/villain.model/villain.model"));
  conn2.model(
    "VillainOrigin",
    require("./models/villain.model/villain_origin.model")
  );
  conn2.model(
    "VillainWeapon",
    require("./models/villain.model/villain_weapon.model")
  );

  app.listen(3001, () => console.log("[Server] Now listening on port 3001"));
};

connectToMongooseEntriesDB();
connectToMongooseEntries2DB();

export default app;
