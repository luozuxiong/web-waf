"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var Charts_1 = require("./Charts");
var Yuan_1 = __importDefault(require("../utils/Yuan"));
var style_less_1 = __importDefault(require("../style.less"));
var ProportionSales = function (_a) {
    var dropdownGroup = _a.dropdownGroup, salesType = _a.salesType, loading = _a.loading, salesPieData = _a.salesPieData, handleChangeSalesType = _a.handleChangeSalesType;
    return (<antd_1.Card loading={loading} className={style_less_1.default.salesCard} bordered={false} title={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.the-proportion-of-sales" defaultMessage="The Proportion of Sales"/>} style={{
        height: '100%',
    }} extra={<div className={style_less_1.default.salesCardExtra}>
        {dropdownGroup}
        <div className={style_less_1.default.salesTypeRadio}>
          <antd_1.Radio.Group value={salesType} onChange={handleChangeSalesType}>
            <antd_1.Radio.Button value="all">
              <umi_1.FormattedMessage id="dashboardandanalysis.channel.all" defaultMessage="ALL"/>
            </antd_1.Radio.Button>
            <antd_1.Radio.Button value="online">
              <umi_1.FormattedMessage id="dashboardandanalysis.channel.online" defaultMessage="Online"/>
            </antd_1.Radio.Button>
            <antd_1.Radio.Button value="stores">
              <umi_1.FormattedMessage id="dashboardandanalysis.channel.stores" defaultMessage="Stores"/>
            </antd_1.Radio.Button>
          </antd_1.Radio.Group>
        </div>
      </div>}>
    <div>
      <h4 style={{ marginTop: 8, marginBottom: 32 }}>
        <umi_1.FormattedMessage id="dashboardandanalysis.analysis.sales" defaultMessage="Sales"/>
      </h4>
      <Charts_1.Pie hasLegend subTitle={<umi_1.FormattedMessage id="dashboardandanalysis.analysis.sales" defaultMessage="Sales"/>} total={function () { return <Yuan_1.default>{salesPieData.reduce(function (pre, now) { return now.y + pre; }, 0)}</Yuan_1.default>; }} data={salesPieData} valueFormat={function (value) { return <Yuan_1.default>{value}</Yuan_1.default>; }} height={248} lineWidth={4}/>
    </div>
  </antd_1.Card>);
};
exports.default = ProportionSales;
//# sourceMappingURL=ProportionSales.js.map