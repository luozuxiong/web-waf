#!/usr/bin/env node

import { getArgv, commandExits } from "../../utils/process";
import { spawn } from "child_process";

const argv: object = getArgv();

if (commandExits("pm2")) {
  start();
} else {
  installDependencies();
}
/**
 * 启动
 */
function start(): void {}
/**
 * 安装依赖
 */
function installDependencies(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const run = spawn("npm", ["install", "pm2", "-g"]);
    //安装成功
    run.stdout.on("data", (data) => {});
    // 安装错误
    run.stderr.on("data", (data) => {});
    //安装命令退出
    run.on("close", (data) => {
        console.log('退出')
        console.log(data)
    });
  });
}
console.log(argv);
