import { connectToMongooseEntriesDB } from "../conn/connections";

class HeroWeaponHandler {
  static getAllHeroWeaponHandler = async (req, res) => {
    try {
      // your code here
      const allHeroeWeapons = await connectToMongooseEntriesDB()
        .model("HeroWeapon")
        .find();
      res.json(allHeroeWeapons);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createHeroWeaponHandler = async (req, res) => {
    try {
      // your code here
      const { weapon_name, weapon_make, weapon_abilities } = req.body;

      const newHeroWeapon = await connectToMongooseEntriesDB()
        .model("HeroWeapon")
        .create({
          weapon_name,
          weapon_make,
          weapon_abilities,
        });

      res.json(newHeroWeapon);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static getHeroWeaponByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const getHeroWeapon = await connectToMongooseEntriesDB()
        .model("HeroWeapon")
        .findById(id);

      if (!getHeroWeapon) return res.sendStatus(404);
      res.json(getHeroWeapon);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static updateHeroWeaponByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const { _id, ...body } = req.body;
      const updatedHeroWeapon = await connectToMongooseEntriesDB()
        .model("HeroWeapon")
        .findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });

      res.json(updatedHeroWeapon);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static deleteHeroWeaponHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const deletedHeroWeapon = await connectToMongooseEntriesDB()
        .model("HeroWeapon")
        .findByIdAndDelete(id);

      if (!deletedHeroWeapon) return res.sendStatus(404);
      res.json(deletedHeroWeapon);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export default { HeroWeaponHandler };
