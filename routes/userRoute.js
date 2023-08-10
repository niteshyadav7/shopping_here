import express from "express";
import { checkUser } from "../middleware/authMiddleware.js";
import { register, login } from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/", checkUser);
userRoute.post("/api/register", register);
userRoute.post("/api/login", login);

export default userRoute;
