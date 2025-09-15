import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/database.js";
import userRoutes from "./src/routes/user.routes.js";
import postRoutes from "./src/routes/post.routes.js";
import profileRoutes from "./src/routes/profile.routes.js";
import tagRoutes from "./src/routes/tag.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

await connectDB(process.env.MONGO_URL);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/tags", tagRoutes);

app.get("/", (req, res) => res.send("Mongoose basic API running"));

app.listen(process.env.PORT || 1212, () => {
  console.log("Server running on port", process.env.PORT || 1212);
});