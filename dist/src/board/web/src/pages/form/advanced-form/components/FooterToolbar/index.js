"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var classnames_1 = __importDefault(require("classnames"));
var index_less_1 = __importDefault(require("./index.less"));
var FooterToolbar = /** @class */ (function (_super) {
    __extends(FooterToolbar, _super);
    function FooterToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getWidth = function (_a) {
            var collapsed = _a.collapsed, isMobile = _a.isMobile, siderWidth = _a.siderWidth;
            var sider = document.querySelector('.ant-layout-sider');
            if (!sider) {
                return undefined;
            }
            return isMobile ? undefined : "calc(100% - " + (collapsed ? 48 : siderWidth || 256) + "px)";
        };
        return _this;
    }
    FooterToolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, extra = _a.extra, restProps = __rest(_a, ["children", "className", "extra"]);
        return (<pro_layout_1.RouteContext.Consumer>
        {function (value) { return (<div className={classnames_1.default(className, index_less_1.default.toolbar)} style={{ width: _this.getWidth(value), transition: '0.3s all' }} {...restProps}>
            <div className={index_less_1.default.left}>{extra}</div>
            <div className={index_less_1.default.right}>{children}</div>
          </div>); }}
      </pro_layout_1.RouteContext.Consumer>);
    };
    return FooterToolbar;
}(react_1.Component));
exports.default = FooterToolbar;
//# sourceMappingURL=index.js.map