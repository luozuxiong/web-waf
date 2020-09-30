"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var LoginContext_1 = __importDefault(require("./LoginContext"));
var TabPane = antd_1.Tabs.TabPane;
var generateId = (function () {
    var i = 0;
    return function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        i += 1;
        return "" + prefix + i;
    };
})();
var LoginTab = function (props) {
    react_1.useEffect(function () {
        var uniqueId = generateId('login-tab-');
        var tabUtil = props.tabUtil;
        if (tabUtil) {
            tabUtil.addTab(uniqueId);
        }
    }, []);
    var children = props.children;
    return <TabPane {...props}>{props.active && children}</TabPane>;
};
var WrapContext = function (props) { return (<LoginContext_1.default.Consumer>
    {function (value) { return <LoginTab tabUtil={value.tabUtil} {...props}/>; }}
  </LoginContext_1.default.Consumer>); };
// 标志位 用来判断是不是自定义组件
WrapContext.typeName = 'LoginTab';
exports.default = WrapContext;
//# sourceMappingURL=LoginTab.js.map