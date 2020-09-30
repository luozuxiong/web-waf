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
var component_1 = __importDefault(require("./zh-CN/component"));
var globalHeader_1 = __importDefault(require("./zh-CN/globalHeader"));
var menu_1 = __importDefault(require("./zh-CN/menu"));
var pwa_1 = __importDefault(require("./zh-CN/pwa"));
var settingDrawer_1 = __importDefault(require("./zh-CN/settingDrawer"));
var settings_1 = __importDefault(require("./zh-CN/settings"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign({ 'navBar.lang': '语言', 'layout.user.link.help': '帮助', 'layout.user.link.privacy': '隐私', 'layout.user.link.terms': '条款', 'app.preview.down.block': '下载此页面到本地项目', 'app.welcome.link.fetch-blocks': '获取全部区块', 'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面' }, globalHeader_1.default), menu_1.default), settingDrawer_1.default), settings_1.default), pwa_1.default), component_1.default);
//# sourceMappingURL=zh-CN.js.map