import { Router } from "express";
import { createPost, getAllPosts, updatePost, deletePost, addTagToPost } from "../controllers/post.controller.js";

const router = Router();
router.post("/", createPost);
router.get("/", getAllPosts);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id/tags", addTagToPost);
export default router;