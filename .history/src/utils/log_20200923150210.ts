import log4js from "log4js";
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
export default class Log {
  static console(message: string): void {}
}
