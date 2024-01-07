import { Router } from "express";
import characterRouter from "./character.routes";

const router = Router();

router.use("http://localhost:3001/characters", characterRouter);

export default router;
