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
var component_1 = __importDefault(require("./en-US/component"));
var globalHeader_1 = __importDefault(require("./en-US/globalHeader"));
var menu_1 = __importDefault(require("./en-US/menu"));
var pwa_1 = __importDefault(require("./en-US/pwa"));
var settingDrawer_1 = __importDefault(require("./en-US/settingDrawer"));
var settings_1 = __importDefault(require("./en-US/settings"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign({ 'navBar.lang': 'Languages', 'layout.user.link.help': 'Help', 'layout.user.link.privacy': 'Privacy', 'layout.user.link.terms': 'Terms', 'app.preview.down.block': 'Download this page to your local project', 'app.welcome.link.fetch-blocks': 'Get all block', 'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development' }, globalHeader_1.default), menu_1.default), settingDrawer_1.default), settings_1.default), pwa_1.default), component_1.default);
//# sourceMappingURL=en-US.js.map