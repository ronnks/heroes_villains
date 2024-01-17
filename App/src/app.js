import express from "express";
import cors from "cors";
import router from "./routes";
import {
  connectToMongooseEntriesDB,
  connectToMongooseEntries2DB,
} from "./conn/connections";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.all("*", (req, res, next) => next({ name: "NotFoundError" }));

app.use(errorHandler);

connectToMongooseEntriesDB();
connectToMongooseEntries2DB();

export default app;
