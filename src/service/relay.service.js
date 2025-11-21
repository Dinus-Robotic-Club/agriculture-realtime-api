import { prisma } from '../utils/lib/prisma.js'

export const createRelayData = async (data) => {
    return await prisma.relayActifity.create({ data })
}

export const getRelayData = async () => {
    return await prisma.relayActifity.find()
}
