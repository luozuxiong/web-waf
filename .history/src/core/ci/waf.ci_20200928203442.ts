#!/usr/bin/env node

import { getArgv, checkCmdExits } from "../../utils/process";

const argv: object = getArgv();

if (checkCmdExits("pm2")) {
  start();
}
/**
 * 启动
 */
function start(): void {}
/**
 * 安装依赖
 */
function installDependencies() {}
console.log(argv);
