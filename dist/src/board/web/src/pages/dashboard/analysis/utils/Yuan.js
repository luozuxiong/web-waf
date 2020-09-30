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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Charts_1 = require("../components/Charts");
/**
 * 减少使用 dangerouslySetInnerHTML
 */
var Yuan = /** @class */ (function (_super) {
    __extends(Yuan, _super);
    function Yuan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.main = null;
        _this.renderToHtml = function () {
            var children = _this.props.children;
            if (_this.main) {
                _this.main.innerHTML = Charts_1.yuan(children);
            }
        };
        return _this;
    }
    Yuan.prototype.componentDidMount = function () {
        this.renderToHtml();
    };
    Yuan.prototype.componentDidUpdate = function () {
        this.renderToHtml();
    };
    Yuan.prototype.render = function () {
        var _this = this;
        return (<span ref={function (ref) {
            _this.main = ref;
        }}/>);
    };
    return Yuan;
}(react_1.default.Component));
exports.default = Yuan;
//# sourceMappingURL=Yuan.js.map