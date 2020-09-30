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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var pro_layout_1 = require("@ant-design/pro-layout");
var antd_1 = require("antd");
var base_1 = __importDefault(require("./components/base"));
var binding_1 = __importDefault(require("./components/binding"));
var notification_1 = __importDefault(require("./components/notification"));
var security_1 = __importDefault(require("./components/security"));
var style_less_1 = __importDefault(require("./style.less"));
var Item = antd_1.Menu.Item;
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings(props) {
        var _this = _super.call(this, props) || this;
        _this.main = undefined;
        _this.getMenu = function () {
            var menuMap = _this.state.menuMap;
            return Object.keys(menuMap).map(function (item) { return <Item key={item}>{menuMap[item]}</Item>; });
        };
        _this.getRightTitle = function () {
            var _a = _this.state, selectKey = _a.selectKey, menuMap = _a.menuMap;
            return menuMap[selectKey];
        };
        _this.selectKey = function (key) {
            _this.setState({
                selectKey: key,
            });
        };
        _this.resize = function () {
            if (!_this.main) {
                return;
            }
            requestAnimationFrame(function () {
                if (!_this.main) {
                    return;
                }
                var mode = 'inline';
                var offsetWidth = _this.main.offsetWidth;
                if (_this.main.offsetWidth < 641 && offsetWidth > 400) {
                    mode = 'horizontal';
                }
                if (window.innerWidth < 768 && offsetWidth > 400) {
                    mode = 'horizontal';
                }
                _this.setState({
                    mode: mode,
                });
            });
        };
        _this.renderChildren = function () {
            var selectKey = _this.state.selectKey;
            switch (selectKey) {
                case 'base':
                    return <base_1.default />;
                case 'security':
                    return <security_1.default />;
                case 'binding':
                    return <binding_1.default />;
                case 'notification':
                    return <notification_1.default />;
                default:
                    break;
            }
            return null;
        };
        var menuMap = {
            base: (<umi_1.FormattedMessage id="accountandsettings.menuMap.basic" defaultMessage="Basic Settings"/>),
            security: (<umi_1.FormattedMessage id="accountandsettings.menuMap.security" defaultMessage="Security Settings"/>),
            binding: (<umi_1.FormattedMessage id="accountandsettings.menuMap.binding" defaultMessage="Account Binding"/>),
            notification: (<umi_1.FormattedMessage id="accountandsettings.menuMap.notification" defaultMessage="New Message Notification"/>),
        };
        _this.state = {
            mode: 'inline',
            menuMap: menuMap,
            selectKey: 'base',
        };
        return _this;
    }
    Settings.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'accountAndsettings/fetchCurrent',
        });
        window.addEventListener('resize', this.resize);
        this.resize();
    };
    Settings.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resize);
    };
    Settings.prototype.render = function () {
        var _this = this;
        var currentUser = this.props.currentUser;
        if (!currentUser.userid) {
            return '';
        }
        var _a = this.state, mode = _a.mode, selectKey = _a.selectKey;
        return (<pro_layout_1.GridContent>
        <div className={style_less_1.default.main} ref={function (ref) {
            if (ref) {
                _this.main = ref;
            }
        }}>
          <div className={style_less_1.default.leftMenu}>
            <antd_1.Menu mode={mode} selectedKeys={[selectKey]} onClick={function (_a) {
            var key = _a.key;
            return _this.selectKey(key);
        }}>
              {this.getMenu()}
            </antd_1.Menu>
          </div>
          <div className={style_less_1.default.right}>
            <div className={style_less_1.default.title}>{this.getRightTitle()}</div>
            {this.renderChildren()}
          </div>
        </div>
      </pro_layout_1.GridContent>);
    };
    return Settings;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var accountAndsettings = _a.accountAndsettings;
    return ({
        currentUser: accountAndsettings.currentUser,
    });
})(Settings);
//# sourceMappingURL=index.js.map