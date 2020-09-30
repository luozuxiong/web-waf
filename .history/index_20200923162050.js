const Waf = require("./dist/");
module.exports = (req, res, next) => {
  return new Waf(req, res, next);
};
