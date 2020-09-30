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
exports.Applications = exports.formatWan = void 0;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var numeral_1 = __importDefault(require("numeral"));
var StandardFormRow_1 = __importDefault(require("./components/StandardFormRow"));
var TagSelect_1 = __importDefault(require("./components/TagSelect"));
var style_less_1 = __importDefault(require("./style.less"));
var Option = antd_1.Select.Option;
function formatWan(val) {
    var v = val * 1;
    if (!v || Number.isNaN(v))
        return '';
    var result = val;
    if (val > 10000) {
        result = (<span>
        {Math.floor(val / 10000)}
        <span style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
        }}>
          万
        </span>
      </span>);
    }
    return result;
}
exports.formatWan = formatWan;
var formItemLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
var CardInfo = function (_a) {
    var activeUser = _a.activeUser, newUser = _a.newUser;
    return (<div className={style_less_1.default.cardInfo}>
    <div>
      <p>活跃用户</p>
      <p>{activeUser}</p>
    </div>
    <div>
      <p>新增用户</p>
      <p>{newUser}</p>
    </div>
  </div>);
};
exports.Applications = function (props) {
    var dispatch = props.dispatch, loading = props.loading, list = props.listAndsearchAndapplications.list;
    react_1.useEffect(function () {
        dispatch({
            type: 'listAndsearchAndapplications/fetch',
            payload: {
                count: 8,
            },
        });
    }, [1]);
    var handleValuesChange = function () {
        dispatch({
            type: 'listAndsearchAndapplications/fetch',
            payload: {
                count: 8,
            },
        });
    };
    var itemMenu = (<antd_1.Menu>
      <antd_1.Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com/">
          1st menu item
        </a>
      </antd_1.Menu.Item>
      <antd_1.Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.taobao.com/">
          2nd menu item
        </a>
      </antd_1.Menu.Item>
      <antd_1.Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.tmall.com/">
          3d menu item
        </a>
      </antd_1.Menu.Item>
    </antd_1.Menu>);
    return (<div className={style_less_1.default.filterCardList}>
      <antd_1.Card bordered={false}>
        <antd_1.Form onValuesChange={handleValuesChange}>
          <StandardFormRow_1.default title="所属类目" block style={{ paddingBottom: 11 }}>
            <antd_1.Form.Item name="category">
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
            </antd_1.Form.Item>
          </StandardFormRow_1.default>
          <StandardFormRow_1.default title="其它选项" grid last>
            <antd_1.Row gutter={16}>
              <antd_1.Col lg={8} md={10} sm={10} xs={24}>
                <antd_1.Form.Item {...formItemLayout} name="author" label="作者">
                  <antd_1.Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">王昭君</Option>
                  </antd_1.Select>
                </antd_1.Form.Item>
              </antd_1.Col>
              <antd_1.Col lg={8} md={10} sm={10} xs={24}>
                <antd_1.Form.Item {...formItemLayout} name="rate" label="好评度">
                  <antd_1.Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">优秀</Option>
                    <Option value="normal">普通</Option>
                  </antd_1.Select>
                </antd_1.Form.Item>
              </antd_1.Col>
            </antd_1.Row>
          </StandardFormRow_1.default>
        </antd_1.Form>
      </antd_1.Card>
      <br />
      <antd_1.List rowKey="id" grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
    }} loading={loading} dataSource={list} renderItem={function (item) { return (<antd_1.List.Item key={item.id}>
            <antd_1.Card hoverable bodyStyle={{ paddingBottom: 20 }} actions={[
        <antd_1.Tooltip key="download" title="下载">
                  <icons_1.DownloadOutlined />
                </antd_1.Tooltip>,
        <antd_1.Tooltip key="edit" title="编辑">
                  <icons_1.EditOutlined />
                </antd_1.Tooltip>,
        <antd_1.Tooltip title="分享" key="share">
                  <icons_1.ShareAltOutlined />
                </antd_1.Tooltip>,
        <antd_1.Dropdown key="ellipsis" overlay={itemMenu}>
                  <icons_1.EllipsisOutlined />
                </antd_1.Dropdown>,
    ]}>
              <antd_1.Card.Meta avatar={<antd_1.Avatar size="small" src={item.avatar}/>} title={item.title}/>
              <div className={style_less_1.default.cardItemContent}>
                <CardInfo activeUser={formatWan(item.activeUser)} newUser={numeral_1.default(item.newUser).format('0,0')}/>
              </div>
            </antd_1.Card>
          </antd_1.List.Item>); }}/>
    </div>);
};
exports.default = umi_1.connect(function (_a) {
    var listAndsearchAndapplications = _a.listAndsearchAndapplications, loading = _a.loading;
    return ({
        listAndsearchAndapplications: listAndsearchAndapplications,
        loading: loading.models.listAndsearchAndapplications,
    });
})(exports.Applications);
//# sourceMappingURL=index.js.map