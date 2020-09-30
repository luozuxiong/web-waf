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
    error: { appenders: ["error"], level: "error" },
  },
});
export default class Log {
  private static infoLogger = log4js.getLogger("console");

  private static errorLogger = log4js.getLogger("error");

  static console(message: string): void {
    Log.infoLogger.info(message);
  }
  static error(message: string): void {
    Log.errorLogger.error(message);
  }
}
