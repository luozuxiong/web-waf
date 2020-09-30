"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var constants_1 = require("../constants");
var Error_1 = __importDefault(require("./Error"));
var error_definitions_1 = require("../config/constants/error-definitions");
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var Waf = /** @class */ (function () {
    function Waf() {
        if (!fs_1.default.existsSync(path_1.default.resolve(constants_1.rootDir, constants_1.configName))) {
            new Error_1.default(error_definitions_1.notFoundConfig);
            return;
        }
    }
    /**
     * 开始运行
     * @param req
     * @param res
     * @param next
     */
    Waf.prototype.apply = function (req, res, next) {
        if (typeof next === "function") {
            next();
        }
    };
    return Waf;
}());
exports.default = Waf;
//# sourceMappingURL=Waf.js.map