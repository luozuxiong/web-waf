"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gg_editor_1 = require("gg-editor");
var react_1 = __importDefault(require("react"));
var MenuItem_1 = __importDefault(require("./MenuItem"));
var index_less_1 = __importDefault(require("./index.less"));
var MindContextMenu = function () { return (<gg_editor_1.ContextMenu className={index_less_1.default.contextMenu}>
    <gg_editor_1.NodeMenu>
      <MenuItem_1.default command="append" text="Topic"/>
      <MenuItem_1.default command="appendChild" icon="append-child" text="Subtopic"/>
      <MenuItem_1.default command="collapse" text="Fold"/>
      <MenuItem_1.default command="expand" text="Unfold"/>
      <MenuItem_1.default command="delete"/>
    </gg_editor_1.NodeMenu>
    <gg_editor_1.CanvasMenu>
      <MenuItem_1.default command="undo"/>
      <MenuItem_1.default command="redo"/>
    </gg_editor_1.CanvasMenu>
  </gg_editor_1.ContextMenu>); };
exports.default = MindContextMenu;
//# sourceMappingURL=MindContextMenu.js.map