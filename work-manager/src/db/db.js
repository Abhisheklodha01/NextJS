import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
       const {connection} = await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected");
        console.log(connection.host);
    } catch (error) {
        console.log("Database connection failed");
    }
}

