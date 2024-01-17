import mongoose from "mongoose";
require("module-alias/register");

const pkg = require("../package.json");
const obj = JSON.parse(pkg);
/* 
var hero_model = require("../package.json").moduleAliases[0][2]; */

export const connectToMongooseEntries2DB = () => {
  const conn2 = mongoose.createConnection(DB_URL2);
  conn2.model("Villain", require(obj._moduleAliases.models[1][2]));
  conn2.model("VillainOrigin", require(obj._moduleAliases.models[1][0]));
  conn2.model("VillainWeapon", require(obj._moduleAliases.models[1][1]));

  app.listen(3001, () => console.log("[Server] Now listening on port 3001"));
  return conn2;
};
