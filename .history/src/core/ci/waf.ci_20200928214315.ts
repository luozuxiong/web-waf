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

    run.stdout.on("data", (data) => {});
    run.stderr.on("data", (data) => {});
    run.on("close", (data) => {});
  });
}
console.log(argv);
