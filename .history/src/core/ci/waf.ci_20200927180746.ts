#!/usr/bin/env node
const getProcessArgs = () => {
  return process.argv.slice(2).map((arr) => {
    const item = arr.split("=");    
    return item
      ? {
          [item[0].slice(2)]: item[1],
        }
      : {};
  });
};
// 启动参数
const argv = getProcessArgs();

console.log(argv);
