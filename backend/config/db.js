import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/food-del');
    console.log("DB Connected to local MongoDB");
  } catch (error) {
    console.error("Failed to connect to local MongoDB, falling back to MongoDB Atlas...", error.message);
    try {
      await mongoose.connect('mongodb+srv://pritamku3326:9999707672@cluster0.ydvmzvv.mongodb.net/food-del');
      console.log("DB Connected to MongoDB Atlas");
    } catch (atlasError) {
      console.error("Failed to connect to MongoDB Atlas as well:", atlasError.message);
      process.exit(1);
    }
  }
}