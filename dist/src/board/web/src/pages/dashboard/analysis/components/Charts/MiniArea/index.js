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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bizcharts_1 = require("bizcharts");
var react_1 = __importDefault(require("react"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var index_less_1 = __importDefault(require("../index.less"));
var MiniArea = function (props) {
    var _a = props.height, height = _a === void 0 ? 1 : _a, _b = props.data, data = _b === void 0 ? [] : _b, _c = props.forceFit, forceFit = _c === void 0 ? true : _c, _d = props.color, color = _d === void 0 ? 'rgba(24, 144, 255, 0.2)' : _d, _e = props.borderColor, borderColor = _e === void 0 ? '#1089ff' : _e, _f = props.scale, scale = _f === void 0 ? { x: {}, y: {} } : _f, _g = props.borderWidth, borderWidth = _g === void 0 ? 2 : _g, line = props.line, xAxis = props.xAxis, yAxis = props.yAxis, _h = props.animate, animate = _h === void 0 ? true : _h;
    var padding = [36, 5, 30, 5];
    var scaleProps = {
        x: __assign({ type: 'cat', range: [0, 1] }, scale.x),
        y: __assign({ min: 0 }, scale.y),
    };
    var tooltip = [
        'x*y',
        function (x, y) { return ({
            name: x,
            value: y,
        }); },
    ];
    var chartHeight = height + 54;
    return (<div className={index_less_1.default.miniChart} style={{ height: height }}>
      <div className={index_less_1.default.chartContent}>
        {height > 0 && (<bizcharts_1.Chart animate={animate} scale={scaleProps} height={chartHeight} forceFit={forceFit} data={data} padding={padding}>
            <bizcharts_1.Axis key="axis-x" name="x" label={null} line={null} tickLine={null} grid={null} {...xAxis}/>
            <bizcharts_1.Axis key="axis-y" name="y" label={null} line={null} tickLine={null} grid={null} {...yAxis}/>
            <bizcharts_1.Tooltip showTitle={false} crosshairs={false}/>
            <bizcharts_1.Geom type="area" position="x*y" color={color} tooltip={tooltip} shape="smooth" style={{
        fillOpacity: 1,
    }}/>
            {line ? (<bizcharts_1.Geom type="line" position="x*y" shape="smooth" color={borderColor} size={borderWidth} tooltip={false}/>) : (<span style={{ display: 'none' }}/>)}
          </bizcharts_1.Chart>)}
      </div>
    </div>);
};
exports.default = autoHeight_1.default()(MiniArea);
//# sourceMappingURL=index.js.map