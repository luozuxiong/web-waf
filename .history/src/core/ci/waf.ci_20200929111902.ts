#!/usr/bin/env node

import { getArgv, commandExits } from "../../utils/process";
import { spawn } from "child_process";
import { exec, which } from "shelljs";
import { prompt } from "inquirer";

const argv: object = getArgv();

if (which("pm3")) {
   start();
} else {
  prompt([
    {
      name: "installTips",
      type: "rawlist",
      message: "检测到系统未安装PM2，是否继续（继续将会全局安装）",
      choices: ["YES", "NO"],
      default:'YES'
    },
  ]).then((res) => {
    const [answer] = Object.values(res);
    if (answer === "YES") {
    }
  });
  //   installDependencies();
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
    run.stdout.on("data", (data: Buffer) => {
      console.log("stdout");
      console.log(data.toString());
      resolve(false);
    });
    // 安装错误
    run.stderr.on("data", (data: Buffer) => {
      console.log("stderr");
      console.log(data.toString());
      resolve(false);
    });
    //安装命令退出
    run.on("close", (data: Buffer) => {
      console.log("退出");
      console.log(data.toString());
      resolve(true);
    });
  });
}
console.log(argv);
