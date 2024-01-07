import Hero from "../models/hero.model/hero.model";
import Villain from "../models/villain.model/villain.model";

class HeroHandler {
  static getAllHeroesHandler = async (req, res) => {
    try {
      // your code here
      const allHeroes = await Hero.find();
      res.json(allHeroes);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createHeroHandler = async (req, res) => {
    try {
      // your code here
      const { name, sex, weapon, numOfBattlesWon, numOfBattlesLost } = req.body;

      const newHero = await Hero.create({
        name,
        sex,
        weapon,
        numOfBattlesWon,
        numOfBattlesLost,
      });

      res.json(newHero);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static getHeroByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const getHero = await Hero.findById(id);

      if (!getHero) return res.sendStatus(404);
      res.json(getHero);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static updateHeroByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const { _id, ...body } = req.body;
      const updatedHero = await Hero.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });

      res.json(updatedHero);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static deleteHeroHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const deletedHero = await Hero.findByIdAndDelete(id);

      if (!deletedHero) return res.sendStatus(404);
      res.json(deletedHero);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

class VillainHandler {
  static getAllVillainsHandler = async (req, res) => {
    try {
      // your code here
      const allVillains = await Villain.find();
      res.json(allVillains);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createVillainHandler = async (req, res) => {
    try {
      // your code here
      const { name, sex, weapon, numOfKilled, powers } = req.body;

      const newVillain = await Villain.create({
        name,
        sex,
        weapon,
        numOfKilled,
        powers,
      });

      res.json(newVillain);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static getVillainByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const getVillain = await Villain.findById(id);

      if (!getVillain) return res.sendStatus(404);
      res.json(getCharacter);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static updateVillainByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const { _id, ...body } = req.body;
      const updatedVillain = await Villain.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });

      res.json(updatedVillain);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static deleteVillainHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const deletedVillain = await Villain.findByIdAndDelete(id);

      if (!deletedVillain) return res.sendStatus(404);
      res.json(deletedVillain);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export default { HeroHandler, VillainHandler };
