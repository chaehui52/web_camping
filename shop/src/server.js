const express = require("express");
const path = require('path')
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
app.use(express.json());

const reviewRouter = require("./routers/review");

app.use(express.static('/'));
app.use("/review", reviewRouter);


//app.get(["/", "/hello"])
app.get("/", function (req, res) {
  return res.send("hello worlds");
});
app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
