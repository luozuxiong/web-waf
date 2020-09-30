"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var numeral_1 = __importDefault(require("numeral"));
var Charts_1 = require("./Charts");
var Trend_1 = __importDefault(require("./Trend"));
var Yuan_1 = __importDefault(require("../utils/Yuan"));
var style_less_1 = __importDefault(require("../style.less"));
var topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
};
var IntroduceRow = function (_a) {
    var loading = _a.loading, visitData = _a.visitData;
    return (<antd_1.Row gutter={24}>
    <antd_1.Col {...topColResponsiveProps}>
      <Charts_1.ChartCard bordered={false} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.total-sales" defaultMessage="Total Sales"/>} action={<antd_1.Tooltip title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.introduce" defaultMessage="Introduce"/>}>
            <icons_1.InfoCircleOutlined />
          </antd_1.Tooltip>} loading={loading} total={function () { return <Yuan_1.default>126560</Yuan_1.default>; }} footer={<Charts_1.Field label={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.day-sales" defaultMessage="Daily Sales"/>} value={"\uFFE5" + numeral_1.default(12423).format('0,0')}/>} contentHeight={46}>
        <Trend_1.default flag="up" style={{ marginRight: 16 }}>
          <umi_1.FormattedMessage id="dashboardandanalysis.analysis.week" defaultMessage="Weekly Changes"/>
          <span className={style_less_1.default.trendText}>12%</span>
        </Trend_1.default>
        <Trend_1.default flag="down">
          <umi_1.FormattedMessage id="dashboardandanalysis.analysis.day" defaultMessage="Daily Changes"/>
          <span className={style_less_1.default.trendText}>11%</span>
        </Trend_1.default>
      </Charts_1.ChartCard>
    </antd_1.Col>

    <antd_1.Col {...topColResponsiveProps}>
      <Charts_1.ChartCard bordered={false} loading={loading} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.visits" defaultMessage="Visits"/>} action={<antd_1.Tooltip title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.introduce" defaultMessage="Introduce"/>}>
            <icons_1.InfoCircleOutlined />
          </antd_1.Tooltip>} total={numeral_1.default(8846).format('0,0')} footer={<Charts_1.Field label={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.day-visits" defaultMessage="Daily Visits"/>} value={numeral_1.default(1234).format('0,0')}/>} contentHeight={46}>
        <Charts_1.MiniArea color="#975FE4" data={visitData}/>
      </Charts_1.ChartCard>
    </antd_1.Col>
    <antd_1.Col {...topColResponsiveProps}>
      <Charts_1.ChartCard bordered={false} loading={loading} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.payments" defaultMessage="Payments"/>} action={<antd_1.Tooltip title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.introduce" defaultMessage="Introduce"/>}>
            <icons_1.InfoCircleOutlined />
          </antd_1.Tooltip>} total={numeral_1.default(6560).format('0,0')} footer={<Charts_1.Field label={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.conversion-rate" defaultMessage="Conversion Rate"/>} value="60%"/>} contentHeight={46}>
        <Charts_1.MiniBar data={visitData}/>
      </Charts_1.ChartCard>
    </antd_1.Col>
    <antd_1.Col {...topColResponsiveProps}>
      <Charts_1.ChartCard loading={loading} bordered={false} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.operational-effect" defaultMessage="Operational Effect"/>} action={<antd_1.Tooltip title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.introduce" defaultMessage="Introduce"/>}>
            <icons_1.InfoCircleOutlined />
          </antd_1.Tooltip>} total="78%" footer={<div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend_1.default flag="up" style={{ marginRight: 16 }}>
              <umi_1.FormattedMessage id="dashboardandanalysis.analysis.week" defaultMessage="Weekly Changes"/>
              <span className={style_less_1.default.trendText}>12%</span>
            </Trend_1.default>
            <Trend_1.default flag="down">
              <umi_1.FormattedMessage id="dashboardandanalysis.analysis.day" defaultMessage="Weekly Changes"/>
              <span className={style_less_1.default.trendText}>11%</span>
            </Trend_1.default>
          </div>} contentHeight={46}>
        <Charts_1.MiniProgress percent={78} strokeWidth={8} target={80} color="#13C2C2"/>
      </Charts_1.ChartCard>
    </antd_1.Col>
  </antd_1.Row>);
};
exports.default = IntroduceRow;
//# sourceMappingURL=IntroduceRow.js.map