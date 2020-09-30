#!/usr/bin/env node
const getProcessArgs = () => {
  let argv: any = {};
  process.argv.slice(2).forEach((arr) => {
    const [key, value] = arr.split("=");
    if (key) {
        console.log(key)
      argv[key.includes("=") ? key.slice(2) : key] = value;
    }
  });
  return argv;
};
// 启动参数
const argv = getProcessArgs();

console.log(argv);
