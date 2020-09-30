"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var gg_editor_1 = require("gg-editor");
var react_1 = __importDefault(require("react"));
var EditorMinimap = function () { return (<antd_1.Card type="inner" size="small" title="Minimap" bordered={false}>
    <gg_editor_1.Minimap height={200}/>
  </antd_1.Card>); };
exports.default = EditorMinimap;
//# sourceMappingURL=index.js.map