const express = require("express");
// const add_product = require("./add_product.html");
const bodyParser = require("body-parser");
const port = 8000;

const app = express();

//---------body parsing
app.use(bodyParser.urlencoded({ extended: false }));

//----------middleware
app.use("/add-product", (req, res, next) => {
  console.log("in add-product");
  res.sendFile("add_product.html", {
    root: __dirname,
  });
  // res.send(`<form action="/product" method="POST">
  // <input type="text" name ="title"/>
  // <button type="submit">Add Item</button>
  // </form>`);
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in the root middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
