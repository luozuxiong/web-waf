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
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var moment_1 = __importDefault(require("moment"));
var AvatarList_1 = __importDefault(require("./components/AvatarList"));
var StandardFormRow_1 = __importDefault(require("./components/StandardFormRow"));
var TagSelect_1 = __importDefault(require("./components/TagSelect"));
var style_less_1 = __importDefault(require("./style.less"));
var Option = antd_1.Select.Option;
var FormItem = antd_1.Form.Item;
var Paragraph = antd_1.Typography.Paragraph;
var getKey = function (id, index) { return id + "-" + index; };
var Projects = function (_a) {
    var dispatch = _a.dispatch, _b = _a.listAndsearchAndprojects.list, list = _b === void 0 ? [] : _b, loading = _a.loading;
    react_1.useEffect(function () {
        dispatch({
            type: 'listAndsearchAndprojects/fetch',
            payload: {
                count: 8,
            },
        });
    }, []);
    var cardList = list && (<antd_1.List rowKey="id" loading={loading} grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
    }} dataSource={list} renderItem={function (item) { return (<antd_1.List.Item>
          <antd_1.Card className={style_less_1.default.card} hoverable cover={<img alt={item.title} src={item.cover}/>}>
            <antd_1.Card.Meta title={<a>{item.title}</a>} description={<Paragraph className={style_less_1.default.item} ellipsis={{ rows: 2 }}>
                  {item.subDescription}
                </Paragraph>}/>
            <div className={style_less_1.default.cardItemContent}>
              <span>{moment_1.default(item.updatedAt).fromNow()}</span>
              <div className={style_less_1.default.avatarList}>
                <AvatarList_1.default size="small">
                  {item.members.map(function (member, i) { return (<AvatarList_1.default.Item key={getKey(item.id, i)} src={member.avatar} tips={member.name}/>); })}
                </AvatarList_1.default>
              </div>
            </div>
          </antd_1.Card>
        </antd_1.List.Item>); }}/>);
    var formItemLayout = {
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    return (<div className={style_less_1.default.coverCardList}>
      <antd_1.Card bordered={false}>
        <antd_1.Form layout="inline" onValuesChange={function () {
        // 表单项变化时请求数据
        // 模拟查询表单生效
        dispatch({
            type: 'listAndsearchAndprojects/fetch',
            payload: {
                count: 8,
            },
        });
    }}>
          <StandardFormRow_1.default title="所属类目" block style={{ paddingBottom: 11 }}>
            <FormItem name="category">
              <TagSelect_1.default expandable>
                <TagSelect_1.default.Option value="cat1">类目一</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat2">类目二</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat3">类目三</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat4">类目四</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat5">类目五</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat6">类目六</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat7">类目七</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat8">类目八</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat9">类目九</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat10">类目十</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat11">类目十一</TagSelect_1.default.Option>
                <TagSelect_1.default.Option value="cat12">类目十二</TagSelect_1.default.Option>
              </TagSelect_1.default>
            </FormItem>
          </StandardFormRow_1.default>
          <StandardFormRow_1.default title="其它选项" grid last>
            <antd_1.Row gutter={16}>
              <antd_1.Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="作者" name="author">
                  <antd_1.Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">王昭君</Option>
                  </antd_1.Select>
                </FormItem>
              </antd_1.Col>
              <antd_1.Col lg={8} md={10} sm={10} xs={24}>
                <FormItem {...formItemLayout} label="好评度" name="rate">
                  <antd_1.Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">优秀</Option>
                    <Option value="normal">普通</Option>
                  </antd_1.Select>
                </FormItem>
              </antd_1.Col>
            </antd_1.Row>
          </StandardFormRow_1.default>
        </antd_1.Form>
      </antd_1.Card>
      <div className={style_less_1.default.cardList}>{cardList}</div>
    </div>);
};
exports.default = umi_1.connect(function (_a) {
    var listAndsearchAndprojects = _a.listAndsearchAndprojects, loading = _a.loading;
    return ({
        listAndsearchAndprojects: listAndsearchAndprojects,
        loading: loading.models.listAndsearchAndprojects,
    });
})(Projects);
//# sourceMappingURL=index.js.map