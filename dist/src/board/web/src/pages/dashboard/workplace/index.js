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
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var umi_1 = require("umi");
var pro_layout_1 = require("@ant-design/pro-layout");
var moment_1 = __importDefault(require("moment"));
var Radar_1 = __importDefault(require("./components/Radar"));
var EditableLinkGroup_1 = __importDefault(require("./components/EditableLinkGroup"));
var style_less_1 = __importDefault(require("./style.less"));
var links = [
    {
        title: '操作一',
        href: '',
    },
    {
        title: '操作二',
        href: '',
    },
    {
        title: '操作三',
        href: '',
    },
    {
        title: '操作四',
        href: '',
    },
    {
        title: '操作五',
        href: '',
    },
    {
        title: '操作六',
        href: '',
    },
];
var PageHeaderContent = function (_a) {
    var currentUser = _a.currentUser;
    var loading = currentUser && Object.keys(currentUser).length;
    if (!loading) {
        return <antd_1.Skeleton avatar paragraph={{ rows: 1 }} active/>;
    }
    return (<div className={style_less_1.default.pageHeaderContent}>
      <div className={style_less_1.default.avatar}>
        <antd_1.Avatar size="large" src={currentUser.avatar}/>
      </div>
      <div className={style_less_1.default.content}>
        <div className={style_less_1.default.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>);
};
var ExtraContent = function () { return (<div className={style_less_1.default.extraContent}>
    <div className={style_less_1.default.statItem}>
      <antd_1.Statistic title="项目数" value={56}/>
    </div>
    <div className={style_less_1.default.statItem}>
      <antd_1.Statistic title="团队内排名" value={8} suffix="/ 24"/>
    </div>
    <div className={style_less_1.default.statItem}>
      <antd_1.Statistic title="项目访问" value={2223}/>
    </div>
  </div>); };
var Workplace = /** @class */ (function (_super) {
    __extends(Workplace, _super);
    function Workplace() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderActivities = function (item) {
            var events = item.template.split(/@\{([^{}]*)\}/gi).map(function (key) {
                if (item[key]) {
                    return (<a href={item[key].link} key={item[key].name}>
            {item[key].name}
          </a>);
                }
                return key;
            });
            return (<antd_1.List.Item key={item.id}>
        <antd_1.List.Item.Meta avatar={<antd_1.Avatar src={item.user.avatar}/>} title={<span>
              <a className={style_less_1.default.username}>{item.user.name}</a>
              &nbsp;
              <span className={style_less_1.default.event}>{events}</span>
            </span>} description={<span className={style_less_1.default.datetime} title={item.updatedAt}>
              {moment_1.default(item.updatedAt).fromNow()}
            </span>}/>
      </antd_1.List.Item>);
        };
        return _this;
    }
    Workplace.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'dashboardAndworkplace/init',
        });
    };
    Workplace.prototype.componentWillUnmount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'dashboardAndworkplace/clear',
        });
    };
    Workplace.prototype.render = function () {
        var _this = this;
        var _a = this.props, currentUser = _a.currentUser, activities = _a.activities, projectNotice = _a.projectNotice, projectLoading = _a.projectLoading, activitiesLoading = _a.activitiesLoading, radarData = _a.radarData;
        if (!currentUser || !currentUser.userid) {
            return null;
        }
        return (<pro_layout_1.PageHeaderWrapper content={<PageHeaderContent currentUser={currentUser}/>} extraContent={<ExtraContent />}>
        <antd_1.Row gutter={24}>
          <antd_1.Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <antd_1.Card className={style_less_1.default.projectList} style={{ marginBottom: 24 }} title="进行中的项目" bordered={false} extra={<umi_1.Link to="/">全部项目</umi_1.Link>} loading={projectLoading} bodyStyle={{ padding: 0 }}>
              {projectNotice.map(function (item) { return (<antd_1.Card.Grid className={style_less_1.default.projectGrid} key={item.id}>
                  <antd_1.Card bodyStyle={{ padding: 0 }} bordered={false}>
                    <antd_1.Card.Meta title={<div className={style_less_1.default.cardTitle}>
                          <antd_1.Avatar size="small" src={item.logo}/>
                          <umi_1.Link to={item.href}>{item.title}</umi_1.Link>
                        </div>} description={item.description}/>
                    <div className={style_less_1.default.projectItemContent}>
                      <umi_1.Link to={item.memberLink}>{item.member || ''}</umi_1.Link>
                      {item.updatedAt && (<span className={style_less_1.default.datetime} title={item.updatedAt}>
                          {moment_1.default(item.updatedAt).fromNow()}
                        </span>)}
                    </div>
                  </antd_1.Card>
                </antd_1.Card.Grid>); })}
            </antd_1.Card>
            <antd_1.Card bodyStyle={{ padding: 0 }} bordered={false} className={style_less_1.default.activeCard} title="动态" loading={activitiesLoading}>
              <antd_1.List loading={activitiesLoading} renderItem={function (item) { return _this.renderActivities(item); }} dataSource={activities} className={style_less_1.default.activitiesList} size="large"/>
            </antd_1.Card>
          </antd_1.Col>
          <antd_1.Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <antd_1.Card style={{ marginBottom: 24 }} title="快速开始 / 便捷导航" bordered={false} bodyStyle={{ padding: 0 }}>
              <EditableLinkGroup_1.default onAdd={function () { }} links={links} linkElement={umi_1.Link}/>
            </antd_1.Card>
            <antd_1.Card style={{ marginBottom: 24 }} bordered={false} title="XX 指数" loading={radarData.length === 0}>
              <div className={style_less_1.default.chart}>
                <Radar_1.default hasLegend height={343} data={radarData}/>
              </div>
            </antd_1.Card>
            <antd_1.Card bodyStyle={{ paddingTop: 12, paddingBottom: 12 }} bordered={false} title="团队" loading={projectLoading}>
              <div className={style_less_1.default.members}>
                <antd_1.Row gutter={48}>
                  {projectNotice.map(function (item) { return (<antd_1.Col span={12} key={"members-item-" + item.id}>
                      <umi_1.Link to={item.href}>
                        <antd_1.Avatar src={item.logo} size="small"/>
                        <span className={style_less_1.default.member}>{item.member}</span>
                      </umi_1.Link>
                    </antd_1.Col>); })}
                </antd_1.Row>
              </div>
            </antd_1.Card>
          </antd_1.Col>
        </antd_1.Row>
      </pro_layout_1.PageHeaderWrapper>);
    };
    return Workplace;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var _b = _a.dashboardAndworkplace, currentUser = _b.currentUser, projectNotice = _b.projectNotice, activities = _b.activities, radarData = _b.radarData, loading = _a.loading;
    return ({
        currentUser: currentUser,
        projectNotice: projectNotice,
        activities: activities,
        radarData: radarData,
        currentUserLoading: loading.effects['dashboardAndworkplace/fetchUserCurrent'],
        projectLoading: loading.effects['dashboardAndworkplace/fetchProjectNotice'],
        activitiesLoading: loading.effects['dashboardAndworkplace/fetchActivitiesList'],
    });
})(Workplace);
//# sourceMappingURL=index.js.map