const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in the root middleware");
  res.send("<h1>Welcome to shop</h1>");
});

module.exports = router;
