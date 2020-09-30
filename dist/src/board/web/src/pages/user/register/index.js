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
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var style_less_1 = __importDefault(require("./style.less"));
var FormItem = antd_1.Form.Item;
var Option = antd_1.Select.Option;
var InputGroup = antd_1.Input.Group;
var passwordStatusMap = {
    ok: (<div className={style_less_1.default.success}>
      <umi_1.FormattedMessage id="userandregister.strength.strong"/>
    </div>),
    pass: (<div className={style_less_1.default.warning}>
      <umi_1.FormattedMessage id="userandregister.strength.medium"/>
    </div>),
    poor: (<div className={style_less_1.default.error}>
      <umi_1.FormattedMessage id="userandregister.strength.short"/>
    </div>),
};
var passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    poor: 'exception',
};
var Register = function (_a) {
    var submitting = _a.submitting, dispatch = _a.dispatch, userAndregister = _a.userAndregister;
    var _b = react_1.useState(0), count = _b[0], setcount = _b[1];
    var _c = react_1.useState(false), visible = _c[0], setvisible = _c[1];
    var _d = react_1.useState('86'), prefix = _d[0], setprefix = _d[1];
    var _e = react_1.useState(false), popover = _e[0], setpopover = _e[1];
    var confirmDirty = false;
    var interval;
    var form = antd_1.Form.useForm()[0];
    react_1.useEffect(function () {
        if (!userAndregister) {
            return;
        }
        var account = form.getFieldValue('mail');
        if (userAndregister.status === 'ok') {
            antd_1.message.success('注册成功！');
            umi_1.history.push({
                pathname: '/user/register-result',
                state: {
                    account: account,
                },
            });
        }
    }, [userAndregister]);
    react_1.useEffect(function () { return function () {
        clearInterval(interval);
    }; }, []);
    var onGetCaptcha = function () {
        var counts = 59;
        setcount(counts);
        interval = window.setInterval(function () {
            counts -= 1;
            setcount(counts);
            if (counts === 0) {
                clearInterval(interval);
            }
        }, 1000);
    };
    var getPasswordStatus = function () {
        var value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'poor';
    };
    var onFinish = function (values) {
        dispatch({
            type: 'userAndregister/submit',
            payload: __assign(__assign({}, values), { prefix: prefix }),
        });
    };
    var checkConfirm = function (_, value) {
        var promise = Promise;
        if (value && value !== form.getFieldValue('password')) {
            return promise.reject(umi_1.formatMessage({ id: 'userandregister.password.twice' }));
        }
        return promise.resolve();
    };
    var checkPassword = function (_, value) {
        var promise = Promise;
        // 没有值的情况
        if (!value) {
            setvisible(!!value);
            return promise.reject(umi_1.formatMessage({ id: 'userandregister.password.required' }));
        }
        // 有值的情况
        if (!visible) {
            setvisible(!!value);
        }
        setpopover(!popover);
        if (value.length < 6) {
            return promise.reject('');
        }
        if (value && confirmDirty) {
            form.validateFields(['confirm']);
        }
        return promise.resolve();
    };
    var changePrefix = function (value) {
        setprefix(value);
    };
    var renderPasswordProgress = function () {
        var value = form.getFieldValue('password');
        var passwordStatus = getPasswordStatus();
        return value && value.length ? (<div className={style_less_1.default["progress-" + passwordStatus]}>
        <antd_1.Progress status={passwordProgressMap[passwordStatus]} className={style_less_1.default.progress} strokeWidth={6} percent={value.length * 10 > 100 ? 100 : value.length * 10} showInfo={false}/>
      </div>) : null;
    };
    return (<div className={style_less_1.default.main}>
      <h3>
        <umi_1.FormattedMessage id="userandregister.register.register"/>
      </h3>
      <antd_1.Form form={form} name="UserRegister" onFinish={onFinish}>
        <FormItem name="mail" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'userandregister.email.required' }),
        },
        {
            type: 'email',
            message: umi_1.formatMessage({ id: 'userandregister.email.wrong-format' }),
        },
    ]}>
          <antd_1.Input size="large" placeholder={umi_1.formatMessage({ id: 'userandregister.email.placeholder' })}/>
        </FormItem>
        <antd_1.Popover getPopupContainer={function (node) {
        if (node && node.parentNode) {
            return node.parentNode;
        }
        return node;
    }} content={visible && (<div style={{ padding: '4px 0' }}>
                {passwordStatusMap[getPasswordStatus()]}
                {renderPasswordProgress()}
                <div style={{ marginTop: 10 }}>
                  <umi_1.FormattedMessage id="userandregister.strength.msg"/>
                </div>
              </div>)} overlayStyle={{ width: 240 }} placement="right" visible={visible}>
          <FormItem name="password" className={form.getFieldValue('password') &&
        form.getFieldValue('password').length > 0 &&
        style_less_1.default.password} rules={[
        {
            validator: checkPassword,
        },
    ]}>
            <antd_1.Input size="large" type="password" placeholder={umi_1.formatMessage({ id: 'userandregister.password.placeholder' })}/>
          </FormItem>
        </antd_1.Popover>
        <FormItem name="confirm" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'userandregister.confirm-password.required' }),
        },
        {
            validator: checkConfirm,
        },
    ]}>
          <antd_1.Input size="large" type="password" placeholder={umi_1.formatMessage({ id: 'userandregister.confirm-password.placeholder' })}/>
        </FormItem>
        <InputGroup compact>
          <antd_1.Select size="large" value={prefix} onChange={changePrefix} style={{ width: '20%' }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </antd_1.Select>
          <FormItem style={{ width: '80%' }} name="mobile" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'userandregister.phone-number.required' }),
        },
        {
            pattern: /^\d{11}$/,
            message: umi_1.formatMessage({ id: 'userandregister.phone-number.wrong-format' }),
        },
    ]}>
            <antd_1.Input size="large" placeholder={umi_1.formatMessage({ id: 'userandregister.phone-number.placeholder' })}/>
          </FormItem>
        </InputGroup>
        <antd_1.Row gutter={8}>
          <antd_1.Col span={16}>
            <FormItem name="captcha" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'userandregister.verification-code.required' }),
        },
    ]}>
              <antd_1.Input size="large" placeholder={umi_1.formatMessage({ id: 'userandregister.verification-code.placeholder' })}/>
            </FormItem>
          </antd_1.Col>
          <antd_1.Col span={8}>
            <antd_1.Button size="large" disabled={!!count} className={style_less_1.default.getCaptcha} onClick={onGetCaptcha}>
              {count
        ? count + " s"
        : umi_1.formatMessage({ id: 'userandregister.register.get-verification-code' })}
            </antd_1.Button>
          </antd_1.Col>
        </antd_1.Row>
        <FormItem>
          <antd_1.Button size="large" loading={submitting} className={style_less_1.default.submit} type="primary" htmlType="submit">
            <umi_1.FormattedMessage id="userandregister.register.register"/>
          </antd_1.Button>
          <umi_1.Link className={style_less_1.default.login} to="/user/login">
            <umi_1.FormattedMessage id="userandregister.register.sign-in"/>
          </umi_1.Link>
        </FormItem>
      </antd_1.Form>
    </div>);
};
exports.default = umi_1.connect(function (_a) {
    var userAndregister = _a.userAndregister, loading = _a.loading;
    return ({
        userAndregister: userAndregister,
        submitting: loading.effects['userAndregister/submit'],
    });
})(Register);
//# sourceMappingURL=index.js.map