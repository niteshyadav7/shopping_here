import Carousal from "../models/userCarousal.js";

export const createCarousal = async (req, res) => {
  try {
    const user = await Carousal.create(req.body);
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
export const getAllCarousal = async (req, res) => {
  try {
    const user = await Carousal.find();
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

export const getCarousal = async (req, res) => {
  try {
    // const id = req.params.id;
    const user = await Carousal.findById(req.params.id);
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
