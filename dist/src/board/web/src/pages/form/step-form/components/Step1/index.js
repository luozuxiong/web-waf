"use strict";
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
var Option = antd_1.Select.Option;
var formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 19,
    },
};
var Step1 = function (props) {
    var dispatch = props.dispatch, data = props.data;
    var form = antd_1.Form.useForm()[0];
    if (!data) {
        return null;
    }
    var validateFields = form.validateFields;
    var onValidateForm = function () { return __awaiter(void 0, void 0, void 0, function () {
        var values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, validateFields()];
                case 1:
                    values = _a.sent();
                    if (dispatch) {
                        dispatch({
                            type: 'formAndstepForm/saveStepFormData',
                            payload: values,
                        });
                        dispatch({
                            type: 'formAndstepForm/saveCurrentStep',
                            payload: 'confirm',
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<>
      <antd_1.Form {...formItemLayout} form={form} layout="horizontal" className={index_less_1.default.stepForm} hideRequiredMark initialValues={data}>
        <antd_1.Form.Item label="付款账户" name="payAccount" rules={[{ required: true, message: '请选择付款账户' }]}>
          <antd_1.Select placeholder="test@example.com">
            <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
          </antd_1.Select>
        </antd_1.Form.Item>
        <antd_1.Form.Item label="收款账户">
          <antd_1.Input.Group compact>
            <antd_1.Select defaultValue="alipay" style={{ width: 100 }}>
              <Option value="alipay">支付宝</Option>
              <Option value="bank">银行账户</Option>
            </antd_1.Select>
            <antd_1.Form.Item noStyle name="receiverAccount" rules={[
        { required: true, message: '请输入收款人账户' },
        { type: 'email', message: '账户名应为邮箱格式' },
    ]}>
              <antd_1.Input style={{ width: 'calc(100% - 100px)' }} placeholder="test@example.com"/>
            </antd_1.Form.Item>
          </antd_1.Input.Group>
        </antd_1.Form.Item>
        <antd_1.Form.Item label="收款人姓名" name="receiverName" rules={[{ required: true, message: '请输入收款人姓名' }]}>
          <antd_1.Input placeholder="请输入收款人姓名"/>
        </antd_1.Form.Item>
        <antd_1.Form.Item label="转账金额" name="amount" rules={[
        { required: true, message: '请输入转账金额' },
        {
            pattern: /^(\d+)((?:\.\d+)?)$/,
            message: '请输入合法金额数字',
        },
    ]}>
          <antd_1.Input prefix="￥" placeholder="请输入金额"/>
        </antd_1.Form.Item>
        <antd_1.Form.Item wrapperCol={{
        xs: { span: 24, offset: 0 },
        sm: {
            span: formItemLayout.wrapperCol.span,
            offset: formItemLayout.labelCol.span,
        },
    }}>
          <antd_1.Button type="primary" onClick={onValidateForm}>
            下一步
          </antd_1.Button>
        </antd_1.Form.Item>
      </antd_1.Form>
      <antd_1.Divider style={{ margin: '40px 0 24px' }}/>
      <div className={index_less_1.default.desc}>
        <h3>说明</h3>
        <h4>转账到支付宝账户</h4>
        <p>
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        </p>
        <h4>转账到银行卡</h4>
        <p>
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        </p>
      </div>
    </>);
};
exports.default = umi_1.connect(function (_a) {
    var formAndstepForm = _a.formAndstepForm;
    return ({
        data: formAndstepForm.step,
    });
})(Step1);
//# sourceMappingURL=index.js.map