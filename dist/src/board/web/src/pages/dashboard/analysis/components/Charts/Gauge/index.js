"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bizcharts_1 = require("bizcharts");
var react_1 = __importDefault(require("react"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var Arc = bizcharts_1.Guide.Arc, Html = bizcharts_1.Guide.Html, Line = bizcharts_1.Guide.Line;
var defaultFormatter = function (val) {
    switch (val) {
        case '2':
            return '差';
        case '4':
            return '中';
        case '6':
            return '良';
        case '8':
            return '优';
        default:
            return '';
    }
};
if (bizcharts_1.Shape.registerShape) {
    bizcharts_1.Shape.registerShape('point', 'pointer', {
        drawShape: function (cfg, group) {
            var point = cfg.points[0];
            point = this.parsePoint(point);
            var center = this.parsePoint({
                x: 0,
                y: 0,
            });
            group.addShape('line', {
                attrs: {
                    x1: center.x,
                    y1: center.y,
                    x2: point.x,
                    y2: point.y,
                    stroke: cfg.color,
                    lineWidth: 2,
                    lineCap: 'round',
                },
            });
            return group.addShape('circle', {
                attrs: {
                    x: center.x,
                    y: center.y,
                    r: 6,
                    stroke: cfg.color,
                    lineWidth: 3,
                    fill: '#fff',
                },
            });
        },
    });
}
var Gauge = function (props) {
    var title = props.title, _a = props.height, height = _a === void 0 ? 1 : _a, percent = props.percent, _b = props.forceFit, forceFit = _b === void 0 ? true : _b, _c = props.formatter, formatter = _c === void 0 ? defaultFormatter : _c, _d = props.color, color = _d === void 0 ? '#2F9CFF' : _d, _e = props.bgColor, bgColor = _e === void 0 ? '#F0F2F5' : _e;
    var cols = {
        value: {
            type: 'linear',
            min: 0,
            max: 10,
            tickCount: 6,
            nice: true,
        },
    };
    var data = [{ value: percent / 10 }];
    var renderHtml = function () { return "\n    <div style=\"width: 300px;text-align: center;font-size: 12px!important;\">\n      <div style=\"font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;\">" + title + "</div>\n      <div style=\"font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;\">\n        " + (data[0].value * 10).toFixed(2) + "%\n      </div>\n    </div>"; };
    var textStyle = {
        fontSize: 12,
        fill: 'rgba(0, 0, 0, 0.65)',
        textAlign: 'center',
    };
    return (<bizcharts_1.Chart height={height} data={data} scale={cols} padding={[-16, 0, 16, 0]} forceFit={forceFit}>
      <bizcharts_1.Coord type="polar" startAngle={-1.25 * Math.PI} endAngle={0.25 * Math.PI} radius={0.8}/>
      <bizcharts_1.Axis name="1" line={undefined}/>
      <bizcharts_1.Axis line={undefined} tickLine={undefined} subTickLine={undefined} name="value" zIndex={2} label={{
        offset: -12,
        formatter: formatter,
        textStyle: textStyle,
    }}/>
      <bizcharts_1.Guide>
        <Line start={[3, 0.905]} end={[3, 0.85]} lineStyle={{
        stroke: color,
        lineDash: undefined,
        lineWidth: 2,
    }}/>
        <Line start={[5, 0.905]} end={[5, 0.85]} lineStyle={{
        stroke: color,
        lineDash: undefined,
        lineWidth: 3,
    }}/>
        <Line start={[7, 0.905]} end={[7, 0.85]} lineStyle={{
        stroke: color,
        lineDash: undefined,
        lineWidth: 3,
    }}/>
        <Arc start={[0, 0.965]} end={[10, 0.965]} style={{
        stroke: bgColor,
        lineWidth: 10,
    }}/>
        <Arc start={[0, 0.965]} end={[data[0].value, 0.965]} style={{
        stroke: color,
        lineWidth: 10,
    }}/>
        <Html position={['50%', '95%']} html={renderHtml()}/>
      </bizcharts_1.Guide>
      <bizcharts_1.Geom line={false} type="point" position="value*1" shape="pointer" color={color} active={false}/>
    </bizcharts_1.Chart>);
};
exports.default = autoHeight_1.default()(Gauge);
//# sourceMappingURL=index.js.map