"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = exports.MiniArea = exports.TagCloud = exports.Gauge = exports.WaterWave = exports.Pie = exports.default = void 0;
var Gauge_1 = __importDefault(require("./Gauge"));
exports.Gauge = Gauge_1.default;
var MiniArea_1 = __importDefault(require("./MiniArea"));
exports.MiniArea = MiniArea_1.default;
var Pie_1 = __importDefault(require("./Pie"));
exports.Pie = Pie_1.default;
var TagCloud_1 = __importDefault(require("./TagCloud"));
exports.TagCloud = TagCloud_1.default;
var WaterWave_1 = __importDefault(require("./WaterWave"));
exports.WaterWave = WaterWave_1.default;
var Map_1 = __importDefault(require("./Map"));
exports.Map = Map_1.default;
var Charts = {
    Pie: Pie_1.default,
    WaterWave: WaterWave_1.default,
    Gauge: Gauge_1.default,
    MiniArea: MiniArea_1.default,
    TagCloud: TagCloud_1.default,
    Map: Map_1.default,
};
exports.default = Charts;
//# sourceMappingURL=index.js.map