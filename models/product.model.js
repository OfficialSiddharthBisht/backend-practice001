const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review', // This is used for virtual population of reviews
    },
  ],
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
