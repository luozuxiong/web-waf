import Config from "./Config";
import Path from "path";
import FS from "fs";
import { root,configName } from "../constants";

export default class Waf {
  constructor(config: Config) {
    if (FS.existsSync(root)) {
    }
    console.log(config);
  }
  private parseConfig(): void {}
}
