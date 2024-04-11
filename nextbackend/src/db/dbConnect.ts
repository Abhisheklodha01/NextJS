import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Database connected");
    });
    connection.on("error", (err) => {
        console.log("mongoDB connection error please make sure db is running" + err);
        process.exit(1)
    })
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
};
