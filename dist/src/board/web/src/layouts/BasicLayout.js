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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
var pro_layout_1 = __importStar(require("@ant-design/pro-layout"));
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var Authorized_1 = __importDefault(require("@/utils/Authorized"));
var RightContent_1 = __importDefault(require("@/components/GlobalHeader/RightContent"));
var utils_1 = require("@/utils/utils");
var logo_svg_1 = __importDefault(require("../assets/logo.svg"));
var noMatch = (<antd_1.Result status={403} title="403" subTitle="Sorry, you are not authorized to access this page." extra={<antd_1.Button type="primary">
        <umi_1.Link to="/user/login">Go Login</umi_1.Link>
      </antd_1.Button>}/>);
/**
 * use Authorized check all menu item
 */
var menuDataRender = function (menuList) {
    return menuList.map(function (item) {
        var localItem = __assign(__assign({}, item), { children: item.children ? menuDataRender(item.children) : undefined });
        return Authorized_1.default.check(item.authority, localItem, null);
    });
};
var defaultFooterDom = (<pro_layout_1.DefaultFooter copyright={new Date().getFullYear() + " \u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u51FA\u54C1"} links={[
    {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
    },
    {
        key: 'github',
        title: <icons_1.GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
    },
    {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
    },
]}/>);
var BasicLayout = function (props) {
    var dispatch = props.dispatch, children = props.children, settings = props.settings, _a = props.location, location = _a === void 0 ? {
        pathname: '/',
    } : _a;
    /**
     * constructor
     */
    react_1.useEffect(function () {
        if (dispatch) {
            dispatch({
                type: 'user/fetchCurrent',
            });
        }
    }, []);
    /**
     * init variables
     */
    var handleMenuCollapse = function (payload) {
        if (dispatch) {
            dispatch({
                type: 'global/changeLayoutCollapsed',
                payload: payload,
            });
        }
    }; // get children authority
    var authorized = utils_1.getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
        authority: undefined,
    };
    var formatMessage = umi_1.useIntl().formatMessage;
    return (<>
      <pro_layout_1.default logo={logo_svg_1.default} formatMessage={formatMessage} onCollapse={handleMenuCollapse} onMenuHeaderClick={function () { return umi_1.history.push('/'); }} menuItemRender={function (menuItemProps, defaultDom) {
        if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
        }
        return <umi_1.Link to={menuItemProps.path}>{defaultDom}</umi_1.Link>;
    }} breadcrumbRender={function (routers) {
        if (routers === void 0) { routers = []; }
        return __spreadArrays([
            {
                path: '/',
                breadcrumbName: formatMessage({
                    id: 'menu.home',
                }),
            }
        ], routers);
    }} itemRender={function (route, params, routes, paths) {
        var first = routes.indexOf(route) === 0;
        return first ? (<umi_1.Link to={paths.join('/')}>{route.breadcrumbName}</umi_1.Link>) : (<span>{route.breadcrumbName}</span>);
    }} footerRender={function () { return defaultFooterDom; }} menuDataRender={menuDataRender} rightContentRender={function () { return <RightContent_1.default />; }} {...props} {...settings}>
        <Authorized_1.default authority={authorized.authority} noMatch={noMatch}>
          {children}
        </Authorized_1.default>
      </pro_layout_1.default>
      <pro_layout_1.SettingDrawer settings={settings} onSettingChange={function (config) {
        return dispatch({
            type: 'settings/changeSetting',
            payload: config,
        });
    }}/>
    </>);
};
exports.default = umi_1.connect(function (_a) {
    var global = _a.global, settings = _a.settings;
    return ({
        collapsed: global.collapsed,
        settings: settings,
    });
})(BasicLayout);
//# sourceMappingURL=BasicLayout.js.map