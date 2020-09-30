"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandExits = exports.getArgv = void 0;
var child_process_1 = require("child_process");
/**
 * 获取启动的命令行参数
 */
function getArgv() {
    var argv = {};
    process.argv.slice(2).forEach(function (arr) {
        var _a = arr.split("="), key = _a[0], value = _a[1];
        if (key) {
            argv[key.includes("--") ? key.slice(2) : key] = value;
        }
    });
    return argv;
}
exports.getArgv = getArgv;
/**
 * 检查命令是否存在
 */
function commandExits(cmd) {
    var _a, _b;
    var isWin = process.platform === "win32";
    if (isWin) {
        cmd += ".cmd";
    }
    var resp = child_process_1.spawnSync(cmd);
    var output = (_a = resp.output) === null || _a === void 0 ? void 0 : _a.toString();
    var stderr = (_b = resp.stderr) === null || _b === void 0 ? void 0 : _b.toString();
    if (isWin && stderr === "" && output) {
        return true;
    }
    return false;
}
exports.commandExits = commandExits;
exports.default = {};
//# sourceMappingURL=process.js.map