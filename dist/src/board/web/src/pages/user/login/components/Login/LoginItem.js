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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var omit_js_1 = __importDefault(require("omit.js"));
var map_1 = __importDefault(require("./map"));
var LoginContext_1 = __importDefault(require("./LoginContext"));
var index_less_1 = __importDefault(require("./index.less"));
var service_1 = require("../../service");
var FormItem = antd_1.Form.Item;
var getFormItemOptions = function (_a) {
    var onChange = _a.onChange, defaultValue = _a.defaultValue, _b = _a.customProps, customProps = _b === void 0 ? {} : _b, rules = _a.rules;
    var options = {
        rules: rules || customProps.rules,
    };
    if (onChange) {
        options.onChange = onChange;
    }
    if (defaultValue) {
        options.initialValue = defaultValue;
    }
    return options;
};
var LoginItem = function (props) {
    var _a = react_1.useState(props.countDown || 0), count = _a[0], setCount = _a[1];
    var _b = react_1.useState(false), timing = _b[0], setTiming = _b[1];
    // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil
    var onChange = props.onChange, customProps = props.customProps, defaultValue = props.defaultValue, rules = props.rules, name = props.name, getCaptchaButtonText = props.getCaptchaButtonText, getCaptchaSecondText = props.getCaptchaSecondText, updateActive = props.updateActive, type = props.type, tabUtil = props.tabUtil, restProps = __rest(props, ["onChange", "customProps", "defaultValue", "rules", "name", "getCaptchaButtonText", "getCaptchaSecondText", "updateActive", "type", "tabUtil"]);
    var onGetCaptcha = react_1.useCallback(function (mobile) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service_1.getFakeCaptcha(mobile)];
                case 1:
                    result = _a.sent();
                    if (result === false) {
                        return [2 /*return*/];
                    }
                    antd_1.message.success('获取验证码成功！验证码为：1234');
                    setTiming(true);
                    return [2 /*return*/];
            }
        });
    }); }, []);
    react_1.useEffect(function () {
        var interval = 0;
        var countDown = props.countDown;
        if (timing) {
            interval = window.setInterval(function () {
                setCount(function (preSecond) {
                    if (preSecond <= 1) {
                        setTiming(false);
                        clearInterval(interval);
                        // 重置秒数
                        return countDown || 60;
                    }
                    return preSecond - 1;
                });
            }, 1000);
        }
        return function () { return clearInterval(interval); };
    }, [timing]);
    if (!name) {
        return null;
    }
    // get getFieldDecorator props
    var options = getFormItemOptions(props);
    var otherProps = restProps || {};
    if (type === 'Captcha') {
        var inputProps_1 = omit_js_1.default(otherProps, ['onGetCaptcha', 'countDown']);
        return (<FormItem shouldUpdate>
        {function (_a) {
            var getFieldValue = _a.getFieldValue;
            return (<antd_1.Row gutter={8}>
            <antd_1.Col span={16}>
              <FormItem name={name} {...options}>
                <antd_1.Input {...customProps} {...inputProps_1}/>
              </FormItem>
            </antd_1.Col>
            <antd_1.Col span={8}>
              <antd_1.Button disabled={timing} className={index_less_1.default.getCaptcha} size="large" onClick={function () {
                var value = getFieldValue('mobile');
                onGetCaptcha(value);
            }}>
                {timing ? count + " \u79D2" : '获取验证码'}
              </antd_1.Button>
            </antd_1.Col>
          </antd_1.Row>);
        }}
      </FormItem>);
    }
    return (<FormItem name={name} {...options}>
      <antd_1.Input {...customProps} {...otherProps}/>
    </FormItem>);
};
var LoginItems = {};
Object.keys(map_1.default).forEach(function (key) {
    var item = map_1.default[key];
    LoginItems[key] = function (props) { return (<LoginContext_1.default.Consumer>
      {function (context) { return (<LoginItem customProps={item.props} rules={item.rules} {...props} type={key} {...context} updateActive={context.updateActive}/>); }}
    </LoginContext_1.default.Consumer>); };
});
exports.default = LoginItems;
//# sourceMappingURL=LoginItem.js.map