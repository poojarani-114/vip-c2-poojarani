import { Product } from "../models/Schema.js";

export const listProducts = async (req, res) => {
  const { category, sort } = req.query;
  const q = {};
  if (category && category !== "All") q.category = category;
  let cursor = Product.find(q);
  if (sort === "priceAsc") cursor = cursor.sort({ price: 1 });
  else if (sort === "priceDesc") cursor = cursor.sort({ price: -1 });
  else if (sort === "discount") cursor = cursor.sort({ discount: -1 });
  else cursor = cursor.sort({ rating: -1 });
  res.json(await cursor);
};

export const getProduct = async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: "Not found" });
  res.json(p);
};

export const createProduct = async (req, res) => {
  const p = await Product.create(req.body);
  res.status(201).json(p);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
