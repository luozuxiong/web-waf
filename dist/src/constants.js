"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configName = exports.wafDir = exports.rootDir = void 0;
var path_1 = __importDefault(require("path"));
// 应用根目录
exports.rootDir = path_1.default.resolve(__dirname, "../example");
// waf文件目录
exports.wafDir = path_1.default.resolve(exports.rootDir, ".waf");
exports.configName = "waf.config.js";
//# sourceMappingURL=constants.js.map