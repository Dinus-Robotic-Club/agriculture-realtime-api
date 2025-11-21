import { Router } from 'express'
import { createRelayDataController, getRelayDataController } from '../controller/relay.controller.js'

export default (wss) => {
    const router = Router()

    router.post('/', createRelayDataController(wss))
    router.get('/', getRelayDataController(wss))

    return router
}
