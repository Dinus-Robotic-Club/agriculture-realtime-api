import express from 'express'
import {
    createSensorDataController,
    createManySensorDataController,
    getSesnsorDatabyTypeController,
    getSensorDatabyIDController,
    getSensorDataController,
} from '../controller/sensor.controller.js'

export default (wss) => {
    const router = express.Router()

    router.post('', createSensorDataController(wss))
    router.post('/many', createManySensorDataController(wss))
    router.get('', getSensorDataController)
    router.get('/:id', getSensorDatabyIDController)
    router.get('/:type', getSesnsorDatabyTypeController)

    return router
}
sensor
