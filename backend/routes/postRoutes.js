import expres from "express";
import {
  createPost,
  getPost,
  deletePost,
  likeunlikePost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = expres.Router();

router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeunlikePost);

export default router;
