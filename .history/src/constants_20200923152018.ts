import Path from "path";

const isTest = (process.env.isTest as any) === true;

// 应用根目录
export const root: string = Path.resolve(
  __dirname,
  isTest ? "../../../test" : "../../../../../"
);

export const wafDir: string = Path.resolve(root, ".waf");
