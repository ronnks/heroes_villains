import { Schema } from "mongoose";

const HeroSchema = new Schema({
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
  },
  numOfBattlesWon: {
    type: Number,
    min: 0,
    max: 100,
  },
  numOfBattlesLost: {
    type: Number,
    min: 0,
    max: 100,
  },
});

module.exports = { HeroSchema };
