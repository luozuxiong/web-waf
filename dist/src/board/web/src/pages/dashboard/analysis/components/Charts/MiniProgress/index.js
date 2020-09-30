"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var index_less_1 = __importDefault(require("./index.less"));
var MiniProgress = function (_a) {
    var targetLabel = _a.targetLabel, target = _a.target, _b = _a.color, color = _b === void 0 ? 'rgb(19, 194, 194)' : _b, strokeWidth = _a.strokeWidth, percent = _a.percent;
    return (<div className={index_less_1.default.miniProgress}>
    <antd_1.Tooltip title={targetLabel}>
      <div className={index_less_1.default.target} style={{ left: target ? target + "%" : undefined }}>
        <span style={{ backgroundColor: color || undefined }}/>
        <span style={{ backgroundColor: color || undefined }}/>
      </div>
    </antd_1.Tooltip>
    <div className={index_less_1.default.progressWrap}>
      <div className={index_less_1.default.progress} style={{
        backgroundColor: color || undefined,
        width: percent ? percent + "%" : undefined,
        height: strokeWidth || undefined,
    }}/>
    </div>
  </div>);
};
exports.default = MiniProgress;
//# sourceMappingURL=index.js.map