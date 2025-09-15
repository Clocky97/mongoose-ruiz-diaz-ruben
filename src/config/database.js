import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose conectado");
  } catch (err) {
    console.error("Error conectando a mongoose", err);
    process.exit(1);
  }
};