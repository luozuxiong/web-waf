"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatWan = void 0;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var umi_1 = require("umi");
var numeral_1 = __importDefault(require("numeral"));
var index_less_1 = __importDefault(require("./index.less"));
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
var Applications = function (props) {
    var list = props.list;
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
    var CardInfo = function (_a) {
        var activeUser = _a.activeUser, newUser = _a.newUser;
        return (<div className={index_less_1.default.cardInfo}>
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
    return (<antd_1.List rowKey="id" className={index_less_1.default.filterCardList} grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
    }} dataSource={list} renderItem={function (item) { return (<antd_1.List.Item key={item.id}>
          <antd_1.Card hoverable bodyStyle={{ paddingBottom: 20 }} actions={[
        <antd_1.Tooltip key="download" title="下载">
                <icons_1.DownloadOutlined />
              </antd_1.Tooltip>,
        <antd_1.Tooltip title="编辑" key="edit">
                <icons_1.EditOutlined />
              </antd_1.Tooltip>,
        <antd_1.Tooltip title="分享" key="share">
                <icons_1.ShareAltOutlined />
              </antd_1.Tooltip>,
        <antd_1.Dropdown overlay={itemMenu} key="ellipsis">
                <icons_1.EllipsisOutlined />
              </antd_1.Dropdown>,
    ]}>
            <antd_1.Card.Meta avatar={<antd_1.Avatar size="small" src={item.avatar}/>} title={item.title}/>
            <div className={index_less_1.default.cardItemContent}>
              <CardInfo activeUser={formatWan(item.activeUser)} newUser={numeral_1.default(item.newUser).format('0,0')}/>
            </div>
          </antd_1.Card>
        </antd_1.List.Item>); }}/>);
};
exports.default = umi_1.connect(function (_a) {
    var accountAndcenter = _a.accountAndcenter;
    return ({
        list: accountAndcenter.list,
    });
})(Applications);
//# sourceMappingURL=index.js.map