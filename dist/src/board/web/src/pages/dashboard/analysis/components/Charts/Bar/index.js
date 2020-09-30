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
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var index_less_1 = __importDefault(require("../index.less"));
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            autoHideXLabels: false,
        };
        _this.root = undefined;
        _this.node = undefined;
        _this.resize = lodash_debounce_1.default(function () {
            if (!_this.node || !_this.node.parentNode) {
                return;
            }
            var canvasWidth = _this.node.parentNode.clientWidth;
            var _a = _this.props, _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.autoLabel, autoLabel = _c === void 0 ? true : _c;
            if (!autoLabel) {
                return;
            }
            var minWidth = data.length * 30;
            var autoHideXLabels = _this.state.autoHideXLabels;
            if (canvasWidth <= minWidth) {
                if (!autoHideXLabels) {
                    _this.setState({
                        autoHideXLabels: true,
                    });
                }
            }
            else if (autoHideXLabels) {
                _this.setState({
                    autoHideXLabels: false,
                });
            }
        }, 500);
        _this.handleRoot = function (n) {
            _this.root = n;
        };
        _this.handleRef = function (n) {
            _this.node = n;
        };
        return _this;
    }
    Bar.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.resize, { passive: true });
    };
    Bar.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resize);
    };
    Bar.prototype.render = function () {
        var _a = this.props, _b = _a.height, height = _b === void 0 ? 1 : _b, title = _a.title, _c = _a.forceFit, forceFit = _c === void 0 ? true : _c, data = _a.data, _d = _a.color, color = _d === void 0 ? 'rgba(24, 144, 255, 0.85)' : _d, padding = _a.padding;
        var autoHideXLabels = this.state.autoHideXLabels;
        var scale = {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        };
        var tooltip = [
            'x*y',
            function (x, y) { return ({
                name: x,
                value: y,
            }); },
        ];
        return (<div className={index_less_1.default.chart} style={{ height: height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <bizcharts_1.Chart scale={scale} height={title ? height - 41 : height} forceFit={forceFit} data={data} padding={padding || 'auto'}>
            <bizcharts_1.Axis name="x" title={false} label={autoHideXLabels ? undefined : {}} tickLine={autoHideXLabels ? undefined : {}}/>
            <bizcharts_1.Axis name="y" min={0}/>
            <bizcharts_1.Tooltip showTitle={false} crosshairs={false}/>
            <bizcharts_1.Geom type="interval" position="x*y" color={color} tooltip={tooltip}/>
          </bizcharts_1.Chart>
        </div>
      </div>);
    };
    return Bar;
}(react_1.Component));
exports.default = autoHeight_1.default()(Bar);
//# sourceMappingURL=index.js.map