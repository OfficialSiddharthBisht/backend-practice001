const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/auth");
const {
  giveReview,
  deleteReview,
  populateReview,
} = require("../controllers/review.contoller");
const router = express.Router();

router.route('/products/:productId/reviews').post(giveReview);
router.route('/products/:productId/reviews/:reviewId').delete(deleteReview);
router.route('/products/:productId/reviews').get(populateReview);

module.exports = router;
