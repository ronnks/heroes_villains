import { connectToMongooseEntries2DB } from "../conn/connections";

class VillainHandler {
  static getAllVillainsHandler = async (req, res) => {
    try {
      // your code here
      const allVillains = await connectToMongooseEntries2DB()
        .model("Villain")
        .find();
      res.json(allVillains);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createVillainHandler = async (req, res) => {
    try {
      // your code here
      const { name, sex, weapon, numOfKilled, powers } = req.body;

      const newVillain = await connectToMongooseEntries2DB()
        .model("Villain")
        .create({
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
      const getVillain = await connectToMongooseEntries2DB()
        .model("Villain")
        .findById(id);

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
      const updatedVillain = await connectToMongooseEntries2DB()
        .model("Villain")
        .findByIdAndUpdate(id, body, {
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
      const deletedVillain = await connectToMongooseEntries2DB()
        .model("Villain")
        .findByIdAndDelete(id);

      if (!deletedVillain) return res.sendStatus(404);
      res.json(deletedVillain);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export default { VillainHandler };
