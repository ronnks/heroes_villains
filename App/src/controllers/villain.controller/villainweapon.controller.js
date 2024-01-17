import { connectToMongooseEntries2DB } from "../conn/connections";

class VillainWeaponHandler {
  static getAllVillainWeaponsHandler = async (req, res) => {
    try {
      // your code here
      const allVillainWeapons = await connectToMongooseEntries2DB()
        .model("VillainWeapon")
        .find();
      res.json(allVillainWeapons);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createVillainWeaponHandler = async (req, res) => {
    try {
      // your code here
      const { weapon_name, weapon_make, weapon_abilities } = req.body;

      const newVillainWeapon = await connectToMongooseEntries2DB()
        .model("VillainWeapon")
        .create({
          weapon_name,
          weapon_make,
          weapon_abilities,
        });

      res.json(newVillainWeapon);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static getVillainWeaponByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const getVillainWeapon = await connectToMongooseEntries2DB()
        .model("VillainWeapon")
        .findById(id);

      if (!getVillainWeapon) return res.sendStatus(404);
      res.json(getVillainWeapon);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static updateVillainWeaponByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const { _id, ...body } = req.body;
      const updatedVillainWeapon = await connectToMongooseEntries2DB()
        .model("VillainWeapon")
        .findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });

      res.json(updatedVillainWeapon);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static deleteVillainWeaponHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const deletedVillainWeapon = await connectToMongooseEntries2DB()
        .model("VillainWeapon")
        .findByIdAndDelete(id);

      if (!deletedVillainWeapon) return res.sendStatus(404);
      res.json(deletedVillainWeapon);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export default { VillainWeaponHandler };
