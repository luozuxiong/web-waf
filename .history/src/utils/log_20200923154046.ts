import log4js from "log4js";
import { wafDir, root } from "./../constants";
import Path from "path";
const pkg = require(Path.resolve(root, "package.json"));

log4js.configure({
  appenders: {
    console: {
      type: "console",
    },
    data_file: {
      type: "dateFile",
      filename: wafDir + `/${pkg.name || "waf"}`,
      alwaysIncludePattern: true,
      daysToKeep: 10,
      pattern: "-yyyy-MM-dd-hh.log",
      encoding: "utf-8",
    },
  },
  categories: {
    default: { appenders: ["data_file"], level: "info" },
    console: { appenders: ["console"], level: "info" },
  },
});
export default class Log {
  static console(message: string): void {
    const logger = log4js.getLogger("console");
    logger.info(message);
  }
}
