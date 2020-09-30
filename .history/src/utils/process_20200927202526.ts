import { spawnSync } from "child_process";
/**
 * 获取启动的命令行参数
 */
export function getArgv(): object {
  let argv: any = {};
  process.argv.slice(2).forEach((arr) => {
    const [key, value] = arr.split("=");
    if (key) {
      argv[key.includes("--") ? key.slice(2) : key] = value;
    }
  });
  return argv;
}

export default {};
