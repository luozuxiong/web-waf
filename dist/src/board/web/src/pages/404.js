"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var NoFoundPage = function () { return (<antd_1.Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<antd_1.Button type="primary" onClick={function () { return umi_1.history.push('/'); }}>
        Back Home
      </antd_1.Button>}/>); };
exports.default = NoFoundPage;
//# sourceMappingURL=404.js.map