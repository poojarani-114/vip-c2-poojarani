import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "../models/Schema.js";
import { products } from "./product.js";
dotenv.config({ path: "../.env" });
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products Inserted Successfully");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });