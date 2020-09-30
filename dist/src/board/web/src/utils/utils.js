"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouteAuthority = exports.getAuthorityFromRouter = exports.getPageQuery = exports.isAntDesignProOrDev = exports.isAntDesignPro = exports.isUrl = void 0;
var querystring_1 = require("querystring");
var path_to_regexp_1 = __importDefault(require("path-to-regexp"));
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
exports.isUrl = function (path) { return reg.test(path); };
exports.isAntDesignPro = function () {
    if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
        return true;
    }
    return window.location.hostname === 'preview.pro.ant.design';
};
// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
exports.isAntDesignProOrDev = function () {
    var NODE_ENV = process.env.NODE_ENV;
    if (NODE_ENV === 'development') {
        return true;
    }
    return exports.isAntDesignPro();
};
exports.getPageQuery = function () { return querystring_1.parse(window.location.href.split('?')[1]); };
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */
exports.getAuthorityFromRouter = function (router, pathname) {
    if (router === void 0) { router = []; }
    var authority = router.find(function (_a) {
        var routes = _a.routes, _b = _a.path, path = _b === void 0 ? '/' : _b, _c = _a.target, target = _c === void 0 ? '_self' : _c;
        return (path && target !== '_blank' && path_to_regexp_1.default(path).exec(pathname)) ||
            (routes && exports.getAuthorityFromRouter(routes, pathname));
    });
    if (authority)
        return authority;
    return undefined;
};
exports.getRouteAuthority = function (path, routeData) {
    var authorities;
    routeData.forEach(function (route) {
        // match prefix
        if (path_to_regexp_1.default(route.path + "/(.*)").test(path + "/")) {
            if (route.authority) {
                authorities = route.authority;
            }
            // exact match
            if (route.path === path) {
                authorities = route.authority || authorities;
            }
            // get children authority recursively
            if (route.routes) {
                authorities = exports.getRouteAuthority(path, route.routes) || authorities;
            }
        }
    });
    return authorities;
};
//# sourceMappingURL=utils.js.map