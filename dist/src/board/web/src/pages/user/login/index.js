"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var style_less_1 = __importDefault(require("./style.less"));
var Login_1 = __importDefault(require("./components/Login"));
var Tab = Login_1.default.Tab, UserName = Login_1.default.UserName, Password = Login_1.default.Password, Mobile = Login_1.default.Mobile, Captcha = Login_1.default.Captcha, Submit = Login_1.default.Submit;
var LoginMessage = function (_a) {
    var content = _a.content;
    return (<antd_1.Alert style={{
        marginBottom: 24,
    }} message={content} type="error" showIcon/>);
};
var Login = function (props) {
    var _a = props.userAndlogin, userAndlogin = _a === void 0 ? {} : _a, submitting = props.submitting;
    var status = userAndlogin.status, loginType = userAndlogin.type;
    var _b = react_1.useState(true), autoLogin = _b[0], setAutoLogin = _b[1];
    var _c = react_1.useState('account'), type = _c[0], setType = _c[1];
    var handleSubmit = function (values) {
        var dispatch = props.dispatch;
        dispatch({
            type: 'userAndlogin/login',
            payload: __assign(__assign({}, values), { type: type }),
        });
    };
    return (<div className={style_less_1.default.main}>
      <Login_1.default activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          {status === 'error' && loginType === 'account' && !submitting && (<LoginMessage content="账户或密码错误（admin/ant.design）"/>)}

          <UserName name="userName" placeholder="用户名: admin or user" rules={[
        {
            required: true,
            message: '请输入用户名!',
        },
    ]}/>
          <Password name="password" placeholder="密码: ant.design" rules={[
        {
            required: true,
            message: '请输入密码！',
        },
    ]}/>
        </Tab>
        <Tab key="mobile" tab="手机号登录">
          {status === 'error' && loginType === 'mobile' && !submitting && (<LoginMessage content="验证码错误"/>)}
          <Mobile name="mobile" placeholder="手机号" rules={[
        {
            required: true,
            message: '请输入手机号！',
        },
        {
            pattern: /^1\d{10}$/,
            message: '手机号格式错误！',
        },
    ]}/>
          <Captcha name="captcha" placeholder="验证码" countDown={120} getCaptchaButtonText="" getCaptchaSecondText="秒" rules={[
        {
            required: true,
            message: '请输入验证码！',
        },
    ]}/>
        </Tab>
        <div>
          <antd_1.Checkbox checked={autoLogin} onChange={function (e) { return setAutoLogin(e.target.checked); }}>
            自动登录
          </antd_1.Checkbox>
          <a style={{
        float: 'right',
    }}>
            忘记密码
          </a>
        </div>
        <Submit loading={submitting}>登录</Submit>
        <div className={style_less_1.default.other}>
          其他登录方式
          <icons_1.AlipayCircleOutlined className={style_less_1.default.icon}/>
          <icons_1.TaobaoCircleOutlined className={style_less_1.default.icon}/>
          <icons_1.WeiboCircleOutlined className={style_less_1.default.icon}/>
          <umi_1.Link className={style_less_1.default.register} to="/user/register">
            注册账户
          </umi_1.Link>
        </div>
      </Login_1.default>
    </div>);
};
exports.default = umi_1.connect(function (_a) {
    var userAndlogin = _a.userAndlogin, loading = _a.loading;
    return ({
        userAndlogin: userAndlogin,
        submitting: loading.effects['userAndlogin/login'],
    });
})(Login);
//# sourceMappingURL=index.js.map