import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://PK:pritamku3326@cluster0.ytizd8l.mongodb.net/food-del');
    console.log("DB Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Failed to connect to MongoDB Atlas, falling back to local MongoDB...", error.message);
  }
}