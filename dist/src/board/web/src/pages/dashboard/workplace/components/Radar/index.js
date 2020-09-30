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
var bizcharts_1 = require("bizcharts");
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var autoHeight_1 = __importDefault(require("./autoHeight"));
var index_less_1 = __importDefault(require("./index.less"));
/* eslint react/no-danger:0 */
var Radar = /** @class */ (function (_super) {
    __extends(Radar, _super);
    function Radar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            legendData: [],
        };
        _this.chart = undefined;
        _this.node = undefined;
        _this.getG2Instance = function (chart) {
            _this.chart = chart;
        };
        // for custom lengend view
        _this.getLegendData = function () {
            if (!_this.chart)
                return;
            var geom = _this.chart.getAllGeoms()[0]; // 获取所有的图形
            if (!geom)
                return;
            var items = geom.get('dataArray') || []; // 获取图形对应的
            var legendData = items.map(function (item) {
                // eslint-disable-next-line no-underscore-dangle
                var origins = item.map(function (t) { return t._origin; });
                var result = {
                    name: origins[0].name,
                    color: item[0].color,
                    checked: true,
                    value: origins.reduce(function (p, n) { return p + n.value; }, 0),
                };
                return result;
            });
            _this.setState({
                legendData: legendData,
            });
        };
        _this.handleRef = function (n) {
            _this.node = n;
        };
        _this.handleLegendClick = function (item, i) {
            var newItem = item;
            newItem.checked = !newItem.checked;
            var legendData = _this.state.legendData;
            legendData[i] = newItem;
            var filteredLegendData = legendData.filter(function (l) { return l.checked; }).map(function (l) { return l.name; });
            if (_this.chart) {
                _this.chart.filter('name', function (val) { return filteredLegendData.indexOf("" + val) > -1; });
                _this.chart.repaint();
            }
            _this.setState({
                legendData: legendData,
            });
        };
        return _this;
    }
    Radar.prototype.componentDidMount = function () {
        this.getLegendData();
    };
    Radar.prototype.componentDidUpdate = function (preProps) {
        var data = this.props.data;
        if (data !== preProps.data) {
            this.getLegendData();
        }
    };
    Radar.prototype.render = function () {
        var _this = this;
        var defaultColors = [
            '#1890FF',
            '#FACC14',
            '#2FC25B',
            '#8543E0',
            '#F04864',
            '#13C2C2',
            '#fa8c16',
            '#a0d911',
        ];
        var _a = this.props, _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.height, height = _c === void 0 ? 0 : _c, title = _a.title, _d = _a.hasLegend, hasLegend = _d === void 0 ? false : _d, _e = _a.forceFit, forceFit = _e === void 0 ? true : _e, _f = _a.tickCount, tickCount = _f === void 0 ? 5 : _f, _g = _a.padding, padding = _g === void 0 ? [35, 30, 16, 30] : _g, _h = _a.animate, animate = _h === void 0 ? true : _h, _j = _a.colors, colors = _j === void 0 ? defaultColors : _j;
        var legendData = this.state.legendData;
        var scale = {
            value: {
                min: 0,
                tickCount: tickCount,
            },
        };
        var chartHeight = height - (hasLegend ? 80 : 22);
        return (<div className={index_less_1.default.radar} style={{ height: height }}>
        {title && <h4>{title}</h4>}
        <bizcharts_1.Chart scale={scale} height={chartHeight} forceFit={forceFit} data={data} padding={padding} animate={animate} onGetG2Instance={this.getG2Instance}>
          <bizcharts_1.Tooltip />
          <bizcharts_1.Coord type="polar"/>
          <bizcharts_1.Axis name="label" line={undefined} tickLine={undefined} grid={{
            lineStyle: {
                lineDash: undefined,
            },
            hideFirstLine: false,
        }}/>
          <bizcharts_1.Axis name="value" grid={{
            type: 'polygon',
            lineStyle: {
                lineDash: undefined,
            },
        }}/>
          <bizcharts_1.Geom type="line" position="label*value" color={['name', colors]} size={1}/>
          <bizcharts_1.Geom type="point" position="label*value" color={['name', colors]} shape="circle" size={3}/>
        </bizcharts_1.Chart>
        {hasLegend && (<antd_1.Row className={index_less_1.default.legend}>
            {legendData.map(function (item, i) { return (<antd_1.Col span={24 / legendData.length} key={item.name} onClick={function () { return _this.handleLegendClick(item, i); }}>
                <div className={index_less_1.default.legendItem}>
                  <p>
                    <span className={index_less_1.default.dot} style={{
            backgroundColor: !item.checked ? '#aaa' : item.color,
        }}/>
                    <span>{item.name}</span>
                  </p>
                  <h6>{item.value}</h6>
                </div>
              </antd_1.Col>); })}
          </antd_1.Row>)}
      </div>);
    };
    return Radar;
}(react_1.Component));
exports.default = autoHeight_1.default()(Radar);
//# sourceMappingURL=index.js.map