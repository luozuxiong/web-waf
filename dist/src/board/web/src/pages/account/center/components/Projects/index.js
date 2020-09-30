"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var moment_1 = __importDefault(require("moment"));
var AvatarList_1 = __importDefault(require("../AvatarList"));
var index_less_1 = __importDefault(require("./index.less"));
var Projects = function (props) {
    var list = props.list;
    return (<antd_1.List className={index_less_1.default.coverCardList} rowKey="id" grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
    }} dataSource={list} renderItem={function (item) { return (<antd_1.List.Item>
          <antd_1.Card className={index_less_1.default.card} hoverable cover={<img alt={item.title} src={item.cover}/>}>
            <antd_1.Card.Meta title={<a>{item.title}</a>} description={item.subDescription}/>
            <div className={index_less_1.default.cardItemContent}>
              <span>{moment_1.default(item.updatedAt).fromNow()}</span>
              <div className={index_less_1.default.avatarList}>
                <AvatarList_1.default size="small">
                  {item.members.map(function (member) { return (<AvatarList_1.default.Item key={item.id + "-avatar-" + member.id} src={member.avatar} tips={member.name}/>); })}
                </AvatarList_1.default>
              </div>
            </div>
          </antd_1.Card>
        </antd_1.List.Item>); }}/>);
};
exports.default = umi_1.connect(function (_a) {
    var accountAndcenter = _a.accountAndcenter;
    return ({
        list: accountAndcenter.list,
    });
})(Projects);
//# sourceMappingURL=index.js.map