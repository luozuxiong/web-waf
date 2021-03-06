"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gg_editor_1 = require("gg-editor");
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var DetailForm_1 = __importDefault(require("./DetailForm"));
var index_less_1 = __importDefault(require("./index.less"));
var MindDetailPanel = function () { return (<gg_editor_1.DetailPanel className={index_less_1.default.detailPanel}>
    <gg_editor_1.NodePanel>
      <DetailForm_1.default type="node"/>
    </gg_editor_1.NodePanel>
    <gg_editor_1.CanvasPanel>
      <antd_1.Card type="inner" size="small" title="Canvas" bordered={false}/>
    </gg_editor_1.CanvasPanel>
  </gg_editor_1.DetailPanel>); };
exports.default = MindDetailPanel;
//# sourceMappingURL=MindDetailPanel.js.map