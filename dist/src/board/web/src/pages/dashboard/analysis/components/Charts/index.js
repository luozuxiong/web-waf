"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineChart = exports.TagCloud = exports.WaterWave = exports.Field = exports.ChartCard = exports.MiniProgress = exports.MiniArea = exports.MiniBar = exports.Gauge = exports.Pie = exports.Bar = exports.yuan = exports.default = void 0;
var numeral_1 = __importDefault(require("numeral"));
var Bar_1 = __importDefault(require("./Bar"));
exports.Bar = Bar_1.default;
var ChartCard_1 = __importDefault(require("./ChartCard"));
exports.ChartCard = ChartCard_1.default;
var Field_1 = __importDefault(require("./Field"));
exports.Field = Field_1.default;
var Gauge_1 = __importDefault(require("./Gauge"));
exports.Gauge = Gauge_1.default;
var MiniArea_1 = __importDefault(require("./MiniArea"));
exports.MiniArea = MiniArea_1.default;
var MiniBar_1 = __importDefault(require("./MiniBar"));
exports.MiniBar = MiniBar_1.default;
var MiniProgress_1 = __importDefault(require("./MiniProgress"));
exports.MiniProgress = MiniProgress_1.default;
var Pie_1 = __importDefault(require("./Pie"));
exports.Pie = Pie_1.default;
var TagCloud_1 = __importDefault(require("./TagCloud"));
exports.TagCloud = TagCloud_1.default;
var TimelineChart_1 = __importDefault(require("./TimelineChart"));
exports.TimelineChart = TimelineChart_1.default;
var WaterWave_1 = __importDefault(require("./WaterWave"));
exports.WaterWave = WaterWave_1.default;
var yuan = function (val) { return "\u00A5 " + numeral_1.default(val).format('0,0'); };
exports.yuan = yuan;
var Charts = {
    yuan: yuan,
    Bar: Bar_1.default,
    Pie: Pie_1.default,
    Gauge: Gauge_1.default,
    MiniBar: MiniBar_1.default,
    MiniArea: MiniArea_1.default,
    MiniProgress: MiniProgress_1.default,
    ChartCard: ChartCard_1.default,
    Field: Field_1.default,
    WaterWave: WaterWave_1.default,
    TagCloud: TagCloud_1.default,
    TimelineChart: TimelineChart_1.default,
};
exports.default = Charts;
//# sourceMappingURL=index.js.map