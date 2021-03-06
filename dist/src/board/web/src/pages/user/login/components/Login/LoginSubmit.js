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
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var index_less_1 = __importDefault(require("./index.less"));
var FormItem = antd_1.Form.Item;
var LoginSubmit = function (_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var clsString = classnames_1.default(index_less_1.default.submit, className);
    return (<FormItem>
      <antd_1.Button size="large" className={clsString} type="primary" htmlType="submit" {...rest}/>
    </FormItem>);
};
exports.default = LoginSubmit;
//# sourceMappingURL=LoginSubmit.js.map