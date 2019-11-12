const path = require("path");
const isTest = process.env.NODE_ENV === "test";
const root = path.resolve(
  __dirname,
  isTest ? "../../../test" : "../../../../../"
);
module.exports = {
  root,
  wafDirname: path.resolve(root, ".waf")
};
