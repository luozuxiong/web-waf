const path = require("path");
const toString = Object.prototype.toString;
const logger = require("./log");
const get = function(options) {
  if (toString.call(options).slice(8, -1) === "String") {
    if (path.isAbsolute(options)) return require(options);
    logger.warn("Config path must be absolute,Waf not running!");
  }
};

module.exports = {
  get
};
