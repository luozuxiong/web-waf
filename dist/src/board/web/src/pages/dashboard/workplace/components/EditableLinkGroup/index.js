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
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var index_less_1 = __importDefault(require("./index.less"));
var EditableLinkGroup = function (props) {
    var links = props.links, linkElement = props.linkElement, onAdd = props.onAdd;
    return (<div className={index_less_1.default.linkGroup}>
      {links.map(function (link) {
        return react_1.createElement(linkElement, {
            key: "linkGroup-item-" + (link.id || link.title),
            to: link.href,
            href: link.href,
        }, link.title);
    })}
      <antd_1.Button size="small" type="primary" ghost onClick={onAdd}>
        <icons_1.PlusOutlined /> 添加
      </antd_1.Button>
    </div>);
};
EditableLinkGroup.defaultProps = {
    links: [],
    onAdd: function () { },
    linkElement: 'a',
};
exports.default = EditableLinkGroup;
//# sourceMappingURL=index.js.map