import { Server } from "socket.io";

let io = null;

export function initSocket(server) {
  io = new Server(server, {
    cors: { origin: "*" }
  });
  return io;
}

export function getIO() {
  if (!io) console.log("Socket is not initialized");
  return io;
}