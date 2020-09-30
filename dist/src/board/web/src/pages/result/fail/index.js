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
var Content = (<react_1.Fragment>
    <div className={index_less_1.default.title}>
      <umi_1.FormattedMessage id="resultandfail.error.hint-title" defaultMessage="The content you submitted has the following error:"/>
    </div>
    <div style={{ marginBottom: 16 }}>
      <icons_1.CloseCircleOutlined style={{ marginRight: 8 }} className={index_less_1.default.error_icon}/>
      <umi_1.FormattedMessage id="resultandfail.error.hint-text1" defaultMessage="Your account has been frozen"/>
      <a style={{ marginLeft: 16 }}>
        <umi_1.FormattedMessage id="resultandfail.error.hint-btn1" defaultMessage="Thaw immediately"/>
        <icons_1.RightOutlined />
      </a>
    </div>
    <div>
      <icons_1.CloseCircleOutlined style={{ marginRight: 8 }} className={index_less_1.default.error_icon}/>
      <umi_1.FormattedMessage id="resultandfail.error.hint-text2" defaultMessage="Your account is not yet eligible to apply"/>
      <a style={{ marginLeft: 16 }}>
        <umi_1.FormattedMessage id="resultandfail.error.hint-btn2" defaultMessage="Upgrade immediately"/>
        <icons_1.RightOutlined />
      </a>
    </div>
  </react_1.Fragment>);
exports.default = (function () { return (<pro_layout_1.GridContent>
    <antd_1.Card bordered={false}>
      <antd_1.Result status="error" title={umi_1.formatMessage({ id: 'resultandfail.error.title' })} subTitle={umi_1.formatMessage({ id: 'resultandfail.error.description' })} extra={<antd_1.Button type="primary">
            <umi_1.FormattedMessage id="resultandfail.error.btn-text" defaultMessage="Return to modify"/>
          </antd_1.Button>} style={{ marginTop: 48, marginBottom: 16 }}>
        {Content}
      </antd_1.Result>
    </antd_1.Card>
  </pro_layout_1.GridContent>); });
//# sourceMappingURL=index.js.map