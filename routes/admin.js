const express = require("express");
// import express from "express";

const router = express.Router();
router.get("/add-product", (req, res, next) => {
  console.log("in add-product");
  //   res.sendFile("add_product.html", {
  //     root: __filename.length[6],
  //   });
  res.send(`<form action="/product" method="POST">
  <input type="text" name ="title"/>
  <button type="submit">Add Item</button>
  </form>`);
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
