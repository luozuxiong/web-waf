"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var index_less_1 = __importDefault(require("./index.less"));
var Step3 = function (props) {
    var data = props.data, dispatch = props.dispatch;
    if (!data) {
        return null;
    }
    var payAccount = data.payAccount, receiverAccount = data.receiverAccount, receiverName = data.receiverName, amount = data.amount;
    var onFinish = function () {
        if (dispatch) {
            dispatch({
                type: 'formAndstepForm/saveCurrentStep',
                payload: 'info',
            });
        }
    };
    var information = (<div className={index_less_1.default.information}>
      <antd_1.Descriptions column={1}>
        <antd_1.Descriptions.Item label="付款账户"> {payAccount}</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="收款账户"> {receiverAccount}</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="收款人姓名"> {receiverName}</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="转账金额">
          <antd_1.Statistic value={amount} suffix="元"/>
        </antd_1.Descriptions.Item>
      </antd_1.Descriptions>
    </div>);
    var extra = (<>
      <antd_1.Button type="primary" onClick={onFinish}>
        再转一笔
      </antd_1.Button>
      <antd_1.Button>查看账单</antd_1.Button>
    </>);
    return (<antd_1.Result status="success" title="操作成功" subTitle="预计两小时内到账" extra={extra} className={index_less_1.default.result}>
      {information}
    </antd_1.Result>);
};
exports.default = umi_1.connect(function (_a) {
    var formAndstepForm = _a.formAndstepForm;
    return ({
        data: formAndstepForm.step,
    });
})(Step3);
//# sourceMappingURL=index.js.map