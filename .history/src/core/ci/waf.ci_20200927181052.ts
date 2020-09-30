#!/usr/bin/env node
const getProcessArgs = () => {
  let argv: any = {};
  return process.argv.slice(2).forEach((arr) => {
    const item = arr.split("=");
    if (item) {
      argv[item[0].slice(2)] = item[1];
    }
  });
};
// 启动参数
const argv = getProcessArgs();

console.log(argv);
