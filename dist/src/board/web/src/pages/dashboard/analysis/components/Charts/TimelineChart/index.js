"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bizcharts_1 = require("bizcharts");
var data_set_1 = __importDefault(require("@antv/data-set"));
var react_1 = __importDefault(require("react"));
var bizcharts_plugin_slider_1 = __importDefault(require("bizcharts-plugin-slider"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var index_less_1 = __importDefault(require("./index.less"));
var TimelineChart = function (props) {
    var title = props.title, _a = props.height, height = _a === void 0 ? 400 : _a, _b = props.padding, padding = _b === void 0 ? [60, 20, 40, 40] : _b, _c = props.titleMap, titleMap = _c === void 0 ? {
        y1: 'y1',
        y2: 'y2',
    } : _c, _d = props.borderWidth, borderWidth = _d === void 0 ? 2 : _d, sourceData = props.data;
    var data = Array.isArray(sourceData) ? sourceData : [{ x: 0, y1: 0, y2: 0 }];
    data.sort(function (a, b) { return a.x - b.x; });
    var max;
    if (data[0] && data[0].y1 && data[0].y2) {
        max = Math.max(__spreadArrays(data).sort(function (a, b) { return b.y1 - a.y1; })[0].y1, __spreadArrays(data).sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
    }
    var ds = new data_set_1.default({
        state: {
            start: data[0].x,
            end: data[data.length - 1].x,
        },
    });
    var dv = ds.createView();
    dv.source(data)
        .transform({
        type: 'filter',
        callback: function (obj) {
            var date = obj.x;
            return date <= ds.state.end && date >= ds.state.start;
        },
    })
        .transform({
        type: 'map',
        callback: function (row) {
            var newRow = __assign({}, row);
            newRow[titleMap.y1] = row.y1;
            newRow[titleMap.y2] = row.y2;
            return newRow;
        },
    })
        .transform({
        type: 'fold',
        fields: [titleMap.y1, titleMap.y2],
        key: 'key',
        value: 'value',
    });
    var timeScale = {
        type: 'time',
        tickInterval: 60 * 60 * 1000,
        mask: 'HH:mm',
        range: [0, 1],
    };
    var cols = {
        x: timeScale,
        value: {
            max: max,
            min: 0,
        },
    };
    var SliderGen = function () { return (<bizcharts_plugin_slider_1.default padding={[0, padding[1] + 20, 0, padding[3]]} width="auto" height={26} xAxis="x" yAxis="y1" scales={{ x: timeScale }} data={data} start={ds.state.start} end={ds.state.end} backgroundChart={{ type: 'line' }} onChange={function (_a) {
        var startValue = _a.startValue, endValue = _a.endValue;
        ds.setState('start', startValue);
        ds.setState('end', endValue);
    }}/>); };
    return (<div className={index_less_1.default.timelineChart} style={{ height: height + 30 }}>
      <div>
        {title && <h4>{title}</h4>}
        <bizcharts_1.Chart height={height} padding={padding} data={dv} scale={cols} forceFit>
          <bizcharts_1.Axis name="x"/>
          <bizcharts_1.Tooltip />
          <bizcharts_1.Legend name="key" position="top"/>
          <bizcharts_1.Geom type="line" position="x*value" size={borderWidth} color="key"/>
        </bizcharts_1.Chart>
        <div style={{ marginRight: -20 }}>
          <SliderGen />
        </div>
      </div>
    </div>);
};
exports.default = autoHeight_1.default()(TimelineChart);
//# sourceMappingURL=index.js.map