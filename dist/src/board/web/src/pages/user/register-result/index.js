"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var style_less_1 = __importDefault(require("./style.less"));
var actions = (<div className={style_less_1.default.actions}>
    <a href="">
      <antd_1.Button size="large" type="primary">
        <umi_1.FormattedMessage id="userandregister-result.register-result.view-mailbox"/>
      </antd_1.Button>
    </a>
    <umi_1.Link to="/">
      <antd_1.Button size="large">
        <umi_1.FormattedMessage id="userandregister-result.register-result.back-home"/>
      </antd_1.Button>
    </umi_1.Link>
  </div>);
var RegisterResult = function (_a) {
    var location = _a.location;
    return (<antd_1.Result className={style_less_1.default.registerResult} status="success" title={<div className={style_less_1.default.title}>
        <umi_1.FormattedMessage id="userandregister-result.register-result.msg" values={{ email: location.state ? location.state.account : 'AntDesign@example.com' }}/>
      </div>} subTitle={umi_1.formatMessage({ id: 'userandregister-result.register-result.activation-email' })} extra={actions}/>);
};
exports.default = RegisterResult;
//# sourceMappingURL=index.js.map