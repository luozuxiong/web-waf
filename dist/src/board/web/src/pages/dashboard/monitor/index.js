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
var umi_1 = require("umi");
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var numeral_1 = __importDefault(require("numeral"));
var Charts_1 = require("./components/Charts");
var ActiveChart_1 = __importDefault(require("./components/ActiveChart"));
var style_less_1 = __importDefault(require("./style.less"));
var Countdown = antd_1.Statistic.Countdown;
var deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
var Monitor = /** @class */ (function (_super) {
    __extends(Monitor, _super);
    function Monitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monitor.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'dashboardAndmonitor/fetchTags',
        });
    };
    Monitor.prototype.render = function () {
        var _a = this.props, dashboardAndmonitor = _a.dashboardAndmonitor, loading = _a.loading;
        var tags = dashboardAndmonitor.tags;
        return (<pro_layout_1.GridContent>
        <react_1.default.Fragment>
          <antd_1.Row gutter={24}>
            <antd_1.Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <antd_1.Card title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.trading-activity" defaultMessage="Real-Time Trading Activity"/>} bordered={false}>
                <antd_1.Row>
                  <antd_1.Col md={6} sm={12} xs={24}>
                    <antd_1.Statistic title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.total-transactions" defaultMessage="Total transactions today"/>} suffix="元" value={numeral_1.default(124543233).format('0,0')}/>
                  </antd_1.Col>
                  <antd_1.Col md={6} sm={12} xs={24}>
                    <antd_1.Statistic title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.sales-target" defaultMessage="Sales target completion rate"/>} value="92%"/>
                  </antd_1.Col>
                  <antd_1.Col md={6} sm={12} xs={24}>
                    <Countdown title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.remaining-time" defaultMessage="Remaining time of activity"/>} value={deadline} format="HH:mm:ss:SSS"/>
                  </antd_1.Col>
                  <antd_1.Col md={6} sm={12} xs={24}>
                    <antd_1.Statistic title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.total-transactions-per-second" defaultMessage="Total transactions per second"/>} suffix="元" value={numeral_1.default(234).format('0,0')}/>
                  </antd_1.Col>
                </antd_1.Row>
                <div className={style_less_1.default.mapChart}>
                  <Charts_1.Map />
                </div>
              </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col xl={6} lg={24} md={24} sm={24} xs={24}>
              <antd_1.Card title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.activity-forecast" defaultMessage="Activity forecast"/>} style={{ marginBottom: 24 }} bordered={false}>
                <ActiveChart_1.default />
              </antd_1.Card>
              <antd_1.Card title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.efficiency" defaultMessage="Efficiency"/>} style={{ marginBottom: 24 }} bodyStyle={{ textAlign: 'center' }} bordered={false}>
                <Charts_1.Gauge title={umi_1.formatMessage({
            id: 'dashboardandmonitor.monitor.ratio',
            defaultMessage: 'Ratio',
        })} height={180} percent={87}/>
              </antd_1.Card>
            </antd_1.Col>
          </antd_1.Row>
          <antd_1.Row gutter={24}>
            <antd_1.Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <antd_1.Card title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.proportion-per-category" defaultMessage="Proportion Per Category"/>} bordered={false} className={style_less_1.default.pieCard}>
                <antd_1.Row style={{ padding: '16px 0' }}>
                  <antd_1.Col span={8}>
                    <Charts_1.Pie animate={false} percent={28} title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.fast-food" defaultMessage="Fast food"/>} total="28%" height={128} lineWidth={2}/>
                  </antd_1.Col>
                  <antd_1.Col span={8}>
                    <Charts_1.Pie animate={false} color="#5DDECF" percent={22} title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.western-food" defaultMessage="Western food"/>} total="22%" height={128} lineWidth={2}/>
                  </antd_1.Col>
                  <antd_1.Col span={8}>
                    <Charts_1.Pie animate={false} color="#2FC25B" percent={32} title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.hot-pot" defaultMessage="Hot pot"/>} total="32%" height={128} lineWidth={2}/>
                  </antd_1.Col>
                </antd_1.Row>
              </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <antd_1.Card title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.popular-searches" defaultMessage="Popular Searches"/>} loading={loading} bordered={false} bodyStyle={{ overflow: 'hidden' }}>
                <Charts_1.TagCloud data={tags || []} height={161}/>
              </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <antd_1.Card title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.resource-surplus" defaultMessage="Resource Surplus"/>} bodyStyle={{ textAlign: 'center', fontSize: 0 }} bordered={false}>
                <Charts_1.WaterWave height={161} title={<umi_1.FormattedMessage id="dashboardandmonitor.monitor.fund-surplus" defaultMessage="Fund Surplus"/>} percent={34}/>
              </antd_1.Card>
            </antd_1.Col>
          </antd_1.Row>
        </react_1.default.Fragment>
      </pro_layout_1.GridContent>);
    };
    return Monitor;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var dashboardAndmonitor = _a.dashboardAndmonitor, loading = _a.loading;
    return ({
        dashboardAndmonitor: dashboardAndmonitor,
        loading: loading.models.dashboardAndmonitor,
    });
})(Monitor);
//# sourceMappingURL=index.js.map