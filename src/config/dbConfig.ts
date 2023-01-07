import { PrismaClient } from "@prisma/client";

export let db: PrismaClient = new PrismaClient

export const dbConnect = async () => {
    db = new PrismaClient({
        log: ['query', 'info', 'warn'],
        errorFormat: 'minimal'
    })
    return await db.$connect().then(() => {
        console.log("Database connected")
    }).catch((err) => {
        console.log(err)
        process.exit(1)
    })
}