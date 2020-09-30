"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var antd_1 = require("antd");
var Welcome_less_1 = __importDefault(require("./Welcome.less"));
var CodePreview = function (_a) {
    var children = _a.children;
    return (<pre className={Welcome_less_1.default.pre}>
    <code>
      <antd_1.Typography.Text copyable>{children}</antd_1.Typography.Text>
    </code>
  </pre>);
};
exports.default = (function () { return (<pro_layout_1.PageContainer>
    <antd_1.Card>
      <antd_1.Alert message="更快更强的重型组件，已经发布。" type="success" showIcon banner style={{
    margin: -12,
    marginBottom: 24,
}}/>
      <antd_1.Typography.Text strong>
        高级表格{' '}
        <a href="https://protable.ant.design/" rel="noopener noreferrer" target="__blank">
          欢迎使用
        </a>
      </antd_1.Typography.Text>
      <CodePreview>yarn add @ant-design/pro-table</CodePreview>
      <antd_1.Typography.Text strong style={{
    marginBottom: 12,
}}>
        高级布局{' '}
        <a href="https://prolayout.ant.design/" rel="noopener noreferrer" target="__blank">
          欢迎使用
        </a>
      </antd_1.Typography.Text>
      <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
    </antd_1.Card>
  </pro_layout_1.PageContainer>); });
//# sourceMappingURL=Welcome.js.map