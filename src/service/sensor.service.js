import { prisma } from '../utils/lib/prisma.js'

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

// Split array menjadi batch, misal 50 item per batch
const chunkArray = (arr, size) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }
    return chunks
}

export const createManySensorData = async (dataArray) => {
    const batchSize = 50
    const batches = chunkArray(dataArray, batchSize)
    const results = []

    for (const batch of batches) {
        // Promise.all untuk batch
        const createdBatch = await Promise.all(batch.map((item) => prisma.sensorActifity.create({ data: item })))
        results.push(...createdBatch)
    }

    return results
}
