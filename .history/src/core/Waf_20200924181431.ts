import Config from "./Config";
import Path from "path";
import FS from "fs";
import { rootDir, configName,StringValidator } from "../constants";
import WafError from "./Error";
import { notFoundConfig } from "../config/constants/error-definitions";
import express, { NextFunction } from "express";
var app = express();

export default class Waf {
  constructor() {
    if (FS.existsSync(Path.resolve(rootDir, configName))) {
      new WafError(notFoundConfig);
      return;
    }
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
