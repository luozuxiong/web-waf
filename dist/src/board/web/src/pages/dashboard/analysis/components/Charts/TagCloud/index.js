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
var data_set_1 = __importDefault(require("@antv/data-set"));
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var classnames_1 = __importDefault(require("classnames"));
var autoHeight_1 = __importDefault(require("../autoHeight"));
var index_less_1 = __importDefault(require("./index.less"));
/* eslint no-underscore-dangle: 0 */
/* eslint no-param-reassign: 0 */
var imgUrl = 'https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png';
var TagCloud = /** @class */ (function (_super) {
    __extends(TagCloud, _super);
    function TagCloud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dv: null,
            height: 0,
            width: 0,
        };
        _this.isUnmount = false;
        _this.requestRef = 0;
        _this.root = undefined;
        _this.imageMask = undefined;
        _this.resize = function () {
            _this.requestRef = requestAnimationFrame(function () {
                _this.renderChart(_this.props);
            });
        };
        _this.saveRootRef = function (node) {
            _this.root = node;
        };
        _this.initTagCloud = function () {
            function getTextAttrs(cfg) {
                return __assign(__assign({}, cfg.style), { fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' });
            }
            bizcharts_1.Shape.registerShape('point', 'cloud', {
                drawShape: function (cfg, container) {
                    var attrs = getTextAttrs(cfg);
                    return container.addShape('text', {
                        attrs: __assign(__assign({}, attrs), { x: cfg.x, y: cfg.y }),
                    });
                },
            });
        };
        _this.renderChart = lodash_debounce_1.default(function (nextProps) {
            // const colors = ['#1890FF', '#41D9C7', '#2FC25B', '#FACC14', '#9AE65C'];
            var _a = nextProps || _this.props, data = _a.data, height = _a.height;
            if (data.length < 1 || !_this.root) {
                return;
            }
            var h = height;
            var w = _this.root.offsetWidth;
            var onload = function () {
                var dv = new data_set_1.default.View().source(data);
                var range = dv.range('value');
                var min = range[0], max = range[1];
                dv.transform({
                    type: 'tag-cloud',
                    fields: ['name', 'value'],
                    imageMask: _this.imageMask,
                    font: 'Verdana',
                    size: [w, h],
                    padding: 0,
                    timeInterval: 5000,
                    rotate: function () {
                        return 0;
                    },
                    fontSize: function (d) {
                        var size = Math.pow(((d.value - min) / (max - min)), 2);
                        return size * (17.5 - 5) + 5;
                    },
                });
                if (_this.isUnmount) {
                    return;
                }
                _this.setState({
                    dv: dv,
                    width: w,
                    height: h,
                });
            };
            if (!_this.imageMask) {
                _this.imageMask = new Image();
                _this.imageMask.crossOrigin = '';
                _this.imageMask.src = imgUrl;
                _this.imageMask.onload = onload;
            }
            else {
                onload();
            }
        }, 500);
        return _this;
    }
    TagCloud.prototype.componentDidMount = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.initTagCloud();
            _this.renderChart(_this.props);
        });
        window.addEventListener('resize', this.resize, { passive: true });
    };
    TagCloud.prototype.componentDidUpdate = function (preProps) {
        var data = this.props.data;
        if (preProps && JSON.stringify(preProps.data) !== JSON.stringify(data)) {
            this.renderChart(this.props);
        }
    };
    TagCloud.prototype.componentWillUnmount = function () {
        this.isUnmount = true;
        window.cancelAnimationFrame(this.requestRef);
        window.removeEventListener('resize', this.resize);
    };
    TagCloud.prototype.render = function () {
        var _a = this.props, className = _a.className, height = _a.height;
        var _b = this.state, dv = _b.dv, width = _b.width, stateHeight = _b.height;
        return (<div className={classnames_1.default(index_less_1.default.tagCloud, className)} style={{ width: '100%', height: height }} ref={this.saveRootRef}>
        {dv && (<bizcharts_1.Chart width={width} height={stateHeight} data={dv} padding={0} scale={{
            x: { nice: false },
            y: { nice: false },
        }}>
            <bizcharts_1.Tooltip showTitle={false}/>
            <bizcharts_1.Coord reflect="y"/>
            <bizcharts_1.Geom type="point" position="x*y" color="text" shape="cloud" tooltip={[
            'text*value',
            function trans(text, value) {
                return { name: text, value: value };
            },
        ]}/>
          </bizcharts_1.Chart>)}
      </div>);
    };
    return TagCloud;
}(react_1.Component));
exports.default = autoHeight_1.default()(TagCloud);
//# sourceMappingURL=index.js.map