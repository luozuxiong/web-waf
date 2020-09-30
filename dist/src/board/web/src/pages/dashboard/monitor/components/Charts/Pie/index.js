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
var react_1 = __importStar(require("react"));
var data_set_1 = require("@antv/data-set");
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var antd_1 = require("antd");
var react_fittext_1 = __importDefault(require("react-fittext"));
var classnames_1 = __importDefault(require("classnames"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var index_less_1 = __importDefault(require("./index.less"));
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            legendData: [],
            legendBlock: false,
        };
        _this.chart = undefined;
        _this.root = undefined;
        _this.requestRef = 0;
        // for window resize auto responsive legend
        _this.resize = lodash_debounce_1.default(function () {
            var hasLegend = _this.props.hasLegend;
            var legendBlock = _this.state.legendBlock;
            if (!hasLegend || !_this.root) {
                window.removeEventListener('resize', _this.resize);
                return;
            }
            if (_this.root &&
                _this.root.parentNode &&
                _this.root.parentNode.clientWidth <= 380) {
                if (!legendBlock) {
                    _this.setState({
                        legendBlock: true,
                    });
                }
            }
            else if (legendBlock) {
                _this.setState({
                    legendBlock: false,
                });
            }
        }, 300);
        _this.getG2Instance = function (chart) {
            _this.chart = chart;
            requestAnimationFrame(function () {
                _this.getLegendData();
                _this.resize();
            });
        };
        // for custom lengend view
        _this.getLegendData = function () {
            if (!_this.chart)
                return;
            var geom = _this.chart.getAllGeoms()[0]; // 获取所有的图形
            if (!geom)
                return;
            // g2 的类型有问题
            var items = geom.get('dataArray') || []; // 获取图形对应的
            var legendData = items.map(function (item) {
                /* eslint no-underscore-dangle:0 */
                var origin = item[0]._origin;
                origin.color = item[0].color;
                origin.checked = true;
                return origin;
            });
            _this.setState({
                legendData: legendData,
            });
        };
        _this.handleRoot = function (n) {
            _this.root = n;
        };
        _this.handleLegendClick = function (item, i) {
            var newItem = item;
            newItem.checked = !newItem.checked;
            var legendData = _this.state.legendData;
            legendData[i] = newItem;
            var filteredLegendData = legendData.filter(function (l) { return l.checked; }).map(function (l) { return l.x; });
            if (_this.chart) {
                _this.chart.filter('x', function (val) { return filteredLegendData.indexOf("" + val) > -1; });
            }
            _this.setState({
                legendData: legendData,
            });
        };
        return _this;
    }
    Pie.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.requestRef = requestAnimationFrame(function () { return _this.resize(); });
        }, { passive: true });
    };
    Pie.prototype.componentDidUpdate = function (preProps) {
        var data = this.props.data;
        if (data !== preProps.data) {
            // because of charts data create when rendered
            // so there is a trick for get rendered time
            this.getLegendData();
        }
    };
    Pie.prototype.componentWillUnmount = function () {
        if (this.requestRef) {
            window.cancelAnimationFrame(this.requestRef);
        }
        window.removeEventListener('resize', this.resize);
        if (this.resize) {
            this.resize.cancel();
        }
    };
    Pie.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, valueFormat = _b.valueFormat, subTitle = _b.subTitle, total = _b.total, _c = _b.hasLegend, hasLegend = _c === void 0 ? false : _c, className = _b.className, style = _b.style, _d = _b.height, height = _d === void 0 ? 0 : _d, _e = _b.forceFit, forceFit = _e === void 0 ? true : _e, percent = _b.percent, color = _b.color, _f = _b.inner, inner = _f === void 0 ? 0.75 : _f, _g = _b.animate, animate = _g === void 0 ? true : _g, colors = _b.colors, _h = _b.lineWidth, lineWidth = _h === void 0 ? 1 : _h;
        var _j = this.state, legendData = _j.legendData, legendBlock = _j.legendBlock;
        var pieClassName = classnames_1.default(index_less_1.default.pie, className, (_a = {},
            _a[index_less_1.default.hasLegend] = !!hasLegend,
            _a[index_less_1.default.legendBlock] = legendBlock,
            _a));
        var _k = this.props, propsData = _k.data, _l = _k.selected, propsSelected = _l === void 0 ? true : _l, _m = _k.tooltip, propsTooltip = _m === void 0 ? true : _m;
        var data = propsData || [];
        var selected = propsSelected;
        var tooltip = propsTooltip;
        var defaultColors = colors;
        data = data || [];
        selected = selected || true;
        tooltip = tooltip || true;
        var formatColor;
        var scale = {
            x: {
                type: 'cat',
                range: [0, 1],
            },
            y: {
                min: 0,
            },
        };
        if (percent || percent === 0) {
            selected = false;
            tooltip = false;
            formatColor = function (value) {
                if (value === '占比') {
                    return color || 'rgba(24, 144, 255, 0.85)';
                }
                return '#F0F2F5';
            };
            data = [
                {
                    x: '占比',
                    y: parseFloat("" + percent),
                },
                {
                    x: '反比',
                    y: 100 - parseFloat("" + percent),
                },
            ];
        }
        var tooltipFormat = [
            'x*percent',
            function (x, p) { return ({
                name: x,
                value: (p * 100).toFixed(2) + "%",
            }); },
        ];
        var padding = [12, 0, 12, 0];
        var dv = new data_set_1.DataView();
        dv.source(data).transform({
            type: 'percent',
            field: 'y',
            dimension: 'x',
            as: 'percent',
        });
        return (<div ref={this.handleRoot} className={pieClassName} style={style}>
        <react_fittext_1.default maxFontSize={25}>
          <div className={index_less_1.default.chart}>
            <bizcharts_1.Chart scale={scale} height={height} forceFit={forceFit} data={dv} padding={padding} animate={animate} onGetG2Instance={this.getG2Instance}>
              {!!tooltip && <bizcharts_1.Tooltip showTitle={false}/>}
              <bizcharts_1.Coord type="theta" innerRadius={inner}/>
              <bizcharts_1.Geom style={{ lineWidth: lineWidth, stroke: '#fff' }} tooltip={tooltip ? tooltipFormat : undefined} type="intervalStack" position="percent" color={['x', percent || percent === 0 ? formatColor : defaultColors]} selected={selected}/>
            </bizcharts_1.Chart>

            {(subTitle || total) && (<div className={index_less_1.default.total}>
                {subTitle && <h4 className="pie-sub-title">{subTitle}</h4>}
                
                {total && (<div className="pie-stat">{typeof total === 'function' ? total() : total}</div>)}
              </div>)}
          </div>
        </react_fittext_1.default>

        {hasLegend && (<ul className={index_less_1.default.legend}>
            {legendData.map(function (item, i) { return (<li key={item.x} onClick={function () { return _this.handleLegendClick(item, i); }}>
                <span className={index_less_1.default.dot} style={{
            backgroundColor: !item.checked ? '#aaa' : item.color,
        }}/>
                <span className={index_less_1.default.legendTitle}>{item.x}</span>
                <antd_1.Divider type="vertical"/>
                <span className={index_less_1.default.percent}>
                  {(Number.isNaN(item.percent) ? 0 : item.percent * 100).toFixed(2) + "%"}
                </span>
                <span className={index_less_1.default.value}>{valueFormat ? valueFormat(item.y) : item.y}</span>
              </li>); })}
          </ul>)}
      </div>);
    };
    return Pie;
}(react_1.Component));
exports.default = autoHeight_1.default()(Pie);
//# sourceMappingURL=index.js.map