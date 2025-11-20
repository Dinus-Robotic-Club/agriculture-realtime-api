import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
const server = createServer(app);

app.use(cors(
  {
    origin: "*",
  }
));
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.use(express.json());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message:", data);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import sensorRoutes from "./routes/sensor.routes.js";
import relayRoutes from "./routes/relay.routes.js";
app.use("/api/sensor", sensorRoutes);
app.use("/api/relay", relayRoutes);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});