"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mockjs_1 = __importDefault(require("mockjs"));
exports.default = {
    'GET  /api/tags': mockjs_1.default.mock({
        'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
    }),
};
//# sourceMappingURL=_mock.js.map