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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var index_less_1 = __importDefault(require("./index.less"));
var Step = antd_1.Steps.Step;
var desc1 = (<div className={index_less_1.default.title}>
    <div style={{ margin: '8px 0 4px' }}>
      <umi_1.FormattedMessage id="resultandsuccess.success.step1-operator" defaultMessage="Qu Lili"/>
      <icons_1.DingdingOutlined style={{ marginLeft: 8, color: '#00A0E9' }}/>
    </div>
    <div>2016-12-12 12:32</div>
  </div>);
var desc2 = (<div style={{ fontSize: 12 }} className={index_less_1.default.title}>
    <div style={{ margin: '8px 0 4px' }}>
      <umi_1.FormattedMessage id="resultandsuccess.success.step2-operator" defaultMessage="Zhou Maomao"/>
      <a href="">
        <icons_1.DingdingOutlined style={{ color: '#00A0E9', marginLeft: 8 }}/>
        <umi_1.FormattedMessage id="resultandsuccess.success.step2-extra" defaultMessage="Urge"/>
      </a>
    </div>
  </div>);
var content = (<>
    <antd_1.Descriptions title={umi_1.formatMessage({
    id: 'resultandsuccess.success.operate-title',
    defaultMessage: 'Project Name',
})}>
      <antd_1.Descriptions.Item label={<umi_1.FormattedMessage id="resultandsuccess.success.operate-id" defaultMessage="Project ID："/>}>
        23421
      </antd_1.Descriptions.Item>
      <antd_1.Descriptions.Item label={<umi_1.FormattedMessage id="resultandsuccess.success.principal" defaultMessage="Principal："/>}>
        <umi_1.FormattedMessage id="resultandsuccess.success.step1-operator" defaultMessage="Qu Lili"/>
      </antd_1.Descriptions.Item>
      <antd_1.Descriptions.Item label={<umi_1.FormattedMessage id="resultandsuccess.success.operate-time" defaultMessage="Effective time："/>}>
        2016-12-12 ~ 2017-12-12
      </antd_1.Descriptions.Item>
    </antd_1.Descriptions>
    <br />
    <antd_1.Steps progressDot current={1}>
      <Step title={<span style={{ fontSize: 14 }}>
            <umi_1.FormattedMessage id="resultandsuccess.success.step1-title" defaultMessage="Create project"/>
          </span>} description={desc1}/>
      <Step title={<span style={{ fontSize: 14 }}>
            <umi_1.FormattedMessage id="resultandsuccess.success.step2-title" defaultMessage="Departmental preliminary review"/>
          </span>} description={desc2}/>
      <Step title={<span style={{ fontSize: 14 }}>
            <umi_1.FormattedMessage id="resultandsuccess.success.step3-title" defaultMessage="Financial review"/>
          </span>}/>
      <Step title={<span style={{ fontSize: 14 }}>
            <umi_1.FormattedMessage id="resultandsuccess.success.step4-title" defaultMessage="Finish"/>
          </span>}/>
    </antd_1.Steps>
  </>);
var extra = (<react_1.Fragment>
    <antd_1.Button type="primary">
      <umi_1.FormattedMessage id="resultandsuccess.success.btn-return" defaultMessage="Back to list"/>
    </antd_1.Button>
    <antd_1.Button>
      <umi_1.FormattedMessage id="resultandsuccess.success.btn-project" defaultMessage="View project"/>
    </antd_1.Button>
    <antd_1.Button>
      <umi_1.FormattedMessage id="resultandsuccess.success.btn-print" defaultMessage="Print"/>
    </antd_1.Button>
  </react_1.Fragment>);
exports.default = (function () { return (<pro_layout_1.GridContent>
    <antd_1.Card bordered={false}>
      <antd_1.Result status="success" title={umi_1.formatMessage({ id: 'resultandsuccess.success.title' })} subTitle={umi_1.formatMessage({ id: 'resultandsuccess.success.description' })} extra={extra} style={{ marginBottom: 16 }}>
        {content}
      </antd_1.Result>
    </antd_1.Card>
  </pro_layout_1.GridContent>); });
//# sourceMappingURL=index.js.map