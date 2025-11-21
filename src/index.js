import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'
import sensorRoutes from './routes/sensor.routes.js'
import { connectPrisma } from './utils/lib/prisma.js'
import relayRoutes from './routes/relay.routes.js'

dotenv.config()
const app = express()
const server = createServer(app)
const port = process.env.PORT || 3000

// Socket.IO server
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
})

// Middleware
app.use(cors())
app.use(express.json())

app.use('/api/sensor', sensorRoutes(io))
app.use('/api/relay', relayRoutes(io))

server.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`)
})

await connectPrisma()
io.on('connection', (socket) => {
    console.log('🔌 Client connected:', socket.id)

    socket.on('disconnect', () => {
        console.log('❌ Client disconnected:', socket.id)
    })
})

// Start server
