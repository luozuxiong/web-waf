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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var pro_layout_1 = require("@ant-design/pro-layout");
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var umi_1 = require("umi");
var style_less_1 = __importDefault(require("./style.less"));
var Step = antd_1.Steps.Step;
var ButtonGroup = antd_1.Button.Group;
var menu = (<antd_1.Menu>
    <antd_1.Menu.Item key="1">选项一</antd_1.Menu.Item>
    <antd_1.Menu.Item key="2">选项二</antd_1.Menu.Item>
    <antd_1.Menu.Item key="3">选项三</antd_1.Menu.Item>
  </antd_1.Menu>);
var mobileMenu = (<antd_1.Menu>
    <antd_1.Menu.Item key="1">操作一</antd_1.Menu.Item>
    <antd_1.Menu.Item key="2">操作二</antd_1.Menu.Item>
    <antd_1.Menu.Item key="3">选项一</antd_1.Menu.Item>
    <antd_1.Menu.Item key="4">选项二</antd_1.Menu.Item>
    <antd_1.Menu.Item key="">选项三</antd_1.Menu.Item>
  </antd_1.Menu>);
var action = (<pro_layout_1.RouteContext.Consumer>
    {function (_a) {
    var isMobile = _a.isMobile;
    if (isMobile) {
        return (<antd_1.Dropdown.Button type="primary" icon={<icons_1.DownOutlined />} overlay={mobileMenu} placement="bottomRight">
            主操作
          </antd_1.Dropdown.Button>);
    }
    return (<react_1.Fragment>
          <ButtonGroup>
            <antd_1.Button>操作一</antd_1.Button>
            <antd_1.Button>操作二</antd_1.Button>
            <antd_1.Dropdown overlay={menu} placement="bottomRight">
              <antd_1.Button>
                <icons_1.EllipsisOutlined />
              </antd_1.Button>
            </antd_1.Dropdown>
          </ButtonGroup>
          <antd_1.Button type="primary">主操作</antd_1.Button>
        </react_1.Fragment>);
}}
  </pro_layout_1.RouteContext.Consumer>);
var extra = (<div className={style_less_1.default.moreInfo}>
    <antd_1.Statistic title="状态" value="待审批"/>
    <antd_1.Statistic title="订单金额" value={568.08} prefix="¥"/>
  </div>);
var description = (<pro_layout_1.RouteContext.Consumer>
    {function (_a) {
    var isMobile = _a.isMobile;
    return (<antd_1.Descriptions className={style_less_1.default.headerList} size="small" column={isMobile ? 1 : 2}>
        <antd_1.Descriptions.Item label="创建人">曲丽丽</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="订购产品">XX 服务</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="创建时间">2017-07-07</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="关联单据">
          <a href="">12421</a>
        </antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="生效日期">2017-07-07 ~ 2017-08-08</antd_1.Descriptions.Item>
        <antd_1.Descriptions.Item label="备注">请于两个工作日内确认</antd_1.Descriptions.Item>
      </antd_1.Descriptions>);
}}
  </pro_layout_1.RouteContext.Consumer>);
var desc1 = (<div className={classnames_1.default(style_less_1.default.textSecondary, style_less_1.default.stepDescription)}>
    <react_1.Fragment>
      曲丽丽
      <icons_1.DingdingOutlined style={{ marginLeft: 8 }}/>
    </react_1.Fragment>
    <div>2016-12-12 12:32</div>
  </div>);
var desc2 = (<div className={style_less_1.default.stepDescription}>
    <react_1.Fragment>
      周毛毛
      <icons_1.DingdingOutlined style={{ color: '#00A0E9', marginLeft: 8 }}/>
    </react_1.Fragment>
    <div>
      <a href="">催一下</a>
    </div>
  </div>);
var popoverContent = (<div style={{ width: 160 }}>
    吴加号
    <span className={style_less_1.default.textSecondary} style={{ float: 'right' }}>
      <antd_1.Badge status="default" text={<span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>未响应</span>}/>
    </span>
    <div className={style_less_1.default.textSecondary} style={{ marginTop: 4 }}>
      耗时：2小时25分钟
    </div>
  </div>);
var customDot = function (dot, _a) {
    var status = _a.status;
    if (status === 'process') {
        return (<antd_1.Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
        <>{dot}</>
      </antd_1.Popover>);
    }
    return dot;
};
var operationTabList = [
    {
        key: 'tab1',
        tab: '操作日志一',
    },
    {
        key: 'tab2',
        tab: '操作日志二',
    },
    {
        key: 'tab3',
        tab: '操作日志三',
    },
];
var columns = [
    {
        title: '操作类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '操作人',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '执行结果',
        dataIndex: 'status',
        key: 'status',
        render: function (text) {
            if (text === 'agree') {
                return <antd_1.Badge status="success" text="成功"/>;
            }
            return <antd_1.Badge status="error" text="驳回"/>;
        },
    },
    {
        title: '操作时间',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
    },
    {
        title: '备注',
        dataIndex: 'memo',
        key: 'memo',
    },
];
var Advanced = /** @class */ (function (_super) {
    __extends(Advanced, _super);
    function Advanced() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            operationKey: 'tab1',
            tabActiveKey: 'detail',
        };
        _this.onOperationTabChange = function (key) {
            _this.setState({ operationKey: key });
        };
        _this.onTabChange = function (tabActiveKey) {
            _this.setState({ tabActiveKey: tabActiveKey });
        };
        return _this;
    }
    Advanced.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'profileAndadvanced/fetchAdvanced',
        });
    };
    Advanced.prototype.render = function () {
        var _a = this.state, operationKey = _a.operationKey, tabActiveKey = _a.tabActiveKey;
        var _b = this.props, profileAndadvanced = _b.profileAndadvanced, loading = _b.loading;
        var advancedOperation1 = profileAndadvanced.advancedOperation1, advancedOperation2 = profileAndadvanced.advancedOperation2, advancedOperation3 = profileAndadvanced.advancedOperation3;
        var contentList = {
            tab1: (<antd_1.Table pagination={false} loading={loading} dataSource={advancedOperation1} columns={columns}/>),
            tab2: (<antd_1.Table pagination={false} loading={loading} dataSource={advancedOperation2} columns={columns}/>),
            tab3: (<antd_1.Table pagination={false} loading={loading} dataSource={advancedOperation3} columns={columns}/>),
        };
        return (<pro_layout_1.PageHeaderWrapper title="单号：234231029431" extra={action} className={style_less_1.default.pageHeader} content={description} extraContent={extra} tabActiveKey={tabActiveKey} onTabChange={this.onTabChange} tabList={[
            {
                key: 'detail',
                tab: '详情',
            },
            {
                key: 'rule',
                tab: '规则',
            },
        ]}>
        <div className={style_less_1.default.main}>
          <pro_layout_1.GridContent>
            <antd_1.Card title="流程进度" style={{ marginBottom: 24 }}>
              <pro_layout_1.RouteContext.Consumer>
                {function (_a) {
            var isMobile = _a.isMobile;
            return (<antd_1.Steps direction={isMobile ? 'vertical' : 'horizontal'} progressDot={customDot} current={1}>
                    <Step title="创建项目" description={desc1}/>
                    <Step title="部门初审" description={desc2}/>
                    <Step title="财务复核"/>
                    <Step title="完成"/>
                  </antd_1.Steps>);
        }}
              </pro_layout_1.RouteContext.Consumer>
            </antd_1.Card>
            <antd_1.Card title="用户信息" style={{ marginBottom: 24 }} bordered={false}>
              <antd_1.Descriptions style={{ marginBottom: 24 }}>
                <antd_1.Descriptions.Item label="用户姓名">付小小</antd_1.Descriptions.Item>
                <antd_1.Descriptions.Item label="会员卡号">32943898021309809423</antd_1.Descriptions.Item>
                <antd_1.Descriptions.Item label="身份证">3321944288191034921</antd_1.Descriptions.Item>
                <antd_1.Descriptions.Item label="联系方式">18112345678</antd_1.Descriptions.Item>
                <antd_1.Descriptions.Item label="联系地址">
                  曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
                </antd_1.Descriptions.Item>
              </antd_1.Descriptions>
              <antd_1.Descriptions style={{ marginBottom: 24 }} title="信息组">
                <antd_1.Descriptions.Item label="某某数据">725</antd_1.Descriptions.Item>
                <antd_1.Descriptions.Item label="该数据更新时间">2017-08-08</antd_1.Descriptions.Item>
                <antd_1.Descriptions.Item label={<span>
                      某某数据
                      <antd_1.Tooltip title="数据说明">
                        <icons_1.InfoCircleOutlined style={{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }}/>
                      </antd_1.Tooltip>
                    </span>}>
                  725
                </antd_1.Descriptions.Item>
                <antd_1.Descriptions.Item label="该数据更新时间">2017-08-08</antd_1.Descriptions.Item>
              </antd_1.Descriptions>
              <h4 style={{ marginBottom: 16 }}>信息组</h4>
              <antd_1.Card type="inner" title="多层级信息组">
                <antd_1.Descriptions style={{ marginBottom: 16 }} title="组名称">
                  <antd_1.Descriptions.Item label="负责人">林东东</antd_1.Descriptions.Item>
                  <antd_1.Descriptions.Item label="角色码">1234567</antd_1.Descriptions.Item>
                  <antd_1.Descriptions.Item label="所属部门">XX公司 - YY部</antd_1.Descriptions.Item>
                  <antd_1.Descriptions.Item label="过期时间">2017-08-08</antd_1.Descriptions.Item>
                  <antd_1.Descriptions.Item label="描述">
                    这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...
                  </antd_1.Descriptions.Item>
                </antd_1.Descriptions>
                <antd_1.Divider style={{ margin: '16px 0' }}/>
                <antd_1.Descriptions style={{ marginBottom: 16 }} title="组名称" column={1}>
                  <antd_1.Descriptions.Item label="学名">
                    Citrullus lanatus (Thunb.) Matsum. et
                    Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
                  </antd_1.Descriptions.Item>
                </antd_1.Descriptions>
                <antd_1.Divider style={{ margin: '16px 0' }}/>
                <antd_1.Descriptions title="组名称">
                  <antd_1.Descriptions.Item label="负责人">付小小</antd_1.Descriptions.Item>
                  <antd_1.Descriptions.Item label="角色码">1234568</antd_1.Descriptions.Item>
                </antd_1.Descriptions>
              </antd_1.Card>
            </antd_1.Card>
            <antd_1.Card title="用户近半年来电记录" style={{ marginBottom: 24 }} bordered={false}>
              <antd_1.Empty />
            </antd_1.Card>
            <antd_1.Card className={style_less_1.default.tabsCard} bordered={false} tabList={operationTabList} onTabChange={this.onOperationTabChange}>
              {contentList[operationKey]}
            </antd_1.Card>
          </pro_layout_1.GridContent>
        </div>
      </pro_layout_1.PageHeaderWrapper>);
    };
    return Advanced;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var profileAndadvanced = _a.profileAndadvanced, loading = _a.loading;
    return ({
        profileAndadvanced: profileAndadvanced,
        loading: loading.effects['profileAndadvanced/fetchAdvanced'],
    });
})(Advanced);
//# sourceMappingURL=index.js.map