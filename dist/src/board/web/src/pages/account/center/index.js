"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var Projects_1 = __importDefault(require("./components/Projects"));
var Articles_1 = __importDefault(require("./components/Articles"));
var Applications_1 = __importDefault(require("./components/Applications"));
var Center_less_1 = __importDefault(require("./Center.less"));
var operationTabList = [
    {
        key: 'articles',
        tab: (<span>
        文章 <span style={{ fontSize: 14 }}>(8)</span>
      </span>),
    },
    {
        key: 'applications',
        tab: (<span>
        应用 <span style={{ fontSize: 14 }}>(8)</span>
      </span>),
    },
    {
        key: 'projects',
        tab: (<span>
        项目 <span style={{ fontSize: 14 }}>(8)</span>
      </span>),
    },
];
var TagList = function (_a) {
    var tags = _a.tags;
    var ref = react_1.useRef(null);
    var _b = react_1.useState([]), newTags = _b[0], setNewTags = _b[1];
    var _c = react_1.useState(false), inputVisible = _c[0], setInputVisible = _c[1];
    var _d = react_1.useState(''), inputValue = _d[0], setInputValue = _d[1];
    var showInput = function () {
        var _a;
        setInputVisible(true);
        if (ref.current) {
            // eslint-disable-next-line no-unused-expressions
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    var handleInputChange = function (e) {
        setInputValue(e.target.value);
    };
    var handleInputConfirm = function () {
        var tempsTags = __spreadArrays(newTags);
        if (inputValue && tempsTags.filter(function (tag) { return tag.label === inputValue; }).length === 0) {
            tempsTags = __spreadArrays(tempsTags, [{ key: "new-" + tempsTags.length, label: inputValue }]);
        }
        setNewTags(tempsTags);
        setInputVisible(false);
        setInputValue('');
    };
    return (<div className={Center_less_1.default.tags}>
      <div className={Center_less_1.default.tagsTitle}>标签</div>
      {(tags || []).concat(newTags).map(function (item) { return (<antd_1.Tag key={item.key}>{item.label}</antd_1.Tag>); })}
      {inputVisible && (<antd_1.Input ref={ref} type="text" size="small" style={{ width: 78 }} value={inputValue} onChange={handleInputChange} onBlur={handleInputConfirm} onPressEnter={handleInputConfirm}/>)}
      {!inputVisible && (<antd_1.Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
          <icons_1.PlusOutlined />
        </antd_1.Tag>)}
    </div>);
};
var Center = /** @class */ (function (_super) {
    __extends(Center, _super);
    function Center() {
        // static getDerivedStateFromProps(
        //   props: accountAndcenterProps,
        //   state: accountAndcenterState,
        // ) {
        //   const { match, location } = props;
        //   const { tabKey } = state;
        //   const path = match && match.path;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   const urlTabKey = location.pathname.replace(`${path}/`, '');
        //   if (urlTabKey && urlTabKey !== '/' && tabKey !== urlTabKey) {
        //     return {
        //       tabKey: urlTabKey,
        //     };
        //   }
        //   return null;
        // }
        _this.state = {
            tabKey: 'articles',
        };
        _this.input = undefined;
        _this.onTabChange = function (key) {
            // If you need to sync state to url
            // const { match } = this.props;
            // router.push(`${match.url}/${key}`);
            _this.setState({
                tabKey: key,
            });
        };
        _this.renderChildrenByTabKey = function (tabKey) {
            if (tabKey === 'projects') {
                return <Projects_1.default />;
            }
            if (tabKey === 'applications') {
                return <Applications_1.default />;
            }
            if (tabKey === 'articles') {
                return <Articles_1.default />;
            }
            return null;
        };
        _this.renderUserInfo = function (currentUser) { return (<div className={Center_less_1.default.detail}>
      <p>
        <icons_1.ContactsOutlined style={{
            marginRight: 8,
        }}/>
        {currentUser.title}
      </p>
      <p>
        <icons_1.ClusterOutlined style={{
            marginRight: 8,
        }}/>
        {currentUser.group}
      </p>
      <p>
        <icons_1.HomeOutlined style={{
            marginRight: 8,
        }}/>
        {(currentUser.geographic || { province: { label: '' } }).province.label}
        {(currentUser.geographic || {
            city: {
                label: '',
            },
        }).city.label}
      </p>
    </div>); };
        return _this;
    }
    Center.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'accountAndcenter/fetchCurrent',
        });
        dispatch({
            type: 'accountAndcenter/fetch',
        });
    };
    Center.prototype.render = function () {
        var tabKey = this.state.tabKey;
        var _a = this.props, _b = _a.currentUser, currentUser = _b === void 0 ? {} : _b, currentUserLoading = _a.currentUserLoading;
        var dataLoading = currentUserLoading || !(currentUser && Object.keys(currentUser).length);
        return (<pro_layout_1.GridContent>
        <antd_1.Row gutter={24}>
          <antd_1.Col lg={7} md={24}>
            <antd_1.Card bordered={false} style={{ marginBottom: 24 }} loading={dataLoading}>
              {!dataLoading && (<div>
                  <div className={Center_less_1.default.avatarHolder}>
                    <img alt="" src={currentUser.avatar}/>
                    <div className={Center_less_1.default.name}>{currentUser.name}</div>
                    <div>{currentUser.signature}</div>
                  </div>
                  {this.renderUserInfo(currentUser)}
                  <antd_1.Divider dashed/>
                  <TagList tags={currentUser.tags || []}/>
                  <antd_1.Divider style={{ marginTop: 16 }} dashed/>
                  <div className={Center_less_1.default.team}>
                    <div className={Center_less_1.default.teamTitle}>团队</div>
                    <antd_1.Row gutter={36}>
                      {currentUser.notice &&
            currentUser.notice.map(function (item) { return (<antd_1.Col key={item.id} lg={24} xl={12}>
                            <umi_1.Link to={item.href}>
                              <antd_1.Avatar size="small" src={item.logo}/>
                              {item.member}
                            </umi_1.Link>
                          </antd_1.Col>); })}
                    </antd_1.Row>
                  </div>
                </div>)}
            </antd_1.Card>
          </antd_1.Col>
          <antd_1.Col lg={17} md={24}>
            <antd_1.Card className={Center_less_1.default.tabsCard} bordered={false} tabList={operationTabList} activeTabKey={tabKey} onTabChange={this.onTabChange}>
              {this.renderChildrenByTabKey(tabKey)}
            </antd_1.Card>
          </antd_1.Col>
        </antd_1.Row>
      </pro_layout_1.GridContent>);
    };
    return Center;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var loading = _a.loading, accountAndcenter = _a.accountAndcenter;
    return ({
        currentUser: accountAndcenter.currentUser,
        currentUserLoading: loading.effects['accountAndcenter/fetchCurrent'],
    });
})(Center);
//# sourceMappingURL=index.js.map