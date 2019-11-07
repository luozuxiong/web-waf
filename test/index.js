const express = require("express");
const morgan = require("morgan");
const waf = require("./../src");
const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(
  waf({
    ip: {
      whiteList: [],
      blackList: []
    }
  })
);
app.get("/", (req, res) => {
  res.send("home");
});

app.get("/product", (req, res) => {
  res.send("product");
});

app.get("/search", (req, res) => {
  res.send("search");
});

app.listen("2000");

console.log("start....");
