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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Charts_1 = require("../Charts");
var index_less_1 = __importDefault(require("./index.less"));
function fixedZero(val) {
    return val * 1 < 10 ? "0" + val : val;
}
function getActiveData() {
    var activeData = [];
    for (var i = 0; i < 24; i += 1) {
        activeData.push({
            x: fixedZero(i) + ":00",
            y: Math.floor(Math.random() * 200) + i * 50,
        });
    }
    return activeData;
}
var ActiveChart = /** @class */ (function (_super) {
    __extends(ActiveChart, _super);
    function ActiveChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeData: getActiveData(),
        };
        _this.timer = undefined;
        _this.requestRef = undefined;
        _this.loopData = function () {
            _this.requestRef = requestAnimationFrame(function () {
                _this.timer = window.setTimeout(function () {
                    _this.setState({
                        activeData: getActiveData(),
                    }, function () {
                        _this.loopData();
                    });
                }, 1000);
            });
        };
        return _this;
    }
    ActiveChart.prototype.componentDidMount = function () {
        this.loopData();
    };
    ActiveChart.prototype.componentWillUnmount = function () {
        clearTimeout(this.timer);
        if (this.requestRef) {
            cancelAnimationFrame(this.requestRef);
        }
    };
    ActiveChart.prototype.render = function () {
        var _a = this.state.activeData, activeData = _a === void 0 ? [] : _a;
        return (<div className={index_less_1.default.activeChart}>
        <antd_1.Statistic title="目标评估" value="有望达到预期"/>
        <div style={{ marginTop: 32 }}>
          <Charts_1.MiniArea animate={false} line borderWidth={2} height={84} scale={{
            y: {
                tickCount: 3,
            },
        }} yAxis={{
            tickLine: undefined,
            label: undefined,
            title: undefined,
            line: undefined,
        }} data={activeData}/>
        </div>
        {activeData && (<div>
            <div className={index_less_1.default.activeChartGrid}>
              <p>{__spreadArrays(activeData).sort()[activeData.length - 1].y + 200} 亿元</p>
              <p>{__spreadArrays(activeData).sort()[Math.floor(activeData.length / 2)].y} 亿元</p>
            </div>
            <div className={index_less_1.default.dashedLine}>
              <div className={index_less_1.default.line}/>
            </div>
            <div className={index_less_1.default.dashedLine}>
              <div className={index_less_1.default.line}/>
            </div>
          </div>)}
        {activeData && (<div className={index_less_1.default.activeChartLegend}>
            <span>00:00</span>
            <span>{activeData[Math.floor(activeData.length / 2)].x}</span>
            <span>{activeData[activeData.length - 1].x}</span>
          </div>)}
      </div>);
    };
    return ActiveChart;
}(react_1.Component));
exports.default = ActiveChart;
//# sourceMappingURL=index.js.map