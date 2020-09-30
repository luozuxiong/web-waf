"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var AvatarDropdown_1 = __importDefault(require("./AvatarDropdown"));
var HeaderSearch_1 = __importDefault(require("../HeaderSearch"));
var index_less_1 = __importDefault(require("./index.less"));
var NoticeIconView_1 = __importDefault(require("./NoticeIconView"));
var ENVTagColor = {
    dev: 'orange',
    test: 'green',
    pre: '#87d068',
};
var GlobalHeaderRight = function (props) {
    var theme = props.theme, layout = props.layout;
    var className = index_less_1.default.right;
    if (theme === 'dark' && layout === 'top') {
        className = index_less_1.default.right + "  " + index_less_1.default.dark;
    }
    return (<div className={className}>
      <HeaderSearch_1.default className={index_less_1.default.action + " " + index_less_1.default.search} placeholder="站内搜索" defaultValue="umi ui" options={[
        {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: 'umi ui',
        },
        {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
        },
        {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
        },
        {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
        },
    ]} // onSearch={value => {
    />
      <antd_1.Tooltip title="使用文档">
        <a style={{
        color: 'inherit',
    }} target="_blank" href="https://pro.ant.design/docs/getting-started" rel="noopener noreferrer" className={index_less_1.default.action}>
          <icons_1.QuestionCircleOutlined />
        </a>
      </antd_1.Tooltip>
      <NoticeIconView_1.default />
      <AvatarDropdown_1.default menu/>
      {REACT_APP_ENV && (<span>
          <antd_1.Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</antd_1.Tag>
        </span>)}
      <umi_1.SelectLang className={index_less_1.default.action}/>
    </div>);
};
exports.default = umi_1.connect(function (_a) {
    var settings = _a.settings;
    return ({
        theme: settings.navTheme,
        layout: settings.layout,
    });
})(GlobalHeaderRight);
//# sourceMappingURL=RightContent.js.map