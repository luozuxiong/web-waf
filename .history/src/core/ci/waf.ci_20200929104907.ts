#!/usr/bin/env node

import { getArgv, commandExits } from "../../utils/process";
import { spawn } from "child_process";
import {exec,which} from 'shelljs';

const argv: object = getArgv();

if (which('pm2')) {
    console.log('pm2已经按照')
//   start();
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
    const run = spawn("npm.cmd", ["install", "pm2", "-g"]);
    //安装成功
    run.stdout.on("data", (data:Buffer) => {
        console.log("stdout");
        console.log(data.toString());
        resolve(false);
    });
    // 安装错误
    run.stderr.on("data", (data:Buffer) => {
        console.log("stderr");
        console.log(data.toString());
        resolve(false);
    });
    //安装命令退出
    run.on("close", (data:Buffer) => {
      console.log("退出");
      console.log(data.toString());
      resolve(true);
    });
  });
}
console.log(argv);
