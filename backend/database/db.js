import mongoose from "mongoose";
export const connectDB = async () => {
console.log(process.env.MONGODB_URI)
  const { connection } = await mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log(`Mongodb is connected with ${connection.host}`);
};