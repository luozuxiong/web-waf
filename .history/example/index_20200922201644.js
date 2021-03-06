import Path from "path";
import Waf from "./../build/core/Waf";
import Config from "./../build/core/Config";
const express = require("express");

const config = new Config(Path.resolve("./waf.json"));

const waf = new Waf(config);

const app = express();

app.get("/", function (req, res) {
  res.send("hello world!");
});

app.listen(3000);
