"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermissions = void 0;
var react_1 = __importDefault(require("react"));
var renderAuthorize_1 = require("./renderAuthorize");
// eslint-disable-next-line import/no-cycle
var PromiseRender_1 = __importDefault(require("./PromiseRender"));
/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 | Permission judgment } authority
 * @param { 你的权限 | Your permission description } currentAuthority
 * @param { 通过的组件 | Passing components } target
 * @param { 未通过的组件 | no pass components } Exception
 */
var checkPermissions = function (authority, currentAuthority, target, Exception) {
    // 没有判定权限.默认查看所有
    // Retirement authority, return target;
    if (!authority) {
        return target;
    }
    // 数组处理
    if (Array.isArray(authority)) {
        if (Array.isArray(currentAuthority)) {
            if (currentAuthority.some(function (item) { return authority.includes(item); })) {
                return target;
            }
        }
        else if (authority.includes(currentAuthority)) {
            return target;
        }
        return Exception;
    }
    // string 处理
    if (typeof authority === 'string') {
        if (Array.isArray(currentAuthority)) {
            if (currentAuthority.some(function (item) { return authority === item; })) {
                return target;
            }
        }
        else if (authority === currentAuthority) {
            return target;
        }
        return Exception;
    }
    // Promise 处理
    if (authority instanceof Promise) {
        return <PromiseRender_1.default ok={target} error={Exception} promise={authority}/>;
    }
    // Function 处理
    if (typeof authority === 'function') {
        var bool = authority(currentAuthority);
        // 函数执行后返回值是 Promise
        if (bool instanceof Promise) {
            return <PromiseRender_1.default ok={target} error={Exception} promise={bool}/>;
        }
        if (bool) {
            return target;
        }
        return Exception;
    }
    throw new Error('unsupported parameters');
};
exports.checkPermissions = checkPermissions;
function check(authority, target, Exception) {
    return checkPermissions(authority, renderAuthorize_1.CURRENT, target, Exception);
}
exports.default = check;
//# sourceMappingURL=CheckPermissions.js.map