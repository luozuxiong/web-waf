"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeDistance = exports.fixedZero = void 0;
var moment_1 = __importDefault(require("moment"));
function fixedZero(val) {
    return val * 1 < 10 ? "0" + val : val;
}
exports.fixedZero = fixedZero;
function getTimeDistance(type) {
    var now = new Date();
    var oneDay = 1000 * 60 * 60 * 24;
    if (type === 'today') {
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        return [moment_1.default(now), moment_1.default(now.getTime() + (oneDay - 1000))];
    }
    if (type === 'week') {
        var day = now.getDay();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        if (day === 0) {
            day = 6;
        }
        else {
            day -= 1;
        }
        var beginTime = now.getTime() - day * oneDay;
        return [moment_1.default(beginTime), moment_1.default(beginTime + (7 * oneDay - 1000))];
    }
    var year = now.getFullYear();
    if (type === 'month') {
        var month = now.getMonth();
        var nextDate = moment_1.default(now).add(1, 'months');
        var nextYear = nextDate.year();
        var nextMonth = nextDate.month();
        return [
            moment_1.default(year + "-" + fixedZero(month + 1) + "-01 00:00:00"),
            moment_1.default(moment_1.default(nextYear + "-" + fixedZero(nextMonth + 1) + "-01 00:00:00").valueOf() - 1000),
        ];
    }
    return [moment_1.default(year + "-01-01 00:00:00"), moment_1.default(year + "-12-31 23:59:59")];
}
exports.getTimeDistance = getTimeDistance;
//# sourceMappingURL=utils.js.map