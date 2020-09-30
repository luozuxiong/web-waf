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
var Trend = function (_a) {
    var _b;
    var _c = _a.colorful, colorful = _c === void 0 ? true : _c, _d = _a.reverseColor, reverseColor = _d === void 0 ? false : _d, flag = _a.flag, children = _a.children, className = _a.className, rest = __rest(_a, ["colorful", "reverseColor", "flag", "children", "className"]);
    var classString = classnames_1.default(index_less_1.default.trendItem, (_b = {},
        _b[index_less_1.default.trendItemGrey] = !colorful,
        _b[index_less_1.default.reverseColor] = reverseColor && colorful,
        _b), className);
    return (<div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span>{children}</span>
      {flag && (<span className={index_less_1.default[flag]}>
          {flag === 'up' ? <icons_1.CaretUpOutlined /> : <icons_1.CaretDownOutlined />}
        </span>)}
    </div>);
};
exports.default = Trend;
//# sourceMappingURL=index.js.map