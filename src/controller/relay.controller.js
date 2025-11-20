import { errorResponse, successResponse } from "../utils/response.js";
import { getRelayData, createRelayData } from "../service/relay.service.js";

export const createRelayDataController = async (req, res) => {
  try {
    const data = await createRelayData(req.body);
    successResponse(res, "Relay data created successfully", data);
  } catch (error) {
    errorResponse(res, error.message);
  }
}

export const getRelayDataController = async (req, res) => {
  try {
    const data = await getRelayData();
    successResponse(res, "Relay data fetched successfully", data);
  } catch (error) {
    errorResponse(res, error.message);
  }
}