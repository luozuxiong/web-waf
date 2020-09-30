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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var classnames_1 = __importDefault(require("classnames"));
var index_less_1 = __importDefault(require("./index.less"));
var CheckableTag = antd_1.Tag.CheckableTag;
var TagSelectOption = function (_a) {
    var children = _a.children, checked = _a.checked, onChange = _a.onChange, value = _a.value;
    return (<CheckableTag checked={!!checked} key={value} onChange={function (state) { return onChange && onChange(value, state); }}>
    {children}
  </CheckableTag>);
};
TagSelectOption.isTagSelectOption = true;
var TagSelect = /** @class */ (function (_super) {
    __extends(TagSelect, _super);
    function TagSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (value) {
            var onChange = _this.props.onChange;
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (onChange) {
                onChange(value);
            }
        };
        _this.onSelectAll = function (checked) {
            var checkedTags = [];
            if (checked) {
                checkedTags = _this.getAllTags();
            }
            _this.onChange(checkedTags);
        };
        _this.handleTagChange = function (value, checked) {
            var StateValue = _this.state.value;
            var checkedTags = __spreadArrays(StateValue);
            var index = checkedTags.indexOf(value);
            if (checked && index === -1) {
                checkedTags.push(value);
            }
            else if (!checked && index > -1) {
                checkedTags.splice(index, 1);
            }
            _this.onChange(checkedTags);
        };
        _this.handleExpand = function () {
            var expand = _this.state.expand;
            _this.setState({
                expand: !expand,
            });
        };
        _this.isTagSelectOption = function (node) {
            return node &&
                node.type &&
                (node.type.isTagSelectOption || node.type.displayName === 'TagSelectOption');
        };
        _this.state = {
            expand: false,
            value: props.value || props.defaultValue || [],
        };
        return _this;
    }
    TagSelect.getDerivedStateFromProps = function (nextProps) {
        if ('value' in nextProps) {
            return { value: nextProps.value || [] };
        }
        return null;
    };
    TagSelect.prototype.getAllTags = function () {
        var _this = this;
        var children = this.props.children;
        var childrenArray = react_1.default.Children.toArray(children);
        var checkedTags = childrenArray
            .filter(function (child) { return _this.isTagSelectOption(child); })
            .map(function (child) { return child.props.value; });
        return checkedTags || [];
    };
    TagSelect.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.state, value = _b.value, expand = _b.expand;
        var _c = this.props, children = _c.children, hideCheckAll = _c.hideCheckAll, className = _c.className, style = _c.style, expandable = _c.expandable, _d = _c.actionsText, actionsText = _d === void 0 ? {} : _d;
        var checkedAll = this.getAllTags().length === value.length;
        var _e = actionsText.expandText, expandText = _e === void 0 ? '展开' : _e, _f = actionsText.collapseText, collapseText = _f === void 0 ? '收起' : _f, _g = actionsText.selectAllText, selectAllText = _g === void 0 ? '全部' : _g;
        var cls = classnames_1.default(index_less_1.default.tagSelect, className, (_a = {},
            _a[index_less_1.default.hasExpandTag] = expandable,
            _a[index_less_1.default.expanded] = expand,
            _a));
        return (<div className={cls} style={style}>
        {hideCheckAll ? null : (<CheckableTag checked={checkedAll} key="tag-select-__all__" onChange={this.onSelectAll}>
            {selectAllText}
          </CheckableTag>)}
        {value &&
            children &&
            react_1.default.Children.map(children, function (child) {
                if (_this.isTagSelectOption(child)) {
                    return react_1.default.cloneElement(child, {
                        key: "tag-select-" + child.props.value,
                        value: child.props.value,
                        checked: value.indexOf(child.props.value) > -1,
                        onChange: _this.handleTagChange,
                    });
                }
                return child;
            })}
        {expandable && (<a className={index_less_1.default.trigger} onClick={this.handleExpand}>
            {expand ? (<>
                {collapseText} <icons_1.UpOutlined />
              </>) : (<>
                {expandText}
                <icons_1.DownOutlined />
              </>)}
          </a>)}
      </div>);
    };
    TagSelect.defaultProps = {
        hideCheckAll: false,
        actionsText: {
            expandText: '展开',
            collapseText: '收起',
            selectAllText: '全部',
        },
    };
    TagSelect.Option = TagSelectOption;
    return TagSelect;
}(react_1.Component));
exports.default = TagSelect;
//# sourceMappingURL=index.js.map