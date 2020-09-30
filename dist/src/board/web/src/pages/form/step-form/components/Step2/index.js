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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var umi_1 = require("umi");
var index_less_1 = __importDefault(require("./index.less"));
var formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};
var Step2 = function (props) {
    var form = antd_1.Form.useForm()[0];
    var data = props.data, dispatch = props.dispatch, submitting = props.submitting;
    if (!data) {
        return null;
    }
    var validateFields = form.validateFields, getFieldsValue = form.getFieldsValue;
    var onPrev = function () {
        if (dispatch) {
            var values = getFieldsValue();
            dispatch({
                type: 'formAndstepForm/saveStepFormData',
                payload: __assign(__assign({}, data), values),
            });
            dispatch({
                type: 'formAndstepForm/saveCurrentStep',
                payload: 'info',
            });
        }
    };
    var onValidateForm = function () { return __awaiter(void 0, void 0, void 0, function () {
        var values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, validateFields()];
                case 1:
                    values = _a.sent();
                    if (dispatch) {
                        dispatch({
                            type: 'formAndstepForm/submitStepForm',
                            payload: __assign(__assign({}, data), values),
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var payAccount = data.payAccount, receiverAccount = data.receiverAccount, receiverName = data.receiverName, amount = data.amount;
    return (<antd_1.Form {...formItemLayout} form={form} layout="horizontal" className={index_less_1.default.stepForm} initialValues={{ password: '123456' }}>
      <antd_1.Alert closable showIcon message="确认转账后，资金将直接打入对方账户，无法退回。" style={{ marginBottom: 24 }}/>
      <antd_1.Descriptions column={1}>
        <antd_1.Descriptions.Item label="付款账户"> {payAccount}</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="收款账户"> {receiverAccount}</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="收款人姓名"> {receiverName}</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="转账金额">
          <antd_1.Statistic value={amount} suffix="元"/>
        </antd_1.Descriptions.Item>
      </antd_1.Descriptions>
      <antd_1.Divider style={{ margin: '24px 0' }}/>
      <antd_1.Form.Item label="支付密码" name="password" required={false} rules={[{ required: true, message: '需要支付密码才能进行支付' }]}>
        <antd_1.Input type="password" autoComplete="off" style={{ width: '80%' }}/>
      </antd_1.Form.Item>
      <antd_1.Form.Item style={{ marginBottom: 8 }} wrapperCol={{
        xs: { span: 24, offset: 0 },
        sm: {
            span: formItemLayout.wrapperCol.span,
            offset: formItemLayout.labelCol.span,
        },
    }}>
        <antd_1.Button type="primary" onClick={onValidateForm} loading={submitting}>
          提交
        </antd_1.Button>
        <antd_1.Button onClick={onPrev} style={{ marginLeft: 8 }}>
          上一步
        </antd_1.Button>
      </antd_1.Form.Item>
    </antd_1.Form>);
};
exports.default = umi_1.connect(function (_a) {
    var formAndstepForm = _a.formAndstepForm, loading = _a.loading;
    return ({
        submitting: loading.effects['formAndstepForm/submitStepForm'],
        data: formAndstepForm.step,
    });
})(Step2);
//# sourceMappingURL=index.js.map