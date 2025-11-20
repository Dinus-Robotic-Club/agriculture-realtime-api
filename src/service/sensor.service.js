import prisma from "../utils/lib/prisma.js"

export const getSensorData = async () => {
  return await prisma.sensorActifity.findMany()
}

export const createSensorData = async (data) => {
  return await prisma.sensorActifity.create({ data })
}

export const getSensorDatabyID = async (id) => {
  return await prisma.sensorActifity.findUnique({ where: { id } })
}

export const getSesnsorDatabyType = async (type) => {
  return await prisma.sensorActifity.findMany({ where: { sensorType: type } })
}

export const createManySensorData = async (data) => {
  return await prisma.sensorActifity.createMany({ data })
}

