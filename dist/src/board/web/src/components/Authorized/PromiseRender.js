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
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var Secured_1 = require("./Secured");
var PromiseRender = /** @class */ (function (_super) {
    __extends(PromiseRender, _super);
    function PromiseRender() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            component: function () { return null; },
        };
        _this.shouldComponentUpdate = function (nextProps, nextState) {
            var component = _this.state.component;
            if (!isEqual_1.default(nextProps, _this.props)) {
                _this.setRenderComponent(nextProps);
            }
            if (nextState.component !== component)
                return true;
            return false;
        };
        // Determine whether the incoming component has been instantiated
        // AuthorizedRoute is already instantiated
        // Authorized  render is already instantiated, children is no instantiated
        // Secured is not instantiated
        _this.checkIsInstantiation = function (target) {
            if (Secured_1.isComponentClass(target)) {
                var Target_1 = target;
                return function (props) { return <Target_1 {...props}/>; };
            }
            if (react_1.default.isValidElement(target)) {
                return function (props) { return react_1.default.cloneElement(target, props); };
            }
            return function () { return target; };
        };
        return _this;
    }
    PromiseRender.prototype.componentDidMount = function () {
        this.setRenderComponent(this.props);
    };
    // set render Component : ok or error
    PromiseRender.prototype.setRenderComponent = function (props) {
        var _this = this;
        var ok = this.checkIsInstantiation(props.ok);
        var error = this.checkIsInstantiation(props.error);
        props.promise
            .then(function () {
            _this.setState({
                component: ok,
            });
            return true;
        })
            .catch(function () {
            _this.setState({
                component: error,
            });
        });
    };
    PromiseRender.prototype.render = function () {
        var Component = this.state.component;
        var _a = this.props, ok = _a.ok, error = _a.error, promise = _a.promise, rest = __rest(_a, ["ok", "error", "promise"]);
        return Component ? (<Component {...rest}/>) : (<div style={{
            width: '100%',
            height: '100%',
            margin: 'auto',
            paddingTop: 50,
            textAlign: 'center',
        }}>
        <antd_1.Spin size="large"/>
      </div>);
    };
    return PromiseRender;
}(react_1.default.Component));
exports.default = PromiseRender;
//# sourceMappingURL=PromiseRender.js.map