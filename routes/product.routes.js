const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/auth");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.route("/products").post(isAuthenticatedUser, createProduct);
router.route("/products").get(isAuthenticatedUser, getAllProducts);
router.route("/products/:id").get(isAuthenticatedUser, getSingleProduct);
router.route("/products/:id").put(isAuthenticatedUser, updateProduct);
// router.route("/products/:id").delete(isAuthenticatedUser, deleteProduct);

module.exports = router;
