const express = require("express");
const app = express();
const Waf = require("web-waf");
process.on('uncaughtException',function(err){
  console.log(err)
  debugger;
}) //监听未捕获的异常
console.log(Waf)
// const waf = new Waf();
// app.use(waf.apply);
app.get("/", function (req, res) {
  res.send("hello world!");
});



app.listen(3000);
