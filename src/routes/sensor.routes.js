import { Router } from "express";
import { createManySensorDataController, createSensorDataController, getSensorDatabyIDController, getSensorDataController, getSesnsorDatabyTypeController } from "../controller/sensor.controller.js";

const router = Router();

router.get("", getSensorDataController);
router.get("/:id", getSensorDatabyIDController);
router.get("/:type", getSesnsorDatabyTypeController);
router.post("", createSensorDataController);
router.post("/many", createManySensorDataController); 

export default router