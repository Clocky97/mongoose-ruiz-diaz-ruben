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

const PORT = process.env.PORT || 1212;

await connectDB();

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/tags", tagRoutes);

app.get("/", (req, res) => res.send("Mongoose API funcionando"));

app.listen(PORT, () => {
  console.log("Servervidor funcionando en", PORT);
});