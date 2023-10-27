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

router.route("/products").post( createProduct);
router.route("/products").get( getAllProducts);
router.route("/products/:id").get( getSingleProduct);
router.route("/products/:id").put( updateProduct);
router.route("/products/:id").delete(deleteProduct);

module.exports = router;
