import { Router } from "express";
import { createRelayDataController, getRelayDataController } from "../controller/relay.controller.js";

const router = Router();

router.post("/", createRelayDataController);
router.get("/", getRelayDataController);

export default router