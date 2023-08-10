import mongoose from "mongoose";

const userCarousal = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "it must have name"],
    unique: true,
  },
  avgRating: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  coverImage: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  data: [],
});

const Carousal = mongoose.model("Carousal", userCarousal);

export default Carousal;
