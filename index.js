import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { connection } from "./config/db.js";
import userRoute from "./routes/userRoute.js";

const app = express();

// THIS IS USED TO SETUP THE LOCAL FOR PRIVATE
dotenv.config();
const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;
const MONGO_URL = process.env.MONGO_URL;

// DEFAULT MIDDLEWARE
app.use(
  cors({
    origin: [`${HOST_NAME}:${PORT}`],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// ROUTE ADDED
app.use("/api",userRoute);

// DATABASE CONNECTED TO MONGO_DB
connection(MONGO_URL);

app.listen(PORT, () => {
  console.log(`app server running on ${HOST_NAME}:${PORT}`);
});
