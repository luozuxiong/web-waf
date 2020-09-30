"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log4js_1 = __importDefault(require("log4js"));
var constants_1 = require("./../constants");
var path_1 = __importDefault(require("path"));
var pkg = require(path_1.default.resolve(constants_1.rootDir, "package.json"));
log4js_1.default.configure({
    appenders: {
        console: {
            type: "console",
        },
        data_file: {
            type: "dateFile",
            filename: constants_1.wafDir + ("/" + (pkg.name || "waf")),
            alwaysIncludePattern: true,
            daysToKeep: 10,
            pattern: "-yyyy-MM-dd-hh.log",
            encoding: "utf-8",
        },
    },
    categories: {
        default: { appenders: ["data_file"], level: "info" },
        console: { appenders: ["console"], level: "info" },
        error: { appenders: ["console"], level: "error" },
    },
});
var Log = /** @class */ (function () {
    function Log() {
    }
    /**
     * console
     * @param message
     */
    Log.console = function (message) {
        Log.infoLogger.info(message);
    };
    /**
     * warn
     * @param message
     */
    Log.warn = function (message) {
        Log.infoLogger.warn(message);
    };
    /**
     * error
     * @param message
     */
    Log.error = function (message) {
        Log.errorLogger.error(message);
    };
    /**
     * fatal
     * @param message
     */
    Log.fatal = function (message) {
        Log.errorLogger.fatal(message);
    };
    Log.infoLogger = log4js_1.default.getLogger("console");
    Log.errorLogger = log4js_1.default.getLogger("error");
    return Log;
}());
exports.default = Log;
//# sourceMappingURL=log.js.map