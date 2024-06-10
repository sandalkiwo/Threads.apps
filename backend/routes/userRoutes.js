import express from "express";
import {
  updateUser,
  signupUser,
  loginUser,
  logoutUser,
  followunFollowUser,
  getUserProfile
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.post("/follow/:id", protectRoute, followunFollowUser);
router.post("/update/:id", protectRoute, updateUser);

export default router;
