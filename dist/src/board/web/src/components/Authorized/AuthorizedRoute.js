"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var Authorized_1 = __importDefault(require("./Authorized"));
var AuthorizedRoute = function (_a) {
    var Component = _a.component, render = _a.render, authority = _a.authority, redirectPath = _a.redirectPath, rest = __rest(_a, ["component", "render", "authority", "redirectPath"]);
    return (<Authorized_1.default authority={authority} noMatch={<umi_1.Route {...rest} render={function () { return <umi_1.Redirect to={{ pathname: redirectPath }}/>; }}/>}>
    <umi_1.Route {...rest} render={function (props) { return (Component ? <Component {...props}/> : render(props)); }}/>
  </Authorized_1.default>);
};
exports.default = AuthorizedRoute;
//# sourceMappingURL=AuthorizedRoute.js.map