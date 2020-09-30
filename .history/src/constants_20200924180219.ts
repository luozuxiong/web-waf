import Path from "path";

const isTest = (process.env.isTest as any) === true;

// 应用根目录
export const rootDir: string = "13";
// waf文件目录
export const wafDir: string = Path.resolve(rootDir, ".waf");

export const configName: string = "waf.config.js";
