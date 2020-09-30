"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var Charts_1 = require("./Charts");
var NumberInfo_1 = __importDefault(require("./NumberInfo"));
var style_less_1 = __importDefault(require("../style.less"));
var CustomTab = function (_a) {
    var data = _a.data, currentKey = _a.currentTabKey;
    return (<antd_1.Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
    <antd_1.Col span={12}>
      <NumberInfo_1.default title={data.name} subTitle={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.conversion-rate" defaultMessage="Conversion Rate"/>} gap={2} total={data.cvr * 100 + "%"} theme={currentKey !== data.name ? 'light' : undefined}/>
    </antd_1.Col>
    <antd_1.Col span={12} style={{ paddingTop: 36 }}>
      <Charts_1.Pie animate={false} inner={0.55} tooltip={false} margin={[0, 0, 0, 0]} percent={data.cvr * 100} height={64}/>
    </antd_1.Col>
  </antd_1.Row>);
};
var TabPane = antd_1.Tabs.TabPane;
var OfflineData = function (_a) {
    var activeKey = _a.activeKey, loading = _a.loading, offlineData = _a.offlineData, offlineChartData = _a.offlineChartData, handleTabChange = _a.handleTabChange;
    return (<antd_1.Card loading={loading} className={style_less_1.default.offlineCard} bordered={false} style={{ marginTop: 32 }}>
    <antd_1.Tabs activeKey={activeKey} onChange={handleTabChange}>
      {offlineData.map(function (shop) { return (<TabPane tab={<CustomTab data={shop} currentTabKey={activeKey}/>} key={shop.name}>
          <div style={{ padding: '0 24px' }}>
            <Charts_1.TimelineChart height={400} data={offlineChartData} titleMap={{
        y1: umi_1.formatMessage({ id: 'dashboardandanalysis.analysis.traffic' }),
        y2: umi_1.formatMessage({ id: 'dashboardandanalysis.analysis.payments' }),
    }}/>
          </div>
        </TabPane>); })}
    </antd_1.Tabs>
  </antd_1.Card>);
};
exports.default = OfflineData;
//# sourceMappingURL=OfflineData.js.map