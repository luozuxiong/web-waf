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
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var PageLoading_1 = __importDefault(require("./components/PageLoading"));
var utils_1 = require("./utils/utils");
var style_less_1 = __importDefault(require("./style.less"));
var IntroduceRow = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/IntroduceRow')); }); });
var SalesCard = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/SalesCard')); }); });
var TopSearch = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/TopSearch')); }); });
var ProportionSales = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/ProportionSales')); }); });
var OfflineData = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require('./components/OfflineData')); }); });
var Analysis = /** @class */ (function (_super) {
    __extends(Analysis, _super);
    function Analysis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            salesType: 'all',
            currentTabKey: '',
            rangePickerValue: utils_1.getTimeDistance('year'),
        };
        _this.reqRef = 0;
        _this.timeoutId = 0;
        _this.handleChangeSalesType = function (e) {
            _this.setState({
                salesType: e.target.value,
            });
        };
        _this.handleTabChange = function (key) {
            _this.setState({
                currentTabKey: key,
            });
        };
        _this.handleRangePickerChange = function (rangePickerValue) {
            var dispatch = _this.props.dispatch;
            _this.setState({
                rangePickerValue: rangePickerValue,
            });
            dispatch({
                type: 'dashboardAndanalysis/fetchSalesData',
            });
        };
        _this.selectDate = function (type) {
            var dispatch = _this.props.dispatch;
            _this.setState({
                rangePickerValue: utils_1.getTimeDistance(type),
            });
            dispatch({
                type: 'dashboardAndanalysis/fetchSalesData',
            });
        };
        _this.isActive = function (type) {
            var rangePickerValue = _this.state.rangePickerValue;
            if (!rangePickerValue) {
                return '';
            }
            var value = utils_1.getTimeDistance(type);
            if (!value) {
                return '';
            }
            if (!rangePickerValue[0] || !rangePickerValue[1]) {
                return '';
            }
            if (rangePickerValue[0].isSame(value[0], 'day') &&
                rangePickerValue[1].isSame(value[1], 'day')) {
                return style_less_1.default.currentDate;
            }
            return '';
        };
        return _this;
    }
    Analysis.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        this.reqRef = requestAnimationFrame(function () {
            dispatch({
                type: 'dashboardAndanalysis/fetch',
            });
        });
    };
    Analysis.prototype.componentWillUnmount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'dashboardAndanalysis/clear',
        });
        cancelAnimationFrame(this.reqRef);
        clearTimeout(this.timeoutId);
    };
    Analysis.prototype.render = function () {
        var _a = this.state, rangePickerValue = _a.rangePickerValue, salesType = _a.salesType, currentTabKey = _a.currentTabKey;
        var _b = this.props, dashboardAndanalysis = _b.dashboardAndanalysis, loading = _b.loading;
        var visitData = dashboardAndanalysis.visitData, visitData2 = dashboardAndanalysis.visitData2, salesData = dashboardAndanalysis.salesData, searchData = dashboardAndanalysis.searchData, offlineData = dashboardAndanalysis.offlineData, offlineChartData = dashboardAndanalysis.offlineChartData, salesTypeData = dashboardAndanalysis.salesTypeData, salesTypeDataOnline = dashboardAndanalysis.salesTypeDataOnline, salesTypeDataOffline = dashboardAndanalysis.salesTypeDataOffline;
        var salesPieData;
        if (salesType === 'all') {
            salesPieData = salesTypeData;
        }
        else {
            salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
        }
        var menu = (<antd_1.Menu>
        <antd_1.Menu.Item>操作一</antd_1.Menu.Item>
        <antd_1.Menu.Item>操作二</antd_1.Menu.Item>
      </antd_1.Menu>);
        var dropdownGroup = (<span className={style_less_1.default.iconGroup}>
        <antd_1.Dropdown overlay={menu} placement="bottomRight">
          <icons_1.EllipsisOutlined />
        </antd_1.Dropdown>
      </span>);
        var activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
        return (<pro_layout_1.GridContent>
        <react_1.default.Fragment>
          <react_1.Suspense fallback={<PageLoading_1.default />}>
            <IntroduceRow loading={loading} visitData={visitData}/>
          </react_1.Suspense>
          <react_1.Suspense fallback={null}>
            <SalesCard rangePickerValue={rangePickerValue} salesData={salesData} isActive={this.isActive} handleRangePickerChange={this.handleRangePickerChange} loading={loading} selectDate={this.selectDate}/>
          </react_1.Suspense>
          <antd_1.Row gutter={24} style={{
            marginTop: 24,
        }}>
            <antd_1.Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <react_1.Suspense fallback={null}>
                <TopSearch loading={loading} visitData2={visitData2} searchData={searchData} dropdownGroup={dropdownGroup}/>
              </react_1.Suspense>
            </antd_1.Col>
            <antd_1.Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <react_1.Suspense fallback={null}>
                <ProportionSales dropdownGroup={dropdownGroup} salesType={salesType} loading={loading} salesPieData={salesPieData} handleChangeSalesType={this.handleChangeSalesType}/>
              </react_1.Suspense>
            </antd_1.Col>
          </antd_1.Row>
          <react_1.Suspense fallback={null}>
            <OfflineData activeKey={activeKey} loading={loading} offlineData={offlineData} offlineChartData={offlineChartData} handleTabChange={this.handleTabChange}/>
          </react_1.Suspense>
        </react_1.default.Fragment>
      </pro_layout_1.GridContent>);
    };
    return Analysis;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var dashboardAndanalysis = _a.dashboardAndanalysis, loading = _a.loading;
    return ({
        dashboardAndanalysis: dashboardAndanalysis,
        loading: loading.effects['dashboardAndanalysis/fetch'],
    });
})(Analysis);
//# sourceMappingURL=index.js.map