"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var Authorized_1 = __importDefault(require("@/utils/Authorized"));
var utils_1 = require("@/utils/utils");
var AuthComponent = function (_a) {
    var children = _a.children, _b = _a.route, route = _b === void 0 ? {
        routes: [],
    } : _b, _c = _a.location, location = _c === void 0 ? {
        pathname: '',
    } : _c, user = _a.user;
    var currentUser = user.currentUser;
    var _d = route.routes, routes = _d === void 0 ? [] : _d;
    var isLogin = currentUser && currentUser.name;
    return (<Authorized_1.default authority={utils_1.getRouteAuthority(location.pathname, routes) || ''} noMatch={isLogin ? <umi_1.Redirect to="/exception/403"/> : <umi_1.Redirect to="/user/login"/>}>
      {children}
    </Authorized_1.default>);
};
exports.default = umi_1.connect(function (_a) {
    var user = _a.user;
    return ({
        user: user,
    });
})(AuthComponent);
//# sourceMappingURL=Authorized.js.map