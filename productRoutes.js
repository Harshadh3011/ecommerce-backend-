import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, price, image, description } = req.body;
  const newProduct = new Product({ name, price, image, description });
  await newProduct.save();
  res.json(newProduct);
});

export default router;
