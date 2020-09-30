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
var react_1 = __importStar(require("react"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var index_less_1 = __importDefault(require("./index.less"));
var WaterWave = /** @class */ (function (_super) {
    __extends(WaterWave, _super);
    function WaterWave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            radio: 1,
        };
        _this.timer = 0;
        _this.root = null;
        _this.node = null;
        _this.resize = function () {
            if (_this.root) {
                var _a = _this.props.height, height = _a === void 0 ? 1 : _a;
                var offsetWidth = _this.root.parentNode.offsetWidth;
                _this.setState({
                    radio: offsetWidth < height ? offsetWidth / height : 1,
                });
            }
        };
        return _this;
    }
    WaterWave.prototype.componentDidMount = function () {
        var _this = this;
        this.renderChart();
        this.resize();
        window.addEventListener('resize', function () {
            requestAnimationFrame(function () { return _this.resize(); });
        }, { passive: true });
    };
    WaterWave.prototype.componentDidUpdate = function (props) {
        var percent = this.props.percent;
        if (props.percent !== percent) {
            // 不加这个会造成绘制缓慢
            this.renderChart('update');
        }
    };
    WaterWave.prototype.componentWillUnmount = function () {
        cancelAnimationFrame(this.timer);
        if (this.node) {
            this.node.innerHTML = '';
        }
        window.removeEventListener('resize', this.resize);
    };
    WaterWave.prototype.renderChart = function (type) {
        var _a = this.props, percent = _a.percent, _b = _a.color, color = _b === void 0 ? '#1890FF' : _b;
        var data = percent / 100;
        var self = this;
        cancelAnimationFrame(this.timer);
        if (!this.node || (data !== 0 && !data)) {
            return;
        }
        var canvas = this.node;
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        var radius = canvasWidth / 2;
        var lineWidth = 2;
        var cR = radius - lineWidth;
        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;
        var axisLength = canvasWidth - lineWidth;
        var unit = axisLength / 8;
        var range = 0.2; // 振幅
        var currRange = range;
        var xOffset = lineWidth;
        var sp = 0; // 周期偏移量
        var currData = 0;
        var waveupsp = 0.005; // 水波上涨速度
        var arcStack = [];
        var bR = radius - lineWidth;
        var circleOffset = -(Math.PI / 2);
        var circleLock = true;
        for (var i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
            arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }
        var cStartPoint = arcStack.shift();
        ctx.strokeStyle = color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);
        function drawSin() {
            if (!ctx) {
                return;
            }
            ctx.beginPath();
            ctx.save();
            var sinStack = [];
            for (var i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
                var x = sp + (xOffset + i) / unit;
                var y = Math.sin(x) * currRange;
                var dx = i;
                var dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;
                ctx.lineTo(dx, dy);
                sinStack.push([dx, dy]);
            }
            var startPoint = sinStack.shift();
            ctx.lineTo(xOffset + axisLength, canvasHeight);
            ctx.lineTo(xOffset, canvasHeight);
            ctx.lineTo(startPoint[0], startPoint[1]);
            var gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, color);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
        function render() {
            if (!ctx) {
                return;
            }
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (circleLock && type !== 'update') {
                if (arcStack.length) {
                    var temp = arcStack.shift();
                    ctx.lineTo(temp[0], temp[1]);
                    ctx.stroke();
                }
                else {
                    circleLock = false;
                    ctx.lineTo(cStartPoint[0], cStartPoint[1]);
                    ctx.stroke();
                    arcStack = [];
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.beginPath();
                    ctx.lineWidth = lineWidth;
                    ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);
                    ctx.beginPath();
                    ctx.save();
                    ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);
                    ctx.restore();
                    ctx.clip();
                    ctx.fillStyle = color;
                }
            }
            else {
                if (data >= 0.85) {
                    if (currRange > range / 4) {
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                else if (data <= 0.1) {
                    if (currRange < range * 1.5) {
                        var t = range * 0.01;
                        currRange += t;
                    }
                }
                else {
                    if (currRange <= range) {
                        var t = range * 0.01;
                        currRange += t;
                    }
                    if (currRange >= range) {
                        var t = range * 0.01;
                        currRange -= t;
                    }
                }
                if (data - currData > 0) {
                    currData += waveupsp;
                }
                if (data - currData < 0) {
                    currData -= waveupsp;
                }
                sp += 0.07;
                drawSin();
            }
            self.timer = requestAnimationFrame(render);
        }
        render();
    };
    WaterWave.prototype.render = function () {
        var _this = this;
        var radio = this.state.radio;
        var _a = this.props, percent = _a.percent, title = _a.title, _b = _a.height, height = _b === void 0 ? 1 : _b;
        return (<div className={index_less_1.default.waterWave} ref={function (n) { return (_this.root = n); }} style={{ transform: "scale(" + radio + ")" }}>
        <div style={{ width: height, height: height, overflow: 'hidden' }}>
          <canvas className={index_less_1.default.waterWaveCanvasWrapper} ref={function (n) { return (_this.node = n); }} width={height * 2} height={height * 2}/>
        </div>
        <div className={index_less_1.default.text} style={{ width: height }}>
          {title && <span>{title}</span>}
          <h4>{percent}%</h4>
        </div>
      </div>);
    };
    return WaterWave;
}(react_1.Component));
exports.default = autoHeight_1.default()(WaterWave);
//# sourceMappingURL=index.js.map