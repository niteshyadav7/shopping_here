import Product from "../models/userProduct.js";

export const createProduct = async (req, res) => {
  try {
    const user = await Product(req.body);
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

export const getAllProduct = async (req, res) => {
  try {
    const user = await Product.find();
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

export const getProduct = async (req, res) => {
  try {
    // const id = req.params.id;
    const user = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
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

export const updateProduct = async (req, res) => {
  try {
    const user = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send("Update is Done!");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};
