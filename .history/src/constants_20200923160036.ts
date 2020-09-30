import Path from "path";

const isTest = (process.env.isTest as any) === true;

// 应用根目录
export const root: string = Path.resolve(
  __dirname,
  isTest ? "../../../test" : "../../../../../"
);
// waf文件目录
export const wafDir: string = Path.resolve(root, ".waf");

export const configName: string = "waf.config.js";
