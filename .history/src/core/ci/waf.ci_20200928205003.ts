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
function installDependencies(): void {
  spawn("npm", ["install", "pm2", "-g"]);
}
console.log(argv);
