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
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var NotificationView = /** @class */ (function (_super) {
    __extends(NotificationView, _super);
    function NotificationView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getData = function () {
            var Action = (<antd_1.Switch checkedChildren={umi_1.formatMessage({ id: 'accountandsettings.settings.open' })} unCheckedChildren={umi_1.formatMessage({ id: 'accountandsettings.settings.close' })} defaultChecked/>);
            return [
                {
                    title: umi_1.formatMessage({ id: 'accountandsettings.notification.password' }, {}),
                    description: umi_1.formatMessage({ id: 'accountandsettings.notification.password-description' }, {}),
                    actions: [Action],
                },
                {
                    title: umi_1.formatMessage({ id: 'accountandsettings.notification.messages' }, {}),
                    description: umi_1.formatMessage({ id: 'accountandsettings.notification.messages-description' }, {}),
                    actions: [Action],
                },
                {
                    title: umi_1.formatMessage({ id: 'accountandsettings.notification.todo' }, {}),
                    description: umi_1.formatMessage({ id: 'accountandsettings.notification.todo-description' }, {}),
                    actions: [Action],
                },
            ];
        };
        return _this;
    }
    NotificationView.prototype.render = function () {
        var data = this.getData();
        return (<react_1.Fragment>
        <antd_1.List itemLayout="horizontal" dataSource={data} renderItem={function (item) { return (<antd_1.List.Item actions={item.actions}>
              <antd_1.List.Item.Meta title={item.title} description={item.description}/>
            </antd_1.List.Item>); }}/>
      </react_1.Fragment>);
    };
    return NotificationView;
}(react_1.Component));
exports.default = NotificationView;
//# sourceMappingURL=notification.js.map