import { Cart } from "../models/Schema.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
  res.json(cart || { userId: req.user.id, items: [] });
};

export const addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [{ productId, quantity }] });
  else {
    const item = cart.items.find((i) => String(i.productId) === String(productId));
    if (item) item.quantity += quantity;
    else cart.items.push({ productId, quantity });
    await cart.save();
  }
  res.json(await cart.populate("items.productId"));
};

export const removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.json({ items: [] });
  cart.items = cart.items.filter((i) => String(i.productId) !== String(req.params.productId));
  await cart.save();
  res.json(await cart.populate("items.productId"));
};
