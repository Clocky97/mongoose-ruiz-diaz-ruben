import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:1212/moongo_basico');
    console.log("Mongoose conectado");
  } catch (err) {
    console.error("Error conectando a mongoose", err);
    process.exit(1);
  }
};