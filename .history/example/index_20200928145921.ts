import Waf from "./../src/";
import express from "express";
const app = express();
const waf = new Waf();
app.use(waf.apply);


process.on("uncaughtException", function (err) {
  console.log(err);
}); //监听未捕获的异常

app.listen(3001);

console.log("server start...");
