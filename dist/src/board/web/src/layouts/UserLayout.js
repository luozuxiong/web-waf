"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pro_layout_1 = require("@ant-design/pro-layout");
var react_helmet_async_1 = require("react-helmet-async");
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var logo_svg_1 = __importDefault(require("../assets/logo.svg"));
var UserLayout_less_1 = __importDefault(require("./UserLayout.less"));
var UserLayout = function (props) {
    var _a = props.route, route = _a === void 0 ? {
        routes: [],
    } : _a;
    var _b = route.routes, routes = _b === void 0 ? [] : _b;
    var children = props.children, _c = props.location, location = _c === void 0 ? {
        pathname: '',
    } : _c;
    var formatMessage = umi_1.useIntl().formatMessage;
    var breadcrumb = pro_layout_1.getMenuData(routes).breadcrumb;
    var title = pro_layout_1.getPageTitle(__assign({ pathname: location.pathname, formatMessage: formatMessage,
        breadcrumb: breadcrumb }, props));
    return (<react_helmet_async_1.HelmetProvider>
      <react_helmet_async_1.Helmet>
        <title>{title}</title>
        <meta name="description" content={title}/>
      </react_helmet_async_1.Helmet>

      <div className={UserLayout_less_1.default.container}>
        <div className={UserLayout_less_1.default.lang}>
          <umi_1.SelectLang />
        </div>
        <div className={UserLayout_less_1.default.content}>
          <div className={UserLayout_less_1.default.top}>
            <div className={UserLayout_less_1.default.header}>
              <umi_1.Link to="/">
                <img alt="logo" className={UserLayout_less_1.default.logo} src={logo_svg_1.default}/>
                <span className={UserLayout_less_1.default.title}>Ant Design</span>
              </umi_1.Link>
            </div>
            <div className={UserLayout_less_1.default.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
          </div>
          {children}
        </div>
        <pro_layout_1.DefaultFooter />
      </div>
    </react_helmet_async_1.HelmetProvider>);
};
exports.default = umi_1.connect(function (_a) {
    var settings = _a.settings;
    return (__assign({}, settings));
})(UserLayout);
//# sourceMappingURL=UserLayout.js.map