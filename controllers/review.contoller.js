const Review = require("../models/review.model");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Product = require("../models/product.model"); 

// Create a Review for a Product
exports.giveReview = catchAsyncErrors(async (req, res) => {
  try {
    const { userId, description } = req.body;
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    const review = new Review({ userId, description });
    product.reviews.push(review);
    await Promise.all([review.save(), product.save()]);
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a review." });
  }
});

// Delete a Review by ID
exports.deleteReview = catchAsyncErrors(async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    const review = await Review.findByIdAndRemove(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found." });
    }
    product.reviews.pull(review._id);
    await product.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the review." });
  }
});

// Virtual Population of Reviews for a Product
exports.populateReview = catchAsyncErrors(async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate(
      "reviews"
    );
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json(product.reviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews for the product." });
  }
});

