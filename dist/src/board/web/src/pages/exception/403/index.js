"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var umi_1 = require("umi");
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
exports.default = (function () { return (<antd_1.Result status="403" title="403" style={{
    background: 'none',
}} subTitle="Sorry, you don't have access to this page." extra={<umi_1.Link to="/">
        <antd_1.Button type="primary">Back to home</antd_1.Button>
      </umi_1.Link>}/>); });
//# sourceMappingURL=index.js.map