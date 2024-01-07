import { Schema } from "mongoose";

const VillainOriginSchema = new Schema({
  original_name: {
    type: String,
    required: true,
  },
  real_name: {
    type: String,
    required: true,
  },
  Villain_name: {
    type: String,
    required: true,
  },
  family_members: {
    type: String,
    required: false,
  },
  original_planet: {
    type: String,
    required: true,
  },
});

module.export = { VillainOriginSchema };
