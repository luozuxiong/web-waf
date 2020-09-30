import Waf from "./../src/";
import express from "express";
const app = express();
const waf = new Waf();
app.use(waf.apply);
app.get("/", function (
  req: Request | any,
  res: { send: (arg0: string) => void }
) {
  res.send("hello world4!");
});

process.on("uncaughtException", function (err) {
  console.log(err);
}); //监听未捕获的异常

app.listen(3001);

console.log("server start...");
