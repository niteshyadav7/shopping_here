import express from "express";
import {
  createCarousal,
  getAllCarousal,
  getCarousal,
} from "../controllers/carousalController.js";

const carousalRoute = express.Router();

carousalRoute.post("/api/carousal", createCarousal);
carousalRoute.get("/api/carousal", getAllCarousal);
carousalRoute.get("/api/carousal/:id", getCarousal);

export default carousalRoute;
