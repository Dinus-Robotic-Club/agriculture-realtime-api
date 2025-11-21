import express from 'express'
import { createSensorDataController, createManySensorDataController } from '../controller/sensor.controller.js'

export default (wss) => {
    const router = express.Router()

    router.post('', createSensorDataController(wss))
    router.post('/many', createManySensorDataController(wss))

    return router
}
