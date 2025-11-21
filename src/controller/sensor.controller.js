import { createManySensorData, createSensorData, getSensorData, getSensorDatabyID, getSesnsorDatabyType } from "../service/sensor.service.js";
import { errorResponse, successResponse } from "../utils/response.js";
import { getIO } from "../utils/lib/socket.js";

const io = getIO();

export const getSensorDataController = async (req, res) => {
  try {
    const data = await getSensorData();
    successResponse(res, "Sensor data fetched successfully", data);
  } catch (error) {
    errorResponse(res, error.message);
  }
}

export const getSensorDatabyIDController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSensorDatabyID(id);
    successResponse(res, "Sensor data fetched successfully", data);
  } catch (error) {
    errorResponse(res, error.message);
  }
}

export const getSesnsorDatabyTypeController = async (req, res) => {
  try {
    const { type } = req.params;
    const data = await getSesnsorDatabyType(type); // Llamada a la función del servicio
    successResponse(res, "Sensor data fetched successfully", data);
  } catch (error) {
    errorResponse(res, error.message);
  }
}

export const createSensorDataController = async (req, res) => {
  try {
    const data = await createSensorData(req.body); // Llamada a la función del servicio
    successResponse(res, "Sensor data created successfully", data);
    const emiting = io.emit("sensor:new-data", newData);
    console.log(emiting)
  } catch (error) {
    errorResponse(res, error.message);
  }
}

export const createManySensorDataController = async (req, res) => {
  try {
    const data = await createManySensorData(req.body); // Llamada a la función del servicio
    successResponse(res, "Sensor data created successfully", data);
  } catch (error) {
    errorResponse(res, error.message);
  }
}