import Path from "path";

// 应用根目录
export const rootDir: string = Path.resolve(
  __dirname,
  "./"
);
// waf文件目录
export const wafDir: string = Path.resolve(rootDir, ".waf");

export const configName: string = "waf.config.js";

