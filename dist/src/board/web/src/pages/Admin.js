"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var pro_layout_1 = require("@ant-design/pro-layout");
exports.default = (function () { return (<pro_layout_1.PageHeaderWrapper content=" 这个页面只有 admin 权限才能查看">
    <antd_1.Card>
      <antd_1.Alert message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。" type="success" showIcon banner style={{
    margin: -12,
    marginBottom: 48,
}}/>
      <antd_1.Typography.Title level={2} style={{ textAlign: 'center' }}>
        <icons_1.SmileTwoTone /> Ant Design Pro <icons_1.HeartTwoTone twoToneColor="#eb2f96"/> You
      </antd_1.Typography.Title>
    </antd_1.Card>
    <p style={{ textAlign: 'center', marginTop: 24 }}>
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
  </pro_layout_1.PageHeaderWrapper>); });
//# sourceMappingURL=Admin.js.map