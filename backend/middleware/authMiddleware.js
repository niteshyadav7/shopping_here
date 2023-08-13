
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userSchema.js";

dotenv.config();

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
      if (err) {
        res.json({ status: false });
        next();
      } else {
        const user = await User.findById(decodedToken.id);
        if (user) res.json({ status: true, user: user.email });
        else res.json({ status: false });
        next();
      }
    });
  } else {
    res.json({ status: false });
    next();
  }
};
