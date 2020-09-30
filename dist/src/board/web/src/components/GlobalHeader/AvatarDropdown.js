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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var HeaderDropdown_1 = __importDefault(require("../HeaderDropdown"));
var index_less_1 = __importDefault(require("./index.less"));
var AvatarDropdown = /** @class */ (function (_super) {
    __extends(AvatarDropdown, _super);
    function AvatarDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMenuClick = function (event) {
            var key = event.key;
            if (key === 'logout') {
                var dispatch = _this.props.dispatch;
                if (dispatch) {
                    dispatch({
                        type: 'login/logout',
                    });
                }
                return;
            }
            umi_1.history.push("/account/" + key);
        };
        return _this;
    }
    AvatarDropdown.prototype.render = function () {
        var _a = this.props, _b = _a.currentUser, currentUser = _b === void 0 ? {
            avatar: '',
            name: '',
        } : _b, menu = _a.menu;
        var menuHeaderDropdown = (<antd_1.Menu className={index_less_1.default.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (<antd_1.Menu.Item key="center">
            <icons_1.UserOutlined />
            个人中心
          </antd_1.Menu.Item>)}
        {menu && (<antd_1.Menu.Item key="settings">
            <icons_1.SettingOutlined />
            个人设置
          </antd_1.Menu.Item>)}
        {menu && <antd_1.Menu.Divider />}

        <antd_1.Menu.Item key="logout">
          <icons_1.LogoutOutlined />
          退出登录
        </antd_1.Menu.Item>
      </antd_1.Menu>);
        return currentUser && currentUser.name ? (<HeaderDropdown_1.default overlay={menuHeaderDropdown}>
        <span className={index_less_1.default.action + " " + index_less_1.default.account}>
          <antd_1.Avatar size="small" className={index_less_1.default.avatar} src={currentUser.avatar} alt="avatar"/>
          <span className={index_less_1.default.name + " anticon"}>{currentUser.name}</span>
        </span>
      </HeaderDropdown_1.default>) : (<span className={index_less_1.default.action + " " + index_less_1.default.account}>
        <antd_1.Spin size="small" style={{
            marginLeft: 8,
            marginRight: 8,
        }}/>
      </span>);
    };
    return AvatarDropdown;
}(react_1.default.Component));
exports.default = umi_1.connect(function (_a) {
    var user = _a.user;
    return ({
        currentUser: user.currentUser,
    });
})(AvatarDropdown);
//# sourceMappingURL=AvatarDropdown.js.map