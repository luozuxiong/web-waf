"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gg_editor_1 = require("gg-editor");
var react_1 = __importDefault(require("react"));
var MenuItem_1 = __importDefault(require("./MenuItem"));
var index_less_1 = __importDefault(require("./index.less"));
var FlowContextMenu = function () { return (<gg_editor_1.ContextMenu className={index_less_1.default.contextMenu}>
    <gg_editor_1.NodeMenu>
      <MenuItem_1.default command="copy"/>
      <MenuItem_1.default command="delete"/>
    </gg_editor_1.NodeMenu>
    <gg_editor_1.EdgeMenu>
      <MenuItem_1.default command="delete"/>
    </gg_editor_1.EdgeMenu>
    <gg_editor_1.GroupMenu>
      <MenuItem_1.default command="copy"/>
      <MenuItem_1.default command="delete"/>
      <MenuItem_1.default command="unGroup" icon="ungroup" text="Ungroup"/>
    </gg_editor_1.GroupMenu>
    <gg_editor_1.MultiMenu>
      <MenuItem_1.default command="copy"/>
      <MenuItem_1.default command="paste"/>
      <MenuItem_1.default command="addGroup" icon="group" text="Add Group"/>
      <MenuItem_1.default command="delete"/>
    </gg_editor_1.MultiMenu>
    <gg_editor_1.CanvasMenu>
      <MenuItem_1.default command="undo"/>
      <MenuItem_1.default command="redo"/>
      <MenuItem_1.default command="pasteHere" icon="paste" text="Paste Here"/>
    </gg_editor_1.CanvasMenu>
  </gg_editor_1.ContextMenu>); };
exports.default = FlowContextMenu;
//# sourceMappingURL=FlowContextMenu.js.map