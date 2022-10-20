import mongoose from "mongoose"

export const DB_connection = async (message: string) => {
    await mongoose.connect(process.env.CONNECTION_STRING as string)
    console.log(`Success: ${message}`)
}

