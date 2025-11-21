import { createManySensorData, createSensorData, getSensorData, getSensorDatabyID, getSesnsorDatabyType } from '../service/sensor.service.js'
import { errorResponse, successResponse } from '../utils/response.js'
import { broadcast } from '../utils/lib/socket.js'

export const getSensorDataController = async (req, res) => {
    try {
        const data = await getSensorData()
        successResponse(res, 'Sensor data fetched successfully', data)
    } catch (error) {
        errorResponse(res, error.message)
    }
}

export const getSensorDatabyIDController = async (req, res) => {
    try {
        const { id } = req.params
        const data = await getSensorDatabyID(id)
        successResponse(res, 'Sensor data fetched successfully', data)
    } catch (error) {
        errorResponse(res, error.message)
    }
}

export const getSesnsorDatabyTypeController = async (req, res) => {
    try {
        const { type } = req.params
        const data = await getSesnsorDatabyType(type) // Llamada a la función del servicio
        successResponse(res, 'Sensor data fetched successfully', data)
    } catch (error) {
        errorResponse(res, error.message)
    }
}

export const createSensorDataController = (io) => async (req, res) => {
    try {
        const data = await createSensorData(req.body)
        successResponse(res, 'Sensor data created successfully', data)

        // Emit ke semua client
        io.emit('sensor:new-data', data)
    } catch (error) {
        errorResponse(res, error.message)
    }
}

export const createManySensorDataController = (io) => async (req, res) => {
    try {
        const data = await createManySensorData(req.body)
        successResponse(res, 'Sensor data created successfully', data)

        io.emit('sensor:new-data', data)
    } catch (error) {
        errorResponse(res, error.message)
    }
}
