import { connectToMongooseEntriesDB } from "../conn/connections";

class HeroHandler {
  static getAllHeroesHandler = async (req, res) => {
    try {
      // your code here
      const allHeroes = await connectToMongooseEntriesDB().model("Hero").find();
      res.json(allHeroes);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createHeroHandler = async (req, res) => {
    try {
      // your code here
      const { name, sex, weapon, numOfBattlesWon, numOfBattlesLost } = req.body;

      const newHero = await connectToMongooseEntriesDB().model("Hero").create({
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
      const getHero = await connectToMongooseEntriesDB()
        .model("Hero")
        .findById(id);

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
      const updatedHero = await connectToMongooseEntriesDB()
        .model("Hero")
        .findByIdAndUpdate(id, body, {
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
      const deletedHero = await connectToMongooseEntriesDB()
        .model("Hero")
        .findByIdAndDelete(id);

      if (!deletedHero) return res.sendStatus(404);
      res.json(deletedHero);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export default { HeroHandler };
