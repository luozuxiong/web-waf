"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var gg_editor_1 = require("gg-editor");
var ToolbarButton_1 = __importDefault(require("./ToolbarButton"));
var index_less_1 = __importDefault(require("./index.less"));
var FlowToolbar = function () { return (<gg_editor_1.Toolbar className={index_less_1.default.toolbar}>
    <ToolbarButton_1.default command="undo"/>
    <ToolbarButton_1.default command="redo"/>
    <antd_1.Divider type="vertical"/>
    <ToolbarButton_1.default command="zoomIn" icon="zoom-in" text="Zoom In"/>
    <ToolbarButton_1.default command="zoomOut" icon="zoom-out" text="Zoom Out"/>
    <ToolbarButton_1.default command="autoZoom" icon="fit-map" text="Fit Map"/>
    <ToolbarButton_1.default command="resetZoom" icon="actual-size" text="Actual Size"/>
    <antd_1.Divider type="vertical"/>
    <ToolbarButton_1.default command="append" text="Topic"/>
    <ToolbarButton_1.default command="appendChild" icon="append-child" text="Subtopic"/>
    <antd_1.Divider type="vertical"/>
    <ToolbarButton_1.default command="collapse" text="Fold"/>
    <ToolbarButton_1.default command="expand" text="Unfold"/>
  </gg_editor_1.Toolbar>); };
exports.default = FlowToolbar;
//# sourceMappingURL=MindToolbar.js.map