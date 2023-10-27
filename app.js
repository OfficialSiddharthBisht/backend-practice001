const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());

// routes import
const products = require("./routes/product.routes");
const reviews = require("./routes/review.routes");

// routes use
app.use('/api/v1',products);
app.use('/api/v1',reviews);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;