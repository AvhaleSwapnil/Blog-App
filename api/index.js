import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`MONGODB CONNECTED`);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log(`Server running on port 3000!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statuCode = err.statuCode || 500;
  const message = err.message || "Internal server error";
  res.status(statuCode).json({
    success: false,
    statuCode,
    message,
  });
});
