import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(500, "All fields are required..!"));
  }
  const hashPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.status(200).json("signup successful..!");
  } catch (error) {
    next(error);
  }
};
