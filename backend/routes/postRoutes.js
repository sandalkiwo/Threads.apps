import expres from "express";
import {
  createPost,
  getPost,
  deletePost,
  likeUnlikePost,
  replyToPost,
  getFeedPost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = expres.Router();

router.get("/feed", getFeedPost);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/reply/:id", protectRoute, replyToPost);
export default router;
