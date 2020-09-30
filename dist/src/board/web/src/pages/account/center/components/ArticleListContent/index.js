"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var index_less_1 = __importDefault(require("./index.less"));
var ArticleListContent = function (_a) {
    var _b = _a.data, content = _b.content, updatedAt = _b.updatedAt, avatar = _b.avatar, owner = _b.owner, href = _b.href;
    return (<div className={index_less_1.default.listContent}>
    <div className={index_less_1.default.description}>{content}</div>
    <div className={index_less_1.default.extra}>
      <antd_1.Avatar src={avatar} size="small"/>
      <a href={href}>{owner}</a> 发布在 <a href={href}>{href}</a>
      <em>{moment_1.default(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>);
};
exports.default = ArticleListContent;
//# sourceMappingURL=index.js.map