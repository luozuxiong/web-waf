"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Authorized_1 = __importDefault(require("./Authorized"));
var Secured_1 = __importDefault(require("./Secured"));
var CheckPermissions_1 = __importDefault(require("./CheckPermissions"));
var renderAuthorize_1 = __importDefault(require("./renderAuthorize"));
Authorized_1.default.Secured = Secured_1.default;
Authorized_1.default.check = CheckPermissions_1.default;
var RenderAuthorize = renderAuthorize_1.default(Authorized_1.default);
exports.default = RenderAuthorize;
//# sourceMappingURL=index.js.map