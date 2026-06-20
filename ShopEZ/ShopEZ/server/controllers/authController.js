import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/Schema.js";

const sign = (u) =>
  jwt.sign({ id: u._id, userType: u.userType, username: u.username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

export const register = async (req, res) => {
  const { username, email, password, userType } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ message: "All fields required" });
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "Email already registered" });
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed, userType: userType || "customer" });
  res.status(201).json({ token: sign(user), user: { id: user._id, username, email, userType: user.userType } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ message: "Invalid credentials" });
  res.json({ token: sign(user), user: { id: user._id, username: user.username, email, userType: user.userType } });
};
