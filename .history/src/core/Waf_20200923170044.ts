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
    console.log();
  }
  /**
   * 开始运行
   * @param req
   * @param res
   * @param next
   */
  apply(req: Request | any, res: Response | any, next?: NextFunction): void {
    if (typeof next === "function") {
      next();
    }
  }
}
