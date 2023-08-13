import Cart from "../models/userCart.js";

export const createCart = async (req, res) => {
  try {
    const user = await Cart(req.body);
    res.send("Data Added!");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

export const getAllCart = async (req, res) => {
  try {
    const user = await Cart.find();
    res.status(200).json({
      status: "success",
      result: user.length,
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const user = await Cart.findByIdAndDelete(req.params.id);
    res.send("Delete Done!");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};
