import Path from "path";
import Waf from "./../build/core/Waf";
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world!");
});

app.listen(3000);
