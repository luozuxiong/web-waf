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
var classnames_1 = __importDefault(require("classnames"));
var index_less_1 = __importDefault(require("./index.less"));
var StandardFormRow = function (_a) {
    var _b;
    var title = _a.title, children = _a.children, last = _a.last, block = _a.block, grid = _a.grid, rest = __rest(_a, ["title", "children", "last", "block", "grid"]);
    var cls = classnames_1.default(index_less_1.default.standardFormRow, (_b = {},
        _b[index_less_1.default.standardFormRowBlock] = block,
        _b[index_less_1.default.standardFormRowLast] = last,
        _b[index_less_1.default.standardFormRowGrid] = grid,
        _b));
    return (<div className={cls} {...rest}>
      {title && (<div className={index_less_1.default.label}>
          <span>{title}</span>
        </div>)}
      <div className={index_less_1.default.content}>{children}</div>
    </div>);
};
exports.default = StandardFormRow;
//# sourceMappingURL=index.js.map