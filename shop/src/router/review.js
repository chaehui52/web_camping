const express = require("express");
const router = express.Router();
const reviewController = require("../controller/review");

router.get("/my/before", reviewController.ReviewBefore);

router.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Express!" });
    console.log("sucess")
  });

module.exports = router;
