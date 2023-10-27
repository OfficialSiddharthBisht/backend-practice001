const mongoose = require('mongoose');

// Define the Review schema
const reviewSchema = new mongoose.Schema({
  userId: {
    type: String, // You might want to use a User model in a real application
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cDate: {
    type: Date,
    default: Date.now,
  },
  uDate: {
    type: Date,
    default: Date.now,
  },
});

// Create the Review model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
