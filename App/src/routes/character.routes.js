import { Router } from "express";
import {
  HeroHandler,
  HeroGroupHandler,
  HeroWeaponHandler,
} from "../controllers/hero.controller/hero.controller.exports";
import {
  VillainHandler,
  VillainOriginHandler,
  VillainWeaponHandler,
} from "../controllers/villain.controller/villain.controller.exports";

const characterRouter = Router();
const characterHeroRouter = Router();
const characterHeroGroupRouter = Router();
const characterHeroWeaponRouter = Router();
const characterVillainRouter = Router();
const characterVillainOriginRouter = Router();
const characterVillainWeaponRouter = Router();

characterRouter
  .route("/heroes")
  .get(HeroHandler.HeroHandler.getAllHeroesHandler)
  .post(HeroHandler.HeroHandler.createHeroHandler);

characterRouter
  .route("/heroe_group")
  .get(HeroGroupHandler.HeroGroupHandler.getAllHeroGroupsHandler)
  .post(HeroGroupHandler.HeroGroupHandler.createHeroGroupHandler);

characterRouter
  .route("/heroe_weapon")
  .get(HeroWeaponHandler.HeroWeaponHandler.getAllHeroWeaponHandler)
  .post(HeroWeaponHandler.HeroWeaponHandler.createHeroWeaponHandler);

characterRouter
  .route("/villains")
  .get(VillainHandler.VillainHandler.getAllVillainsHandler)
  .post(VillainHandler.VillainHandler.createVillainHandler);

characterRouter
  .route("/villain_origin")
  .get(VillainOriginHandler.VillainOriginHandler.getAllVillainOriginsHandler)
  .post(VillainOriginHandler.VillainOriginHandler.createVillainOriginHandler);

characterRouter
  .route("/villain_weapon")
  .get(VillainWeaponHandler.VillainWeaponHandler.createVillainWeaponHandler)
  .post(VillainWeaponHandler.VillainWeaponHandler.createVillainWeaponHandler);

characterHeroRouter
  .route("/:id")
  .get(HeroHandler.HeroHandler.getHeroByIdHandler)
  .put(HeroHandler.HeroHandler.updateHeroByIdHandler)
  .delete(HeroHandler.HeroHandler.deleteHeroHandler);

characterHeroGroupRouter
  .route("/:id")
  .get(HeroGroupHandler.HeroGroupHandler.getHeroGroupByIdHandler)
  .put(HeroGroupHandler.HeroGroupHandler.updateHeroGroupByIdHandler)
  .delete(HeroGroupHandler.HeroGroupHandler.deleteHeroGroupHandler);

characterHeroWeaponRouter
  .route("/:id")
  .get(HeroWeaponHandler.HeroWeaponHandler.getHeroWeaponByIdHandler)
  .put(HeroWeaponHandler.HeroWeaponHandler.updateHeroWeaponByIdHandler)
  .delete(HeroWeaponHandler.HeroWeaponHandler.deleteHeroWeaponHandler);

characterVillainRouter
  .route("/:id")
  .get(VillainOriginHandler.VillainOriginHandler.getVillainOriginByIdHandler)
  .put(VillainOriginHandler.VillainOriginHandler.updateVillainOriginByIdHandler)
  .delete(VillainOriginHandler.VillainOriginHandler.deleteVillainOriginHandler);

characterVillainOriginRouter
  .route("/:id")
  .get(VillainHandler.VillainHandler.getVillainByIdHandler)
  .put(VillainHandler.VillainHandler.updateVillainByIdHandler)
  .delete(VillainHandler.VillainHandler.deleteVillainHandler);

characterVillainWeaponRouter
  .route("/:id")
  .get(VillainWeaponHandler.VillainWeaponHandler.getVillainWeaponByIdHandler)
  .put(VillainWeaponHandler.VillainWeaponHandler.updateVillainWeaponByIdHandler)
  .delete(VillainWeaponHandler.VillainWeaponHandler.deleteVillainWeaponHandler);

export {
  characterRouter,
  characterHeroRouter,
  characterHeroGroupRouter,
  characterHeroWeaponRouter,
  characterVillainRouter,
  characterVillainOriginRouter,
  characterVillainWeaponRouter,
};
