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
export function checkCmdExits(cmd: string): boolean {
  const isWin: boolean = process.platform === "win32";
  if (isWin) {
    cmd += ".c2md";
  }
  const resp = spawnSync(cmd, ["lss"]);
  const output: string = resp.output?.toString();
  const stderr: string = resp.stderr?.toString();

  if (isWin && stderr === "" && output) {
    return true;
  }
  console.log(resp.stderr.toString());
  return true;
}
export default {};
