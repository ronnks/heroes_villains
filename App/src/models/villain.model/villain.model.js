import mongoose from "mongoose";
import { Schema } from "mongoose";

const VillainSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 6,
    },
    weapon: {
      type: String,
      required: true,
    },
    numOfKilled: {
      type: Number,
      min: 0,
      max: 10000,
      required: true,
    },
    powers: [
      {
        type: String,
      },
    ],
  },
  {
    statics: {
      async findByName(name) {
        console.log(name + " found");
      },
    },
  }
);

VillainSchema.statics.findByName(
  "cvcvc",
  new mongoose.model("Villain", VillainSchema)
);

module.export = { VillainSchema };
