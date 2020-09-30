"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var gg_editor_1 = __importStar(require("gg-editor"));
var pro_layout_1 = require("@ant-design/pro-layout");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var EditorMinimap_1 = __importDefault(require("./components/EditorMinimap"));
var EditorContextMenu_1 = require("./components/EditorContextMenu");
var EditorDetailPanel_1 = require("./components/EditorDetailPanel");
var EditorItemPanel_1 = require("./components/EditorItemPanel");
var EditorToolbar_1 = require("./components/EditorToolbar");
var index_less_1 = __importDefault(require("./index.less"));
gg_editor_1.default.setTrackable(false);
exports.default = (function () { return (<pro_layout_1.PageHeaderWrapper content={umi_1.formatMessage({
    id: 'editorandkoni.description',
    defaultMessage: 'description',
})}>
    <gg_editor_1.default className={index_less_1.default.editor}>
      <antd_1.Row className={index_less_1.default.editorHd}>
        <antd_1.Col span={24}>
          <EditorToolbar_1.KoniToolbar />
        </antd_1.Col>
      </antd_1.Row>
      <antd_1.Row className={index_less_1.default.editorBd}>
        <antd_1.Col span={2} className={index_less_1.default.editorSidebar}>
          <EditorItemPanel_1.KoniItemPanel />
        </antd_1.Col>
        <antd_1.Col span={16} className={index_less_1.default.editorContent}>
          <gg_editor_1.Koni className={index_less_1.default.koni}/>
        </antd_1.Col>
        <antd_1.Col span={6} className={index_less_1.default.editorSidebar}>
          <EditorDetailPanel_1.KoniDetailPanel />
          <EditorMinimap_1.default />
        </antd_1.Col>
      </antd_1.Row>
      <EditorContextMenu_1.KoniContextMenu />
    </gg_editor_1.default>
  </pro_layout_1.PageHeaderWrapper>); });
//# sourceMappingURL=index.js.map