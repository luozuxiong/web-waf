#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = require("../../utils/process");
var shelljs_1 = require("shelljs");
var inquirer_1 = require("inquirer");
var log_symbols_1 = __importDefault(require("log-symbols"));
var ora_1 = __importDefault(require("ora"));
var chalk_1 = __importDefault(require("chalk"));
var log = console.log;
var dependencies = ["pm2"];
var argv = process_1.getArgv();
var instaltionSpinner = ora_1.default(chalk_1.default.green("\u6B63\u5728\u5B89\u88C5\u4F9D\u8D56" + dependencies.join()));
if (shelljs_1.which("pm2")) {
    start();
}
else {
    inquirer_1.prompt([
        {
            name: "installTips",
            type: "list",
            message: "检测到系统未安装PM2，是否继续（继续将会全局安装）",
            choices: ["是", "否"],
        },
    ])
        .then(function (res) {
        var answer = Object.values(res)[0];
        if (answer === "是") {
            return installDependencies();
        }
        exit(1);
    })
        .then(function (result) {
        instaltionSpinner.stop();
        if (result.code === 0) {
            log(log_symbols_1.default.success, chalk_1.default.blue("依赖安装成功！"));
            start();
        }
        else {
            log(log_symbols_1.default.error, chalk_1.default.red("依赖安装失败，请尝试手动安装"));
            exit(1);
        }
    });
}
/**
 * 启动
 */
function start() {
    log(log_symbols_1.default.success, chalk_1.default.green("正在启动..."));
}
/**
 * 安装依赖
 */
function installDependencies() {
    return new Promise(function (resolve, reject) {
        instaltionSpinner.start();
        var result = shelljs_1.exec("npm install " + dependencies.join(" ") + " -g");
        resolve(result);
    });
}
function exit(code) {
    process.exit(code);
}
//# sourceMappingURL=waf.ci.js.map