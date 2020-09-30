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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importStar(require("react"));
var GeographicView_1 = __importDefault(require("./GeographicView"));
var PhoneView_1 = __importDefault(require("./PhoneView"));
var BaseView_less_1 = __importDefault(require("./BaseView.less"));
var Option = antd_1.Select.Option;
// 头像组件 方便以后独立，增加裁剪之类的功能
var AvatarView = function (_a) {
    var avatar = _a.avatar;
    return (<>
    <div className={BaseView_less_1.default.avatar_title}>
      <umi_1.FormattedMessage id="accountandsettings.basic.avatar" defaultMessage="Avatar"/>
    </div>
    <div className={BaseView_less_1.default.avatar}>
      <img src={avatar} alt="avatar"/>
    </div>
    <antd_1.Upload showUploadList={false}>
      <div className={BaseView_less_1.default.button_view}>
        <antd_1.Button>
          <icons_1.UploadOutlined />
          <umi_1.FormattedMessage id="accountandsettings.basic.change-avatar" defaultMessage="Change avatar"/>
        </antd_1.Button>
      </div>
    </antd_1.Upload>
  </>);
};
var validatorGeographic = function (_, value, callback) {
    var province = value.province, city = value.city;
    if (!province.key) {
        callback('Please input your province!');
    }
    if (!city.key) {
        callback('Please input your city!');
    }
    callback();
};
var validatorPhone = function (rule, value, callback) {
    var values = value.split('-');
    if (!values[0]) {
        callback('Please input your area code!');
    }
    if (!values[1]) {
        callback('Please input your phone number!');
    }
    callback();
};
var BaseView = /** @class */ (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = undefined;
        _this.getViewDom = function (ref) {
            _this.view = ref;
        };
        _this.handleFinish = function () {
            antd_1.message.success(umi_1.formatMessage({ id: 'accountandsettings.basic.update.success' }));
        };
        return _this;
    }
    BaseView.prototype.getAvatarURL = function () {
        var currentUser = this.props.currentUser;
        if (currentUser) {
            if (currentUser.avatar) {
                return currentUser.avatar;
            }
            var url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
            return url;
        }
        return '';
    };
    BaseView.prototype.render = function () {
        var currentUser = this.props.currentUser;
        return (<div className={BaseView_less_1.default.baseView} ref={this.getViewDom}>
        <div className={BaseView_less_1.default.left}>
          <antd_1.Form layout="vertical" onFinish={this.handleFinish} initialValues={currentUser} hideRequiredMark>
            <antd_1.Form.Item name="email" label={umi_1.formatMessage({ id: 'accountandsettings.basic.email' })} rules={[
            {
                required: true,
                message: umi_1.formatMessage({ id: 'accountandsettings.basic.email-message' }, {}),
            },
        ]}>
              <antd_1.Input />
            </antd_1.Form.Item>
            <antd_1.Form.Item name="name" label={umi_1.formatMessage({ id: 'accountandsettings.basic.nickname' })} rules={[
            {
                required: true,
                message: umi_1.formatMessage({ id: 'accountandsettings.basic.nickname-message' }, {}),
            },
        ]}>
              <antd_1.Input />
            </antd_1.Form.Item>
            <antd_1.Form.Item name="profile" label={umi_1.formatMessage({ id: 'accountandsettings.basic.profile' })} rules={[
            {
                required: true,
                message: umi_1.formatMessage({ id: 'accountandsettings.basic.profile-message' }, {}),
            },
        ]}>
              <antd_1.Input.TextArea placeholder={umi_1.formatMessage({ id: 'accountandsettings.basic.profile-placeholder' })} rows={4}/>
            </antd_1.Form.Item>
            <antd_1.Form.Item name="country" label={umi_1.formatMessage({ id: 'accountandsettings.basic.country' })} rules={[
            {
                required: true,
                message: umi_1.formatMessage({ id: 'accountandsettings.basic.country-message' }, {}),
            },
        ]}>
              <antd_1.Select style={{ maxWidth: 220 }}>
                <Option value="China">中国</Option>
              </antd_1.Select>
            </antd_1.Form.Item>
            <antd_1.Form.Item name="geographic" label={umi_1.formatMessage({ id: 'accountandsettings.basic.geographic' })} rules={[
            {
                required: true,
                message: umi_1.formatMessage({ id: 'accountandsettings.basic.geographic-message' }, {}),
            },
            {
                validator: validatorGeographic,
            },
        ]}>
              <GeographicView_1.default />
            </antd_1.Form.Item>
            <antd_1.Form.Item name="address" label={umi_1.formatMessage({ id: 'accountandsettings.basic.address' })} rules={[
            {
                required: true,
                message: umi_1.formatMessage({ id: 'accountandsettings.basic.address-message' }, {}),
            },
        ]}>
              <antd_1.Input />
            </antd_1.Form.Item>
            <antd_1.Form.Item name="phone" label={umi_1.formatMessage({ id: 'accountandsettings.basic.phone' })} rules={[
            {
                required: true,
                message: umi_1.formatMessage({ id: 'accountandsettings.basic.phone-message' }, {}),
            },
            { validator: validatorPhone },
        ]}>
              <PhoneView_1.default />
            </antd_1.Form.Item>
            <antd_1.Form.Item>
              <antd_1.Button htmlType="submit" type="primary">
                <umi_1.FormattedMessage id="accountandsettings.basic.update" defaultMessage="Update Information"/>
              </antd_1.Button>
            </antd_1.Form.Item>
          </antd_1.Form>
        </div>
        <div className={BaseView_less_1.default.right}>
          <AvatarView avatar={this.getAvatarURL()}/>
        </div>
      </div>);
    };
    return BaseView;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var accountAndsettings = _a.accountAndsettings;
    return ({
        currentUser: accountAndsettings.currentUser,
    });
})(BaseView);
//# sourceMappingURL=base.js.map