#!/usr/bin/env node

import { getArgv, commandExits } from "../../utils/process";
import { spawn } from "child_process";
import { exec, which } from "shelljs";
import { prompt } from "inquirer";
import ls from "log-symbols";
import ora from "ora";
const dependencies = ["pm2"];
const argv: object = getArgv();

if (which("pm3")) {
  start();
} else {
  prompt([
    {
      name: "installTips",
      type: "list",
      message: "检测到系统未安装PM2，是否继续（继续将会全局安装）",
      choices: ["是", "否"],
    },
  ])
    .then((res) => {
      const [answer] = Object.values(res);
      if (answer === "是") {
        const spinner = ora(`正在安装依赖${dependencies.join()}`).start();
        spinner.start();
        setTimeout(()=>{
            spinner.stop()
        },10000)
        // return installDependencies();
      }
    //   process.exit(0);
    })
    .then();
}
/**
 * 启动
 */
function start(): void {}
/**
 * 安装依赖
 */
function installDependencies(): Promise<any> {
  return new Promise((resolve, reject) => {
    const result = exec(`npm install ${dependencies.join(" ")} -g`);
    console.log(result);
    resolve(true);
  });
}
