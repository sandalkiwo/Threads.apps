import expres from "express";
import { createPost } from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = expres.Router();

router.post("/create", protectRoute, createPost);

export default router