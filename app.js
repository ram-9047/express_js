const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const port = 8000;

//----------invoke express---------
const app = express();

//---------body parsing------------
app.use(bodyParser.urlencoded({ extended: false }));

//----------middleware-------------

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/", (req, res, next) => {
  res.send("<h1>Hello From NodeJS</h1>");
});

//------------Page NOT Found--------
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

//----------start server-----------
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
