"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gg_editor_1 = require("gg-editor");
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var IconFont_1 = __importDefault(require("../../common/IconFont"));
var index_less_1 = __importDefault(require("./index.less"));
var upperFirst = function (str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, function (l) { return l.toUpperCase(); });
};
var ToolbarButton = function (props) {
    var command = props.command, icon = props.icon, text = props.text;
    return (<gg_editor_1.Command name={command}>
      <antd_1.Tooltip title={text || upperFirst(command)} placement="bottom" overlayClassName={index_less_1.default.tooltip}>
        <IconFont_1.default type={"icon-" + (icon || command)}/>
      </antd_1.Tooltip>
    </gg_editor_1.Command>);
};
exports.default = ToolbarButton;
//# sourceMappingURL=ToolbarButton.js.map