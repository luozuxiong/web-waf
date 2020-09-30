"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENT = void 0;
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-mutable-exports */
var CURRENT = 'NULL';
exports.CURRENT = CURRENT;
/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */
var renderAuthorize = function (Authorized) { return function (currentAuthority) {
    if (currentAuthority) {
        if (typeof currentAuthority === 'function') {
            exports.CURRENT = CURRENT = currentAuthority();
        }
        if (Object.prototype.toString.call(currentAuthority) === '[object String]' ||
            Array.isArray(currentAuthority)) {
            exports.CURRENT = CURRENT = currentAuthority;
        }
    }
    else {
        exports.CURRENT = CURRENT = 'NULL';
    }
    return Authorized;
}; };
exports.default = (function (Authorized) { return renderAuthorize(Authorized); });
//# sourceMappingURL=renderAuthorize.js.map