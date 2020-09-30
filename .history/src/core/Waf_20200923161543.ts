import Config from "./Config";
import Path from "path";
import FS from "fs";
import { root, configName } from "../constants";
import WafError from "./Error";
import { notFoundConfig } from "../config/constants/error-definitions";

export default class Waf {
  constructor(config: Config) {
    if (FS.existsSync(Path.resolve(root, configName))) {
      return new WafError(notFoundConfig);
    }
    console.log(config);
  }
  private parseConfig(): void {}
}
