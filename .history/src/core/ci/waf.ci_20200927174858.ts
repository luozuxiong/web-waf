#!/usr/bin/env node
const getProcessArgs = () => {
  const arrs = process.argv.slice(2);
  return arrs.map((arr) => {
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
