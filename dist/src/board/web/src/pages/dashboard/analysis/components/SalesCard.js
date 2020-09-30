"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var numeral_1 = __importDefault(require("numeral"));
var Charts_1 = require("./Charts");
var style_less_1 = __importDefault(require("../style.less"));
var RangePicker = antd_1.DatePicker.RangePicker;
var TabPane = antd_1.Tabs.TabPane;
var rankingListData = [];
for (var i = 0; i < 7; i += 1) {
    rankingListData.push({
        title: umi_1.formatMessage({ id: 'dashboardandanalysis.analysis.test' }, { no: i }),
        total: 323234,
    });
}
var SalesCard = function (_a) {
    var rangePickerValue = _a.rangePickerValue, salesData = _a.salesData, isActive = _a.isActive, handleRangePickerChange = _a.handleRangePickerChange, loading = _a.loading, selectDate = _a.selectDate;
    return (<antd_1.Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
    <div className={style_less_1.default.salesCard}>
      <antd_1.Tabs tabBarExtraContent={<div className={style_less_1.default.salesExtraWrap}>
            <div className={style_less_1.default.salesExtra}>
              <a className={isActive('today')} onClick={function () { return selectDate('today'); }}>
                <umi_1.FormattedMessage id="dashboardandanalysis.analysis.all-day" defaultMessage="All Day"/>
              </a>
              <a className={isActive('week')} onClick={function () { return selectDate('week'); }}>
                <umi_1.FormattedMessage id="dashboardandanalysis.analysis.all-week" defaultMessage="All Week"/>
              </a>
              <a className={isActive('month')} onClick={function () { return selectDate('month'); }}>
                <umi_1.FormattedMessage id="dashboardandanalysis.analysis.all-month" defaultMessage="All Month"/>
              </a>
              <a className={isActive('year')} onClick={function () { return selectDate('year'); }}>
                <umi_1.FormattedMessage id="dashboardandanalysis.analysis.all-year" defaultMessage="All Year"/>
              </a>
            </div>
            <RangePicker value={rangePickerValue} onChange={handleRangePickerChange} style={{ width: 256 }}/>
          </div>} size="large" tabBarStyle={{ marginBottom: 24 }}>
        <TabPane tab={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.sales" defaultMessage="Sales"/>} key="sales">
          <antd_1.Row>
            <antd_1.Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={style_less_1.default.salesBar}>
                <Charts_1.Bar height={295} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.sales-trend" defaultMessage="Sales Trend"/>} data={salesData}/>
              </div>
            </antd_1.Col>
            <antd_1.Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={style_less_1.default.salesRank}>
                <h4 className={style_less_1.default.rankingTitle}>
                  <umi_1.FormattedMessage id="dashboardandanalysis.analysis.sales-ranking" defaultMessage="Sales Ranking"/>
                </h4>
                <ul className={style_less_1.default.rankingList}>
                  {rankingListData.map(function (item, i) { return (<li key={item.title}>
                      <span className={style_less_1.default.rankingItemNumber + " " + (i < 3 ? style_less_1.default.active : '')}>
                        {i + 1}
                      </span>
                      <span className={style_less_1.default.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span className={style_less_1.default.rankingItemValue}>
                        {numeral_1.default(item.total).format('0,0')}
                      </span>
                    </li>); })}
                </ul>
              </div>
            </antd_1.Col>
          </antd_1.Row>
        </TabPane>
        <TabPane tab={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.visits" defaultMessage="Visits"/>} key="views">
          <antd_1.Row>
            <antd_1.Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={style_less_1.default.salesBar}>
                <Charts_1.Bar height={292} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.visits-trend" defaultMessage="Visits Trend"/>} data={salesData}/>
              </div>
            </antd_1.Col>
            <antd_1.Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={style_less_1.default.salesRank}>
                <h4 className={style_less_1.default.rankingTitle}>
                  <umi_1.FormattedMessage id="dashboardandanalysis.analysis.visits-ranking" defaultMessage="Visits Ranking"/>
                </h4>
                <ul className={style_less_1.default.rankingList}>
                  {rankingListData.map(function (item, i) { return (<li key={item.title}>
                      <span className={style_less_1.default.rankingItemNumber + " " + (i < 3 ? style_less_1.default.active : '')}>
                        {i + 1}
                      </span>
                      <span className={style_less_1.default.rankingItemTitle} title={item.title}>
                        {item.title}
                      </span>
                      <span>{numeral_1.default(item.total).format('0,0')}</span>
                    </li>); })}
                </ul>
              </div>
            </antd_1.Col>
          </antd_1.Row>
        </TabPane>
      </antd_1.Tabs>
    </div>
  </antd_1.Card>);
};
exports.default = SalesCard;
//# sourceMappingURL=SalesCard.js.map