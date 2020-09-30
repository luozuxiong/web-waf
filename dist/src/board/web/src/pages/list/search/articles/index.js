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
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var umi_1 = require("umi");
var ArticleListContent_1 = __importDefault(require("./components/ArticleListContent"));
var StandardFormRow_1 = __importDefault(require("./components/StandardFormRow"));
var TagSelect_1 = __importDefault(require("./components/TagSelect"));
var style_less_1 = __importDefault(require("./style.less"));
var Option = antd_1.Select.Option;
var FormItem = antd_1.Form.Item;
var pageSize = 5;
var Articles = function (_a) {
    var dispatch = _a.dispatch, list = _a.listAndsearchAndarticles.list, loading = _a.loading;
    var form = antd_1.Form.useForm()[0];
    react_1.useEffect(function () {
        dispatch({
            type: 'listAndsearchAndarticles/fetch',
            payload: {
                count: 5,
            },
        });
    }, []);
    var setOwner = function () {
        form.setFieldsValue({
            owner: ['wzj'],
        });
    };
    var fetchMore = function () {
        dispatch({
            type: 'listAndsearchAndarticles/appendFetch',
            payload: {
                count: pageSize,
            },
        });
    };
    var owners = [
        {
            id: 'wzj',
            name: '我自己',
        },
        {
            id: 'wjh',
            name: '吴家豪',
        },
        {
            id: 'zxx',
            name: '周星星',
        },
        {
            id: 'zly',
            name: '赵丽颖',
        },
        {
            id: 'ym',
            name: '姚明',
        },
    ];
    var IconText = function (_a) {
        var type = _a.type, text = _a.text;
        switch (type) {
            case 'star-o':
                return (<span>
            <icons_1.StarOutlined style={{ marginRight: 8 }}/>
            {text}
          </span>);
            case 'like-o':
                return (<span>
            <icons_1.LikeOutlined style={{ marginRight: 8 }}/>
            {text}
          </span>);
            case 'message':
                return (<span>
            <icons_1.MessageOutlined style={{ marginRight: 8 }}/>
            {text}
          </span>);
            default:
                return null;
        }
    };
    var formItemLayout = {
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 12 },
        },
    };
    var loadMore = list.length > 0 && (<div style={{ textAlign: 'center', marginTop: 16 }}>
      <antd_1.Button onClick={fetchMore} style={{ paddingLeft: 48, paddingRight: 48 }}>
        {loading ? (<span>
            <icons_1.LoadingOutlined /> 加载中...
          </span>) : ('加载更多')}
      </antd_1.Button>
    </div>);
    return (<>
      <antd_1.Card bordered={false}>
        <antd_1.Form layout="inline" form={form} initialValues={{
        owner: ['wjh', 'zxx'],
    }} onValuesChange={function () {
        dispatch({
            type: 'listAndsearchAndarticles/fetch',
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
          <StandardFormRow_1.default title="owner" grid>
            <FormItem name="owner" noStyle>
              <antd_1.Select mode="multiple" placeholder="选择 owner">
                {owners.map(function (owner) { return (<Option key={owner.id} value={owner.id}>
                    {owner.name}
                  </Option>); })}
              </antd_1.Select>
            </FormItem>
            <a className={style_less_1.default.selfTrigger} onClick={setOwner}>
              只看自己的
            </a>
          </StandardFormRow_1.default>
          <StandardFormRow_1.default title="其它选项" grid last>
            <antd_1.Row gutter={16}>
              <antd_1.Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="活跃用户" name="user">
                  <antd_1.Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">李三</Option>
                  </antd_1.Select>
                </FormItem>
              </antd_1.Col>
              <antd_1.Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="好评度" name="rate">
                  <antd_1.Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">优秀</Option>
                  </antd_1.Select>
                </FormItem>
              </antd_1.Col>
            </antd_1.Row>
          </StandardFormRow_1.default>
        </antd_1.Form>
      </antd_1.Card>
      <antd_1.Card style={{ marginTop: 24 }} bordered={false} bodyStyle={{ padding: '8px 32px 32px 32px' }}>
        <antd_1.List size="large" loading={list.length === 0 ? loading : false} rowKey="id" itemLayout="vertical" loadMore={loadMore} dataSource={list} renderItem={function (item) { return (<antd_1.List.Item key={item.id} actions={[
        <IconText key="star" type="star-o" text={item.star}/>,
        <IconText key="like" type="like-o" text={item.like}/>,
        <IconText key="message" type="message" text={item.message}/>,
    ]} extra={<div className={style_less_1.default.listItemExtra}/>}>
              <antd_1.List.Item.Meta title={<a className={style_less_1.default.listItemMetaTitle} href={item.href}>
                    {item.title}
                  </a>} description={<span>
                    <antd_1.Tag>Ant Design</antd_1.Tag>
                    <antd_1.Tag>设计语言</antd_1.Tag>
                    <antd_1.Tag>蚂蚁金服</antd_1.Tag>
                  </span>}/>
              <ArticleListContent_1.default data={item}/>
            </antd_1.List.Item>); }}/>
      </antd_1.Card>
    </>);
};
exports.default = umi_1.connect(function (_a) {
    var listAndsearchAndarticles = _a.listAndsearchAndarticles, loading = _a.loading;
    return ({
        listAndsearchAndarticles: listAndsearchAndarticles,
        loading: loading.models.listAndsearchAndarticles,
    });
})(Articles);
//# sourceMappingURL=index.js.map