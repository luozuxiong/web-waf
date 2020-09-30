import Waf from "./../src/";
import express from "express";
const app = express();
console.log(Waf)
app.get("/", function (req, res) {
  res.send("hello world!");
});

process.on("uncaughtException", function (err) {
  console.log(err);
  debugger;
}); //监听未捕获的异常

app.listen(3001);

console.log('server start...')