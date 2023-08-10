import express from "express";
import {
  createCart,
  deleteCart,
  getAllCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/api/cart", createCart);
cartRouter.get("/api/cart", getAllCart);
cartRouter.delete("/api/cart/:id", deleteCart);

export default cartRouter;
