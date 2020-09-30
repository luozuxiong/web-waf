#!/usr/bin/env node

import { getArgv, checkCmdExits } from "../../utils/process";

const argv: object = getArgv();
checkCmdExits("pm.cmd");

console.log(argv);
