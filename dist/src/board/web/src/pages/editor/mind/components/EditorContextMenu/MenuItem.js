"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gg_editor_1 = require("gg-editor");
var react_1 = __importDefault(require("react"));
var IconFont_1 = __importDefault(require("../../common/IconFont"));
var index_less_1 = __importDefault(require("./index.less"));
var upperFirst = function (str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, function (l) { return l.toUpperCase(); });
};
var MenuItem = function (props) {
    var command = props.command, icon = props.icon, text = props.text;
    return (<gg_editor_1.Command name={command}>
      <div className={index_less_1.default.item}>
        <IconFont_1.default type={"icon-" + (icon || command)}/>
        <span>{text || upperFirst(command)}</span>
      </div>
    </gg_editor_1.Command>);
};
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map