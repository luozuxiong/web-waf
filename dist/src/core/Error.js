"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var WafError = /** @class */ (function () {
    function WafError(error) {
        this.name = error.name;
        this.message = error.message;
        this.stack = error.stack;
        utils_1.Log.warn(error.message);
    }
    return WafError;
}());
exports.default = WafError;
//# sourceMappingURL=Error.js.map