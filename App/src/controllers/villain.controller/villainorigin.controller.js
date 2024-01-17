import { connectToMongooseEntries2DB } from "../conn/connections";

class VillainOriginHandler {
  static getAllVillainOriginsHandler = async (req, res) => {
    try {
      // your code here
      const allVillainOrigins = await connectToMongooseEntries2DB()
        .model("VillainOrigin")
        .find();
      res.json(allVillainOrigins);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static createVillainOriginHandler = async (req, res) => {
    try {
      // your code here
      const {
        original_name,
        real_name,
        villain_name,
        family_members,
        original_planet,
      } = req.body;

      const newVillainOrigin = await connectToMongooseEntries2DB()
        .model("VillainOrigin")
        .create({
          original_name,
          real_name,
          villain_name,
          family_members,
          original_planet,
        });

      res.json(newVillainOrigin);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static getVillainOriginByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const getVillainOrigin = await connectToMongooseEntries2DB()
        .model("VillainOrigin")
        .findById(id);

      if (!getVillainOrigin) return res.sendStatus(404);
      res.json(getVillainOrigin);
    } catch (error) {
      res.sendStatus(500);
    }
  };

  static updateVillainOriginByIdHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const { _id, ...body } = req.body;
      const updatedVillainOrigin = await connectToMongooseEntries2DB()
        .model("VillainOrigin")
        .findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });

      res.json(updatedVillainOrigin);
    } catch (error) {
      if (error.name === "ValidationError") {
        return res.status(422).json(error.errors);
      }

      res.sendStatus(500);
    }
  };

  static deleteVillainOriginHandler = async (req, res) => {
    try {
      // your code here
      const { id } = req.params;
      const deletedVillainOrigin = await connectToMongooseEntries2DB()
        .model("VillainOrigin")
        .findByIdAndDelete(id);

      if (!deletedVillainOrigin) return res.sendStatus(404);
      res.json(deletedVillainOrigin);
    } catch (error) {
      res.sendStatus(500);
    }
  };
}

export default { VillainOriginHandler };
