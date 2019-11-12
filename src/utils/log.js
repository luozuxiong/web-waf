const log4js = require("log4js");
const path = require("path");
const pathConstant = require("./../config/constants/paths");
const { root,wafDirname } = pathConstant;
const pkg = require(path.resolve(root, "package.json"));
console.log(wafDirname + `/logs/${pkg.name || "waf"}`)
log4js.configure({
  appenders: {
    console: {
      type: "console"
    },
    data_file: {
      type: "dateFile",
      filename: wafDirname + `/${pkg.name || "waf"}`,
      alwaysIncludePattern: true,
      daysToKeep: 10,
      //compress : true,
      pattern: "-yyyy-MM-dd-hh.log",
      encoding: "utf-8"
    }
  },
  categories: {
    default: { appenders: ["data_file"], level: "info" },
    console: { appenders: ["console"], level: "info" }
  }
});
module.exports = log4js.getLogger();

module.exports.console = log4js.getLogger("console");
