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
var react_1 = __importDefault(require("react"));
var index_less_1 = __importDefault(require("./index.less"));
var Field = function (_a) {
    var label = _a.label, value = _a.value, rest = __rest(_a, ["label", "value"]);
    return (<div className={index_less_1.default.field} {...rest}>
    <span className={index_less_1.default.label}>{label}</span>
    <span className={index_less_1.default.number}>{value}</span>
  </div>);
};
exports.default = Field;
//# sourceMappingURL=index.js.map