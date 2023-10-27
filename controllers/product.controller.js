const Product = require("../models/product.model"); 
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create a new Product
exports.createProduct = catchAsyncErrors(async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a product." });
  }
});

// Read all Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
});

// Read Product by ID
exports.getSingleProduct = catchAsyncErrors(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the product." });
  }
});

// Update a Product by ID
exports.updateProduct = catchAsyncErrors(async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the product." });
  }
});

// Delete a Product by ID
exports.deleteProduct = catchAsyncErrors(async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the product." });
  }
});
