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
var react_1 = __importDefault(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var querystring_1 = require("querystring");
var SecurityLayout = /** @class */ (function (_super) {
    __extends(SecurityLayout, _super);
    function SecurityLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isReady: false,
        };
        return _this;
    }
    SecurityLayout.prototype.componentDidMount = function () {
        this.setState({
            isReady: true,
        });
        var dispatch = this.props.dispatch;
        if (dispatch) {
            dispatch({
                type: 'user/fetchCurrent',
            });
        }
    };
    SecurityLayout.prototype.render = function () {
        var isReady = this.state.isReady;
        var _a = this.props, children = _a.children, loading = _a.loading, currentUser = _a.currentUser;
        // You can replace it to your authentication rule (such as check token exists)
        // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）
        var isLogin = currentUser && currentUser.userid;
        var queryString = querystring_1.stringify({
            redirect: window.location.href,
        });
        if ((!isLogin && loading) || !isReady) {
            return <pro_layout_1.PageLoading />;
        }
        if (!isLogin && window.location.pathname !== '/user/login') {
            return <umi_1.Redirect to={"/user/login?" + queryString}/>;
        }
        return children;
    };
    return SecurityLayout;
}(react_1.default.Component));
exports.default = umi_1.connect(function (_a) {
    var user = _a.user, loading = _a.loading;
    return ({
        currentUser: user.currentUser,
        loading: loading.models.user,
    });
})(SecurityLayout);
//# sourceMappingURL=SecurityLayout.js.map