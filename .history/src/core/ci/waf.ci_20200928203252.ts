#!/usr/bin/env node

import { getArgv, checkCmdExits } from "../../utils/process";

const argv: object = getArgv();

if (checkCmdExits("pm2")) {
  start();
}

function start(): void {}
console.log(argv);
