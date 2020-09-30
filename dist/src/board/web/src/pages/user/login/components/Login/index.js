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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var use_merge_value_1 = __importDefault(require("use-merge-value"));
var classnames_1 = __importDefault(require("classnames"));
var LoginContext_1 = __importDefault(require("./LoginContext"));
var LoginItem_1 = __importDefault(require("./LoginItem"));
var LoginSubmit_1 = __importDefault(require("./LoginSubmit"));
var LoginTab_1 = __importDefault(require("./LoginTab"));
var index_less_1 = __importDefault(require("./index.less"));
var Login = function (props) {
    var className = props.className;
    var _a = react_1.useState([]), tabs = _a[0], setTabs = _a[1];
    var _b = react_1.useState({}), active = _b[0], setActive = _b[1];
    var _c = use_merge_value_1.default('', {
        value: props.activeKey,
        onChange: props.onTabChange,
    }), type = _c[0], setType = _c[1];
    var TabChildren = [];
    var otherChildren = [];
    react_1.default.Children.forEach(props.children, function (child) {
        if (!child) {
            return;
        }
        if (child.type.typeName === 'LoginTab') {
            TabChildren.push(child);
        }
        else {
            otherChildren.push(child);
        }
    });
    return (<LoginContext_1.default.Provider value={{
        tabUtil: {
            addTab: function (id) {
                setTabs(__spreadArrays(tabs, [id]));
            },
            removeTab: function (id) {
                setTabs(tabs.filter(function (currentId) { return currentId !== id; }));
            },
        },
        updateActive: function (activeItem) {
            if (active && active[type]) {
                active[type].push(activeItem);
            }
            else if (active) {
                active[type] = [activeItem];
            }
            setActive(active);
        },
    }}>
      <div className={classnames_1.default(className, index_less_1.default.login)}>
        <antd_1.Form form={props.form} onFinish={function (values) {
        if (props.onSubmit) {
            props.onSubmit(values);
        }
    }}>
          {tabs.length ? (<react_1.default.Fragment>
              <antd_1.Tabs animated={false} className={index_less_1.default.tabs} activeKey={type} onChange={function (activeKey) {
        setType(activeKey);
    }}>
                {TabChildren}
              </antd_1.Tabs>
              {otherChildren}
            </react_1.default.Fragment>) : (props.children)}
        </antd_1.Form>
      </div>
    </LoginContext_1.default.Provider>);
};
Login.Tab = LoginTab_1.default;
Login.Submit = LoginSubmit_1.default;
Login.UserName = LoginItem_1.default.UserName;
Login.Password = LoginItem_1.default.Password;
Login.Mobile = LoginItem_1.default.Mobile;
Login.Captcha = LoginItem_1.default.Captcha;
exports.default = Login;
//# sourceMappingURL=index.js.map