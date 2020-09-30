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
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var Step1_1 = __importDefault(require("./components/Step1"));
var Step2_1 = __importDefault(require("./components/Step2"));
var Step3_1 = __importDefault(require("./components/Step3"));
var style_less_1 = __importDefault(require("./style.less"));
var Step = antd_1.Steps.Step;
var getCurrentStepAndComponent = function (current) {
    switch (current) {
        case 'confirm':
            return { step: 1, component: <Step2_1.default /> };
        case 'result':
            return { step: 2, component: <Step3_1.default /> };
        case 'info':
        default:
            return { step: 0, component: <Step1_1.default /> };
    }
};
var StepForm = function (_a) {
    var current = _a.current;
    var _b = react_1.useState(<Step1_1.default />), stepComponent = _b[0], setStepComponent = _b[1];
    var _c = react_1.useState(0), currentStep = _c[0], setCurrentStep = _c[1];
    react_1.useEffect(function () {
        var _a = getCurrentStepAndComponent(current), step = _a.step, component = _a.component;
        setCurrentStep(step);
        setStepComponent(component);
    }, [current]);
    return (<pro_layout_1.PageHeaderWrapper content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。">
      <antd_1.Card bordered={false}>
        <>
          <antd_1.Steps current={currentStep} className={style_less_1.default.steps}>
            <Step title="填写转账信息"/>
            <Step title="确认转账信息"/>
            <Step title="完成"/>
          </antd_1.Steps>
          {stepComponent}
        </>
      </antd_1.Card>
    </pro_layout_1.PageHeaderWrapper>);
};
exports.default = umi_1.connect(function (_a) {
    var formAndstepForm = _a.formAndstepForm;
    return ({
        current: formAndstepForm.current,
    });
})(StepForm);
//# sourceMappingURL=index.js.map