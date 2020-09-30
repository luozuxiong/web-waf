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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var FormItem = antd_1.Form.Item;
var Step = antd_1.Steps.Step;
var TextArea = antd_1.Input.TextArea;
var Option = antd_1.Select.Option;
var RadioGroup = antd_1.Radio.Group;
var formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
};
var UpdateForm = function (props) {
    var _a = react_1.useState({
        name: props.values.name,
        desc: props.values.desc,
        key: props.values.key,
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month',
    }), formVals = _a[0], setFormVals = _a[1];
    var _b = react_1.useState(0), currentStep = _b[0], setCurrentStep = _b[1];
    var form = antd_1.Form.useForm()[0];
    var handleUpdate = props.onSubmit, handleUpdateModalVisible = props.onCancel, updateModalVisible = props.updateModalVisible, values = props.values;
    var forward = function () { return setCurrentStep(currentStep + 1); };
    var backward = function () { return setCurrentStep(currentStep - 1); };
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var fieldsValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, form.validateFields()];
                case 1:
                    fieldsValue = _a.sent();
                    setFormVals(__assign(__assign({}, formVals), fieldsValue));
                    if (currentStep < 2) {
                        forward();
                    }
                    else {
                        handleUpdate(__assign(__assign({}, formVals), fieldsValue));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var renderContent = function () {
        if (currentStep === 1) {
            return (<>
          <FormItem name="target" label="监控对象">
            <antd_1.Select style={{ width: '100%' }}>
              <Option value="0">表一</Option>
              <Option value="1">表二</Option>
            </antd_1.Select>
          </FormItem>
          <FormItem name="template" label="规则模板">
            <antd_1.Select style={{ width: '100%' }}>
              <Option value="0">规则模板一</Option>
              <Option value="1">规则模板二</Option>
            </antd_1.Select>
          </FormItem>
          <FormItem name="type" label="规则类型">
            <RadioGroup>
              <antd_1.Radio value="0">强</antd_1.Radio>
              <antd_1.Radio value="1">弱</antd_1.Radio>
            </RadioGroup>
          </FormItem>
        </>);
        }
        if (currentStep === 2) {
            return (<>
          <FormItem name="time" label="开始时间" rules={[{ required: true, message: '请选择开始时间！' }]}>
            <antd_1.DatePicker style={{ width: '100%' }} showTime format="YYYY-MM-DD HH:mm:ss" placeholder="选择开始时间"/>
          </FormItem>
          <FormItem name="frequency" label="调度周期">
            <antd_1.Select style={{ width: '100%' }}>
              <Option value="month">月</Option>
              <Option value="week">周</Option>
            </antd_1.Select>
          </FormItem>
        </>);
        }
        return (<>
        <FormItem name="name" label="规则名称" rules={[{ required: true, message: '请输入规则名称！' }]}>
          <antd_1.Input placeholder="请输入"/>
        </FormItem>
        <FormItem name="desc" label="规则描述" rules={[{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }]}>
          <TextArea rows={4} placeholder="请输入至少五个字符"/>
        </FormItem>
      </>);
    };
    var renderFooter = function () {
        if (currentStep === 1) {
            return (<>
          <antd_1.Button style={{ float: 'left' }} onClick={backward}>
            上一步
          </antd_1.Button>
          <antd_1.Button onClick={function () { return handleUpdateModalVisible(false, values); }}>取消</antd_1.Button>
          <antd_1.Button type="primary" onClick={function () { return handleNext(); }}>
            下一步
          </antd_1.Button>
        </>);
        }
        if (currentStep === 2) {
            return (<>
          <antd_1.Button style={{ float: 'left' }} onClick={backward}>
            上一步
          </antd_1.Button>
          <antd_1.Button onClick={function () { return handleUpdateModalVisible(false, values); }}>取消</antd_1.Button>
          <antd_1.Button type="primary" onClick={function () { return handleNext(); }}>
            完成
          </antd_1.Button>
        </>);
        }
        return (<>
        <antd_1.Button onClick={function () { return handleUpdateModalVisible(false, values); }}>取消</antd_1.Button>
        <antd_1.Button type="primary" onClick={function () { return handleNext(); }}>
          下一步
        </antd_1.Button>
      </>);
    };
    return (<antd_1.Modal width={640} bodyStyle={{ padding: '32px 40px 48px' }} destroyOnClose title="规则配置" visible={updateModalVisible} footer={renderFooter()} onCancel={function () { return handleUpdateModalVisible(); }}>
      <antd_1.Steps style={{ marginBottom: 28 }} size="small" current={currentStep}>
        <Step title="基本信息"/>
        <Step title="配置规则属性"/>
        <Step title="设定调度周期"/>
      </antd_1.Steps>
      <antd_1.Form {...formLayout} form={form} initialValues={{
        target: formVals.target,
        template: formVals.template,
        type: formVals.type,
        frequency: formVals.frequency,
        name: formVals.name,
        desc: formVals.desc,
    }}>
        {renderContent()}
      </antd_1.Form>
    </antd_1.Modal>);
};
exports.default = UpdateForm;
//# sourceMappingURL=UpdateForm.js.map