#!/usr/bin/env node

import { getArgv, checkCmdExits } from "../../utils/process";

const argv: object = getArgv();
console.log(checkCmdExits("pm2");)

console.log(argv);
