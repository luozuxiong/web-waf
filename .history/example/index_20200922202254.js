import Path from "path";
import Waf from "web-waf";
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world!");
});

app.listen(3000);
