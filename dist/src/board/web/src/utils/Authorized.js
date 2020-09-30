"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reloadAuthorized = void 0;
var Authorized_1 = __importDefault(require("@/components/Authorized"));
var authority_1 = require("./authority");
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-mutable-exports */
var Authorized = Authorized_1.default(authority_1.getAuthority());
// Reload the rights component
var reloadAuthorized = function () {
    Authorized = Authorized_1.default(authority_1.getAuthority());
};
exports.reloadAuthorized = reloadAuthorized;
/**
 * hard code
 * block need it。
 */
window.reloadAuthorized = reloadAuthorized;
exports.default = Authorized;
//# sourceMappingURL=Authorized.js.map