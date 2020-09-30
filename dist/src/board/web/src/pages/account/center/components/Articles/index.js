"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var ArticleListContent_1 = __importDefault(require("../ArticleListContent"));
var index_less_1 = __importDefault(require("./index.less"));
var Articles = function (props) {
    var list = props.list;
    var IconText = function (_a) {
        var icon = _a.icon, text = _a.text;
        return (<span>
      {icon} {text}
    </span>);
    };
    return (<antd_1.List size="large" className={index_less_1.default.articleList} rowKey="id" itemLayout="vertical" dataSource={list} renderItem={function (item) { return (<antd_1.List.Item key={item.id} actions={[
        <IconText key="star" icon={<icons_1.StarTwoTone />} text={item.star}/>,
        <IconText key="like" icon={<icons_1.LikeOutlined />} text={item.like}/>,
        <IconText key="message" icon={<icons_1.MessageFilled />} text={item.message}/>,
    ]}>
          <antd_1.List.Item.Meta title={<a className={index_less_1.default.listItemMetaTitle} href={item.href}>
                {item.title}
              </a>} description={<span>
                <antd_1.Tag>Ant Design</antd_1.Tag>
                <antd_1.Tag>设计语言</antd_1.Tag>
                <antd_1.Tag>蚂蚁金服</antd_1.Tag>
              </span>}/>
          <ArticleListContent_1.default data={item}/>
        </antd_1.List.Item>); }}/>);
};
exports.default = umi_1.connect(function (_a) {
    var accountAndcenter = _a.accountAndcenter;
    return ({
        list: accountAndcenter.list,
    });
})(Articles);
//# sourceMappingURL=index.js.map