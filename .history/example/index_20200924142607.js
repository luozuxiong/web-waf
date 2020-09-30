const express = require("express");
const app = express();
const Waf = require("web-waf");
console.log(Waf)
// const waf = new Waf();
// app.use(waf.apply);
app.get("/", function (req, res) {
  res.send("hello world!");
});
app.use(function (err, req, res, next) {
  debugger;
});
process.on('uncaughtException',function(err){
  console.log(err)
  debugger;
}) //监听未捕获的异常

app.listen(3000);
