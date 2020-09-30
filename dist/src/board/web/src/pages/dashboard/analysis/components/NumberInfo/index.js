"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var index_less_1 = __importDefault(require("./index.less"));
var NumberInfo = function (_a) {
    var _b;
    var theme = _a.theme, title = _a.title, subTitle = _a.subTitle, total = _a.total, subTotal = _a.subTotal, status = _a.status, suffix = _a.suffix, gap = _a.gap, rest = __rest(_a, ["theme", "title", "subTitle", "total", "subTotal", "status", "suffix", "gap"]);
    return (<div className={classnames_1.default(index_less_1.default.numberInfo, (_b = {},
        _b[index_less_1.default["numberInfo" + theme]] = theme,
        _b))} {...rest}>
    {title && (<div className={index_less_1.default.numberInfoTitle} title={typeof title === 'string' ? title : ''}>
        {title}
      </div>)}
    {subTitle && (<div className={index_less_1.default.numberInfoSubTitle} title={typeof subTitle === 'string' ? subTitle : ''}>
        {subTitle}
      </div>)}
    <div className={index_less_1.default.numberInfoValue} style={gap ? { marginTop: gap } : {}}>
      <span>
        {total}
        {suffix && <em className={index_less_1.default.suffix}>{suffix}</em>}
      </span>
      {(status || subTotal) && (<span className={index_less_1.default.subTotal}>
          {subTotal}
          {status && status === 'up' ? <icons_1.CaretUpOutlined /> : <icons_1.CaretDownOutlined />}
        </span>)}
    </div>
  </div>);
};
exports.default = NumberInfo;
//# sourceMappingURL=index.js.map