import { Router } from "express";
import { createProfile, getAllProfiles } from "../controllers/profile.controller.js";

const router = Router();
router.post("/", createProfile);
router.get("/", getAllProfiles);
export default router;