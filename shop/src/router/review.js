const express = require("express");
const router = express.Router();
const reviewController = require("../controller/review");

router.get("/my/before", reviewController.ReviewBefore);

module.exports = router;
