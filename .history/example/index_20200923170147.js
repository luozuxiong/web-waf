import Waf from 'web-waf'
const express = require("express");
const app = express();
console.log(Waf);
// const waf = new Waf();
// app.use(waf.apply);
app.get("/", function (req, res) {
  res.send("hello world!");
});

app.listen(3000);
