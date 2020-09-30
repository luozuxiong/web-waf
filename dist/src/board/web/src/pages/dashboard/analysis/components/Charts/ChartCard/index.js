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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var index_less_1 = __importDefault(require("./index.less"));
var renderTotal = function (total) {
    if (!total && total !== 0) {
        return null;
    }
    var totalDom;
    switch (typeof total) {
        case 'undefined':
            totalDom = null;
            break;
        case 'function':
            totalDom = <div className={index_less_1.default.total}>{total()}</div>;
            break;
        default:
            totalDom = <div className={index_less_1.default.total}>{total}</div>;
    }
    return totalDom;
};
var ChartCard = /** @class */ (function (_super) {
    __extends(ChartCard, _super);
    function ChartCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderContent = function () {
            var _a, _b;
            var _c = _this.props, contentHeight = _c.contentHeight, title = _c.title, avatar = _c.avatar, action = _c.action, total = _c.total, footer = _c.footer, children = _c.children, loading = _c.loading;
            if (loading) {
                return false;
            }
            return (<div className={index_less_1.default.chartCard}>
        <div className={classnames_1.default(index_less_1.default.chartTop, (_a = {},
                _a[index_less_1.default.chartTopMargin] = !children && !footer,
                _a))}>
          <div className={index_less_1.default.avatar}>{avatar}</div>
          <div className={index_less_1.default.metaWrap}>
            <div className={index_less_1.default.meta}>
              <span className={index_less_1.default.title}>{title}</span>
              <span className={index_less_1.default.action}>{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (<div className={index_less_1.default.content} style={{ height: contentHeight || 'auto' }}>
            <div className={contentHeight && index_less_1.default.contentFixed}>{children}</div>
          </div>)}
        {footer && (<div className={classnames_1.default(index_less_1.default.footer, (_b = {},
                _b[index_less_1.default.footerMargin] = !children,
                _b))}>
            {footer}
          </div>)}
      </div>);
        };
        return _this;
    }
    ChartCard.prototype.render = function () {
        var _a = this.props, _b = _a.loading, loading = _b === void 0 ? false : _b, contentHeight = _a.contentHeight, title = _a.title, avatar = _a.avatar, action = _a.action, total = _a.total, footer = _a.footer, children = _a.children, rest = __rest(_a, ["loading", "contentHeight", "title", "avatar", "action", "total", "footer", "children"]);
        return (<antd_1.Card loading={loading} bodyStyle={{ padding: '20px 24px 8px 24px' }} {...rest}>
        {this.renderContent()}
      </antd_1.Card>);
    };
    return ChartCard;
}(react_1.default.Component));
exports.default = ChartCard;
//# sourceMappingURL=index.js.map