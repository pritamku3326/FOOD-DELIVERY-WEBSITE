import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://pritamku3326:9999707672@cluster0.ydvmzvv.mongodb.net/food-del').then(()=>{console.log("DB Connected")});
}