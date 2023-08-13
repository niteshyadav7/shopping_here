import express from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/api/product", createProduct);
productRouter.get("/api/product", getAllProduct);
productRouter.get("/api/product/:id", getProduct);

export default productRouter;
