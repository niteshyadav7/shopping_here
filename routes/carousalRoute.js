import express from "express";
import {
  createCarousal,
  getAllCarousal,
  getCarousal,
  updateCarousal,
} from "../controllers/carousalController.js";

const carousalRoute = express.Router();

carousalRoute.post("/api/carousal", createCarousal);
carousalRoute.get("/api/carousal", getAllCarousal);
carousalRoute.get("/api/carousal/:id", getCarousal);
carousalRoute.patch("/api/carousal/:id", updateCarousal);

export default carousalRoute;
