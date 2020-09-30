"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var CheckPermissions_1 = __importDefault(require("./CheckPermissions"));
var Authorized = function (_a) {
    var children = _a.children, authority = _a.authority, _b = _a.noMatch, noMatch = _b === void 0 ? (<antd_1.Result status="403" title="403" subTitle="Sorry, you are not authorized to access this page."/>) : _b;
    var childrenRender = typeof children === 'undefined' ? null : children;
    var dom = CheckPermissions_1.default(authority, childrenRender, noMatch);
    return <>{dom}</>;
};
exports.default = Authorized;
//# sourceMappingURL=Authorized.js.map