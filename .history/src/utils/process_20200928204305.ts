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
/**
 * 检查命令是否存在
 */
export function commandExits(cmd: string): boolean {
  const isWin = process.platform === "win32";
  if (isWin) {
    cmd += ".cmd";
  }
  const resp = spawnSync(cmd);

  const output = resp.output?.toString();
  const stderr = resp.stderr?.toString();

  if (isWin && stderr === "" && output) {
    return true;
  }

  return false;
}
export default {};
