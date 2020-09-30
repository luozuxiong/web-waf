"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var umi_1 = require("umi");
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var passwordStrength = {
    strong: (<span className="strong">
      <umi_1.FormattedMessage id="accountandsettings.security.strong" defaultMessage="Strong"/>
    </span>),
    medium: (<span className="medium">
      <umi_1.FormattedMessage id="accountandsettings.security.medium" defaultMessage="Medium"/>
    </span>),
    weak: (<span className="weak">
      <umi_1.FormattedMessage id="accountandsettings.security.weak" defaultMessage="Weak"/>
      Weak
    </span>),
};
var SecurityView = /** @class */ (function (_super) {
    __extends(SecurityView, _super);
    function SecurityView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getData = function () { return [
            {
                title: umi_1.formatMessage({ id: 'accountandsettings.security.password' }, {}),
                description: (<>
          {umi_1.formatMessage({ id: 'accountandsettings.security.password-description' })}：
          {passwordStrength.strong}
        </>),
                actions: [
                    <a key="Modify">
          <umi_1.FormattedMessage id="accountandsettings.security.modify" defaultMessage="Modify"/>
        </a>,
                ],
            },
            {
                title: umi_1.formatMessage({ id: 'accountandsettings.security.phone' }, {}),
                description: umi_1.formatMessage({ id: 'accountandsettings.security.phone-description' }, {}) + "\uFF1A138****8293",
                actions: [
                    <a key="Modify">
          <umi_1.FormattedMessage id="accountandsettings.security.modify" defaultMessage="Modify"/>
        </a>,
                ],
            },
            {
                title: umi_1.formatMessage({ id: 'accountandsettings.security.question' }, {}),
                description: umi_1.formatMessage({ id: 'accountandsettings.security.question-description' }, {}),
                actions: [
                    <a key="Set">
          <umi_1.FormattedMessage id="accountandsettings.security.set" defaultMessage="Set"/>
        </a>,
                ],
            },
            {
                title: umi_1.formatMessage({ id: 'accountandsettings.security.email' }, {}),
                description: umi_1.formatMessage({ id: 'accountandsettings.security.email-description' }, {}) + "\uFF1Aant***sign.com",
                actions: [
                    <a key="Modify">
          <umi_1.FormattedMessage id="accountandsettings.security.modify" defaultMessage="Modify"/>
        </a>,
                ],
            },
            {
                title: umi_1.formatMessage({ id: 'accountandsettings.security.mfa' }, {}),
                description: umi_1.formatMessage({ id: 'accountandsettings.security.mfa-description' }, {}),
                actions: [
                    <a key="bind">
          <umi_1.FormattedMessage id="accountandsettings.security.bind" defaultMessage="Bind"/>
        </a>,
                ],
            },
        ]; };
        return _this;
    }
    SecurityView.prototype.render = function () {
        var data = this.getData();
        return (<>
        <antd_1.List itemLayout="horizontal" dataSource={data} renderItem={function (item) { return (<antd_1.List.Item actions={item.actions}>
              <antd_1.List.Item.Meta title={item.title} description={item.description}/>
            </antd_1.List.Item>); }}/>
      </>);
    };
    return SecurityView;
}(react_1.Component));
exports.default = SecurityView;
//# sourceMappingURL=security.js.map