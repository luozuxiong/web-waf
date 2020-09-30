const Path = require("path");
const Waf = require("web-waf");
const express = require("express");
const app = express();

app.use(Waf);
app.get("/", function (req, res) {
  res.send("hello world!");
});

app.listen(3000);
