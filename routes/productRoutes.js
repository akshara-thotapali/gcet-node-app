import express from 'express';
import productModel from "../models/productModel.js";

const productRouter = express.Router();

// GET all products
productRouter.get("/all", async (req, res) => {
  const products = await productModel.find();
  res.json(products);
});

// ✅ ADD this POST route
productRouter.post("/", async (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = new productModel({ name, price });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

export default productRouter;
