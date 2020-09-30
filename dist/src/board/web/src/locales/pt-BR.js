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
var component_1 = __importDefault(require("./pt-BR/component"));
var globalHeader_1 = __importDefault(require("./pt-BR/globalHeader"));
var menu_1 = __importDefault(require("./pt-BR/menu"));
var pwa_1 = __importDefault(require("./pt-BR/pwa"));
var settingDrawer_1 = __importDefault(require("./pt-BR/settingDrawer"));
var settings_1 = __importDefault(require("./pt-BR/settings"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign({ 'navBar.lang': 'Idiomas', 'layout.user.link.help': 'ajuda', 'layout.user.link.privacy': 'política de privacidade', 'layout.user.link.terms': 'termos de serviços', 'app.preview.down.block': 'Download this page to your local project' }, globalHeader_1.default), menu_1.default), settingDrawer_1.default), settings_1.default), pwa_1.default), component_1.default);
//# sourceMappingURL=pt-BR.js.map