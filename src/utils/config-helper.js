const path = require("path");
const toString = Object.prototype.toString;
const Logger = require("./log");
const get = function(options) {
  const log = new Logger(options);
  if (toString.call(options).slice(8, -1) === "String") {
    if (path.isAbsolute(options)) return require(options);
    log.warn("Config path must be absolute,Waf not running!");
  }
};

module.exports = {
  get
};
