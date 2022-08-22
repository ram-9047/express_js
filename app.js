
const express = require("express");

const port = 8000;

const app = express();

//----------middleware
app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Good old Days</h1>");
});

app.listen(port, () => {
  `server is listening at ${port}`;
});
