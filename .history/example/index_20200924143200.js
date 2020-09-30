const express = require("express");
const app = express();
const Waf = require("web-waf");

// console.log(Waf)
// const waf = new Waf();
// app.use(waf.apply);
app.get("/", function (req, res) {
  res.send("hello world!");
});



app.listen(3000);
