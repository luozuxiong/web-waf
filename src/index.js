const configHelper = require("./utils/config-helper");
const Waf = require("./core/Waf");

module.exports = options => (...argv) =>
  new Waf(Array.from(argv).concat([configHelper.get(options)]));
