import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json("All Fields are required");
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
    res.status(400).json({ message: error.message });
  }
};
