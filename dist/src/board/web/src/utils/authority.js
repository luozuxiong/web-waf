"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthority = exports.getAuthority = void 0;
var Authorized_1 = require("./Authorized");
// use localStorage to store the authority info, which might be sent from server in actual project.
function getAuthority(str) {
    var authorityString = typeof str === 'undefined' && localStorage ? localStorage.getItem('antd-pro-authority') : str;
    // authorityString could be admin, "admin", ["admin"]
    var authority;
    try {
        if (authorityString) {
            authority = JSON.parse(authorityString);
        }
    }
    catch (e) {
        authority = authorityString;
    }
    if (typeof authority === 'string') {
        return [authority];
    }
    // preview.pro.ant.design only do not use in your production.
    // preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
    if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
        return ['admin'];
    }
    return authority;
}
exports.getAuthority = getAuthority;
function setAuthority(authority) {
    var proAuthority = typeof authority === 'string' ? [authority] : authority;
    localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
    // auto reload
    Authorized_1.reloadAuthorized();
}
exports.setAuthority = setAuthority;
//# sourceMappingURL=authority.js.map