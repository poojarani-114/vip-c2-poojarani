import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ["customer", "admin"], default: "customer" },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  category: { type: String, required: true },
  image: { type: String },
  stock: { type: Number, default: 100 },
  rating: { type: Number, default: 4 },
});

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalAmount: { type: Number, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "Placed" },
  },
  { timestamps: true }
);

const adminSchema = new mongoose.Schema({
  banner: { type: String, default: "https://via.placeholder.com/1200x300?text=SUPER+SALE" },
  categories: { type: [String], default: ["Fashion", "Electronics", "Mobiles", "Groceries", "Sports Equipments"] },
});

export const User = mongoose.model("user", userSchema);
export const Admin = mongoose.model("admin", adminSchema);
export const Product = mongoose.model("products", productSchema);
export const Orders = mongoose.model("orders", orderSchema);
export const Cart = mongoose.model("cart", cartSchema);
