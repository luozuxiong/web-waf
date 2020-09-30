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
function computeHeight(node) {
    var style = node.style;
    style.height = '100%';
    var totalHeight = parseInt("" + getComputedStyle(node).height, 10);
    var padding = parseInt("" + getComputedStyle(node).paddingTop, 10) +
        parseInt("" + getComputedStyle(node).paddingBottom, 10);
    return totalHeight - padding;
}
function getAutoHeight(n) {
    if (!n) {
        return 0;
    }
    var node = n;
    var height = computeHeight(node);
    var parentNode = node.parentNode;
    if (parentNode) {
        height = computeHeight(parentNode);
    }
    return height;
}
function autoHeight() {
    return function (WrappedComponent) {
        var AutoHeightComponent = /** @class */ (function (_super) {
            __extends(AutoHeightComponent, _super);
            function AutoHeightComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    computedHeight: 0,
                };
                _this.root = null;
                _this.handleRoot = function (node) {
                    _this.root = node;
                };
                return _this;
            }
            AutoHeightComponent.prototype.componentDidMount = function () {
                var height = this.props.height;
                if (!height && this.root) {
                    var h = getAutoHeight(this.root);
                    this.setState({ computedHeight: h });
                    if (h < 1) {
                        h = getAutoHeight(this.root);
                        this.setState({ computedHeight: h });
                    }
                }
            };
            AutoHeightComponent.prototype.render = function () {
                var height = this.props.height;
                var computedHeight = this.state.computedHeight;
                var h = height || computedHeight;
                return (<div ref={this.handleRoot}>
            {h > 0 && <WrappedComponent {...this.props} height={h}/>}
          </div>);
            };
            return AutoHeightComponent;
        }(react_1.default.Component));
        return AutoHeightComponent;
    };
}
exports.default = autoHeight;
//# sourceMappingURL=autoHeight.js.map