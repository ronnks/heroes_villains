import { Router } from "express";
import {
  characterRouter,
  characterHeroRouter,
  characterHeroGroupRouter,
  characterHeroWeaponRouter,
  characterVillainRouter,
  characterVillainOriginRouter,
  characterVillainWeaponRouter,
} from "./character.routes";

const router = Router();
const heroRouter = Router();
const heroGroupRouter = Router();
const heroWeaponRouter = Router();
const villainRouter = Router();
const villainOriginRouter = Router();
const villainWeaponRouter = Router();

router.use("/characters", characterRouter);
heroRouter.use("/characters/heroes/ids", characterHeroRouter);
heroGroupRouter.use("/characters/hero_group/ids", characterHeroGroupRouter);
heroWeaponRouter.use("/characters/hero_weapon/ids", characterHeroWeaponRouter);
villainRouter.use("/characters/villains/ids", characterVillainRouter);
villainOriginRouter.use(
  "/characters/villain_origin/ids",
  characterVillainOriginRouter
);
villainWeaponRouter.use(
  "/characters/villain_weapon/ids",
  characterVillainWeaponRouter
);

export default {
  router,
  heroRouter,
  heroGroupRouter,
  heroWeaponRouter,
  villainRouter,
  villainOriginRouter,
  villainWeaponRouter,
};
