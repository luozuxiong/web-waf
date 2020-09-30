"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bizcharts_1 = require("bizcharts");
var react_1 = __importDefault(require("react"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var index_less_1 = __importDefault(require("../index.less"));
var MiniBar = function (props) {
    var _a = props.height, height = _a === void 0 ? 0 : _a, _b = props.forceFit, forceFit = _b === void 0 ? true : _b, _c = props.color, color = _c === void 0 ? '#1890FF' : _c, _d = props.data, data = _d === void 0 ? [] : _d;
    var scale = {
        x: {
            type: 'cat',
        },
        y: {
            min: 0,
        },
    };
    var padding = [36, 5, 30, 5];
    var tooltip = [
        'x*y',
        function (x, y) { return ({
            name: x,
            value: y,
        }); },
    ];
    // for tooltip not to be hide
    var chartHeight = height + 54;
    return (<div className={index_less_1.default.miniChart} style={{ height: height }}>
      <div className={index_less_1.default.chartContent}>
        <bizcharts_1.Chart scale={scale} height={chartHeight} forceFit={forceFit} data={data} padding={padding}>
          <bizcharts_1.Tooltip showTitle={false} crosshairs={false}/>
          <bizcharts_1.Geom type="interval" position="x*y" color={color} tooltip={tooltip}/>
        </bizcharts_1.Chart>
      </div>
    </div>);
};
exports.default = autoHeight_1.default()(MiniBar);
//# sourceMappingURL=index.js.map