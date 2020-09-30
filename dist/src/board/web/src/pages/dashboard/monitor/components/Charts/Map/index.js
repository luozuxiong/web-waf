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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var l7_react_1 = require("@antv/l7-react");
var pro_layout_1 = require("@ant-design/pro-layout");
var colors = ['#eff3ff', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'];
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: null,
            grid: null,
            loading: false,
        };
        return _this;
    }
    Map.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, geoData, gridData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            fetch('https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json').then(function (d) { return d.json(); }),
                            fetch('https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json').then(function (d) { return d.json(); }),
                        ])];
                    case 1:
                        _a = _b.sent(), geoData = _a[0], gridData = _a[1];
                        this.setState({
                            data: geoData,
                            grid: gridData,
                            loading: true,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Map.prototype.render = function () {
        var _a = this.state, data = _a.data, grid = _a.grid, loading = _a.loading;
        return loading === false ? (<pro_layout_1.PageLoading />) : (<l7_react_1.MapboxScene map={{
            center: [110.19382669582967, 50.258134],
            pitch: 0,
            style: 'blank',
            zoom: 1,
        }} style={{
            position: 'relative',
            width: '100%',
            height: '452px',
        }}>
        {grid && (<l7_react_1.HeatmapLayer key="1" source={{
            data: grid,
            transforms: [
                {
                    type: 'hexagon',
                    size: 800000,
                    field: 'capacity',
                    method: 'sum',
                },
            ],
        }} color={{
            values: '#ddd',
        }} shape={{
            values: 'hexagon',
        }} style={{
            coverage: 0.7,
            opacity: 0.8,
        }}/>)}
        {data && [
            <l7_react_1.PointLayer key="2" options={{
                autoFit: true,
            }} source={{
                data: data,
            }} scale={{
                values: {
                    color: {
                        field: 'cum_conf',
                        type: 'quantile',
                    },
                    size: {
                        field: 'cum_conf',
                        type: 'log',
                    },
                },
            }} color={{
                field: 'cum_conf',
                values: colors,
            }} shape={{
                values: 'circle',
            }} active={{
                option: {
                    color: '#0c2c84',
                },
            }} size={{
                field: 'cum_conf',
                values: [0, 30],
            }} style={{
                opacity: 0.8,
            }}/>,
            <l7_react_1.PointLayer key="5" source={{
                data: data,
            }} color={{
                values: '#fff',
            }} shape={{
                field: 'Short_Name_ZH',
                values: 'text',
            }} filter={{
                field: 'cum_conf',
                values: function (v) {
                    return v > 2000;
                },
            }} size={{
                values: 12,
            }} style={{
                opacity: 1,
                strokeOpacity: 1,
                strokeWidth: 0,
            }}/>,
        ]}
      </l7_react_1.MapboxScene>);
    };
    return Map;
}(React.Component));
exports.default = Map;
//# sourceMappingURL=index.js.map