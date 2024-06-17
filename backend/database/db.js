import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "./config/config.env" });
export const connectDB = async () => {
console.log(process.env.MONGODB_URI)
  const { connection } = await mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log(`Mongodb is connected with ${connection.host}`);
};