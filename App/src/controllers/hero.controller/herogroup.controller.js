import { connectToMongooseEntriesDB } from "../conn/connections";

class HeroGroupHandler {
  static getAllHeroGroupsHandler = async (req, res) => {
    try {
      // your code here
      const AllheroGroups = await connectToMongooseEntriesDB()
        .model("HeroGroup")
        .find();
      res.json(AllheroGroups);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createHeroGroupHandler = async (req, res) => {
    try {
      // your code here
      const {
        group_name,
        group_memebers,
        weapon,
        numOfBattlesWon,
        numOfBattlesLost,
      } = req.body;

      const newHeroGroup = await connectToMongooseEntriesDB()
        .model("HeroGroup")
        .create({
          group_name,
          group_memebers,
          weapon,
          numOfBattlesWon,
          numOfBattlesLost,
        });

      res.json(newHeroGroup);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static getHeroGroupByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const getHeroGroup = await connectToMongooseEntriesDB()
        .model("HeroGroup")
        .findById(id);

      if (!getHeroGroup) return res.sendStatus(404);
      res.json(getHeroGroup);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static updateHeroGroupByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const { _id, ...body } = req.body;
      const updatedHeroGroup = await connectToMongooseEntriesDB()
        .model("HeroGroup")
        .findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });

      res.json(updatedHeroGroup);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static deleteHeroGroupHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const deletedHero = await connectToMongooseEntriesDB()
        .model("HeroGroup")
        .findByIdAndDelete(id);

      if (!deletedHero) return res.sendStatus(404);
      res.json(deletedHero);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export default { HeroGroupHandler };
