#!/usr/bin/env node

import { getArgv, commandExits } from "../../utils/process";
import { exec, ExecOutputReturnValue, which } from "shelljs";
import { prompt, StreamOptions } from "inquirer";
import ls from "log-symbols";
import ora from "ora";
import chalk from "chalk";
const dependencies = ["pm2"];
const argv: object = getArgv();
const instaltionSpinner = ora(
  chalk.green(`正在安装依赖${dependencies.join()}`)
);

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
        return installDependencies();
      }
      exit(0);
    })
    .then((result: ExecOutputReturnValue) => {
      instaltionSpinner.stop();
      if (result.code === 0) {
        console.log(ls.success, chalk.blue("依赖安装成功！"));
      } else {
        console.log(ls.error, chalk.red("依赖安装失败:"));
        console.log(result.stderr?.toString());
        exit(1);
      }
    });
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
    instaltionSpinner.start();
    const result = exec(`npm install ${dependencies.join(" ")} -g`);
    resolve(result);
  });
}

function exit(code: number): void {
  process.exit(code);
}
