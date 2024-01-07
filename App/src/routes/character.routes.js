import { Router } from "express";
import controller from "../controllers/character.controller";

const characterRouter = Router();

characterRouter
  .route("/heroes")
  .get(controller.HeroHandler.getAllHeroesHandler)
  .post(controller.HeroHandler.createHeroHandler);

characterRouter
  .route("/villains")
  .get(controller.VillainHandler.getAllVillainsHandler)
  .post(controller.VillainHandler.createVillainHandler);

characterRouter
  .route("/:id")
  .get(controller.HeroHandler.getHeroByIdHandler)
  .put(controller.HeroHandler.updateHeroByIdHandler)
  .delete(controller.HeroHandler.deleteHeroHandler);

characterRouter
  .route("/:id")
  .get(controller.VillainHandler.getVillainByIdHandler)
  .put(controller.VillainHandler.updateVillainByIdHandler)
  .delete(controller.VillainHandler);

export default characterRouter;
