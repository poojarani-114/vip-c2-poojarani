import { Orders, Cart } from "../models/Schema.js";

export const placeOrder = async (req, res) => {
  const { items, totalAmount, address, paymentMethod } = req.body;
  if (!items?.length || !address || !paymentMethod)
    return res.status(400).json({ message: "Missing order details" });
  const order = await Orders.create({
    userId: req.user.id,
    items,
    totalAmount,
    address,
    paymentMethod,
  });
  // clear cart
  await Cart.findOneAndUpdate({ userId: req.user.id }, { items: [] });
  res.status(201).json(order);
};

export const myOrders = async (req, res) => {
  const orders = await Orders.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
};

export const allOrders = async (_req, res) => {
  const orders = await Orders.find().populate("userId", "username email").sort({ createdAt: -1 });
  res.json(orders);
};
