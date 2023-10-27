const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/auth");
const {
  giveReview,
  delteReview,
  populateReview,
} = require("../controllers/review.contoller");
const router = express.Router();

router.route('products/:productId/reviews').post(isAuthenticatedUser,giveReview);
// router.route('/products/:productId/reviews/:reviewId').delete(isAuthenticatedUser,delteReview);
router.route('/products/:productId/reviews').get(isAuthenticatedUser,populateReview);

module.exports = router;
