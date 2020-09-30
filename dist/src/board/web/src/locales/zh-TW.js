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
var component_1 = __importDefault(require("./zh-TW/component"));
var globalHeader_1 = __importDefault(require("./zh-TW/globalHeader"));
var menu_1 = __importDefault(require("./zh-TW/menu"));
var pwa_1 = __importDefault(require("./zh-TW/pwa"));
var settingDrawer_1 = __importDefault(require("./zh-TW/settingDrawer"));
var settings_1 = __importDefault(require("./zh-TW/settings"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign({ 'navBar.lang': '語言', 'layout.user.link.help': '幫助', 'layout.user.link.privacy': '隱私', 'layout.user.link.terms': '條款', 'app.preview.down.block': '下載此頁面到本地項目' }, globalHeader_1.default), menu_1.default), settingDrawer_1.default), settings_1.default), pwa_1.default), component_1.default);
//# sourceMappingURL=zh-TW.js.map