import mongoose from "mongoose";

const userCart = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  images: [String],
});

const Cart = mongoose.model("Cart", userCart);
export default Cart;
