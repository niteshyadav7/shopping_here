import mongoose from "mongoose";

const userProduct = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must have name"],
    unique: true,
    maxlength: [40, "A tour name must have less or equal then 40 characters"],
    minlength: [10, "A tour name must have more or equal then 10 characters"],
  },
  avgRating: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  data: [],
});

const Product = mongoose.model("Product", userProduct);

export default Product;
