const express = require("express");
const multer = require("multer"); // multer import 추가
const router = express.Router();
const reviewController = require("../controller/camp");

const upload = multer({
  dest: 'E:\\vsproject\\ExpressStudy\\public\\uploads',
});

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.json({ imgUrl: req.file.filename });
});

router.get("/search/camping", reviewController.SearchCamping);

module.exports = router;
