import { Schema } from "mongoose";

const HeroGroupSchema = new Schema({
  group_name: {
    type: String,
    required: true,
  },
  group_members: [
    {
      type: String,
      required: true,
    },
  ],
  weapons: [
    {
      type: String,
    },
  ],
  numOfBattlesWon: {
    type: Number,
    min: 0,
    max: 1000,
  },
  numOfBattlesLost: {
    type: Number,
    min: 0,
    max: 100,
  },
});

module.exports = { HeroGroupSchema };
