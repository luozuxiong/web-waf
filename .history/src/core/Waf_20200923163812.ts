import Config from "./Config";
import Path from "path";
import FS from "fs";
import { root, configName } from "../constants";
import WafError from "./Error";
import { notFoundConfig } from "../config/constants/error-definitions";
import express, { NextFunction } from "express";
var app = express();

export default class Waf {
  constructor(config: Config) {
    if (FS.existsSync(Path.resolve(root, configName))) {
      new WafError(notFoundConfig);
      return;
    }
    console.log(config);
  }
  private parseConfig(): void {}
  apply(req: Request, res: Response, next: NextFunction): void {}
}
