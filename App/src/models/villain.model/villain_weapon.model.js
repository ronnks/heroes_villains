import { Schema } from "mongoose";

const VillainWeaponSchema = new Schema({
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

module.export = { VillainWeaponSchema };
