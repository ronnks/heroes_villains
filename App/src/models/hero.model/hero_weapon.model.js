import { Schema } from "mongoose";

const HeroWeaponSchema = new Schema({
  weapon_name: {
    type: String,
    required: true,
  },
  weapon_make: {
    type: String,
    required: true,
  },
  weapon_abilities: [
    {
      type: String,
    },
  ],
});

module.export = { HeroWeaponSchema };
