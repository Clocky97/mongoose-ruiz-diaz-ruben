import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  bio: {type: String},
  phone: {type: String},
  avatarUrl: {type: String},
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Profile", ProfileSchema);