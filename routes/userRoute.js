import express from "express";
import { checkUser } from "../middleware/authMiddleware.js";
import { register, login } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/", checkUser);
userRoute.post("/register", register);
userRoute.post("/login", login);

export default userRoute;
