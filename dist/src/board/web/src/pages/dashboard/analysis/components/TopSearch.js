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
var NumberInfo_1 = __importDefault(require("./NumberInfo"));
var Trend_1 = __importDefault(require("./Trend"));
var style_less_1 = __importDefault(require("../style.less"));
var columns = [
    {
        title: <umi_1.FormattedMessage id="dashboardandanalysis.table.rank" defaultMessage="Rank"/>,
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: (<umi_1.FormattedMessage id="dashboardandanalysis.table.search-keyword" defaultMessage="Search keyword"/>),
        dataIndex: 'keyword',
        key: 'keyword',
        render: function (text) { return <a href="/">{text}</a>; },
    },
    {
        title: <umi_1.FormattedMessage id="dashboardandanalysis.table.users" defaultMessage="Users"/>,
        dataIndex: 'count',
        key: 'count',
        sorter: function (a, b) { return a.count - b.count; },
        className: style_less_1.default.alignRight,
    },
    {
        title: (<umi_1.FormattedMessage id="dashboardandanalysis.table.weekly-range" defaultMessage="Weekly Range"/>),
        dataIndex: 'range',
        key: 'range',
        sorter: function (a, b) { return a.range - b.range; },
        render: function (text, record) { return (<Trend_1.default flag={record.status === 1 ? 'down' : 'up'}>
        <span style={{ marginRight: 4 }}>{text}%</span>
      </Trend_1.default>); },
    },
];
var TopSearch = function (_a) {
    var loading = _a.loading, visitData2 = _a.visitData2, searchData = _a.searchData, dropdownGroup = _a.dropdownGroup;
    return (<antd_1.Card loading={loading} bordered={false} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.online-top-search" defaultMessage="Online Top Search"/>} extra={dropdownGroup} style={{
        height: '100%',
    }}>
    <antd_1.Row gutter={68}>
      <antd_1.Col sm={12} xs={24} style={{ marginBottom: 24 }}>
        <NumberInfo_1.default subTitle={<span>
              <umi_1.FormattedMessage id="dashboardandanalysis.analysis.search-users" defaultMessage="search users"/>
              <antd_1.Tooltip title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.introduce" defaultMessage="introduce"/>}>
                <icons_1.InfoCircleOutlined style={{ marginLeft: 8 }}/>
              </antd_1.Tooltip>
            </span>} gap={8} total={numeral_1.default(12321).format('0,0')} status="up" subTotal={17.1}/>
        <Charts_1.MiniArea line height={45} data={visitData2}/>
      </antd_1.Col>
      <antd_1.Col sm={12} xs={24} style={{ marginBottom: 24 }}>
        <NumberInfo_1.default subTitle={<span>
              <umi_1.FormattedMessage id="dashboardandanalysis.analysis.per-capita-search" defaultMessage="Per Capita Search"/>
              <antd_1.Tooltip title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.introduce" defaultMessage="introduce"/>}>
                <icons_1.InfoCircleOutlined style={{ marginLeft: 8 }}/>
              </antd_1.Tooltip>
            </span>} total={2.7} status="down" subTotal={26.2} gap={8}/>
        <Charts_1.MiniArea line height={45} data={visitData2}/>
      </antd_1.Col>
    </antd_1.Row>
    <antd_1.Table rowKey={function (record) { return record.index; }} size="small" columns={columns} dataSource={searchData} pagination={{
        style: { marginBottom: 0 },
        pageSize: 5,
    }}/>
  </antd_1.Card>);
};
exports.default = TopSearch;
//# sourceMappingURL=TopSearch.js.map