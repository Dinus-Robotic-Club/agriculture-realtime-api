import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { initSocket } from "./utils/lib/socket.js";

dotenv.config();
const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// Initialize Socket.IO
const io = initSocket(server);

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
});

import sensorRoutes from "./routes/sensor.routes.js";
import relayRoutes from "./routes/relay.routes.js";

app.use("/api/sensor", sensorRoutes);
app.use("/api/relay", relayRoutes);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
