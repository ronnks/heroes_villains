import mongoose from "mongoose";
require("module-alias/register");

const pkg = require("../package.json");
const obj = JSON.parse(pkg);

export const connectToMongooseEntriesDB = () => {
  const conn = mongoose.createConnection(DB_URL);
  conn.model("Hero", require(obj._moduleAliases.models[0][2]));
  conn.model("HeroGroup", require(obj._moduleAliases.models[0][0]));
  conn.model("HeroWeapon", require(obj._moduleAliases.models[0][1]));
  return conn;
};
