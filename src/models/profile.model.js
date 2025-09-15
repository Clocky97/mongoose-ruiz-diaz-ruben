import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  bio: String,
  phone: String,
  avatarUrl: String,
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Profile", ProfileSchema);