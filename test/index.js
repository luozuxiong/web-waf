const express = require("express");
const morgan = require("morgan");
const waf = require("./../src");
const app = express();
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(
  express.static(__dirname + "/public", {
    dotfiles: "ignore",
    etag: false,
    extensions: ["htm", "html"],
    index: false,
    maxAge: "1d",
    redirect: false,
    setHeaders: function(res, path, stat) {
      res.set("x-timestamp", Date.now());
    }
  })
);

app.use(waf("./waf-config"));
app.get("/", (req, res) => {
  res.send("home");
});

app.get("/product", (req, res) => {
  res.send("product");
});

app.get("/search", (req, res) => {
  res.send("search");
});

app.listen("2000");

console.log("start....");
