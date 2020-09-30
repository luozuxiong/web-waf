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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var gg_editor_1 = require("gg-editor");
var upperFirst = function (str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, function (l) { return l.toUpperCase(); });
};
var Item = antd_1.Form.Item;
var Option = antd_1.Select.Option;
var inlineFormItemLayout = {
    labelCol: {
        sm: { span: 8 },
    },
    wrapperCol: {
        sm: { span: 16 },
    },
};
var DetailForm = /** @class */ (function (_super) {
    __extends(DetailForm, _super);
    function DetailForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleFieldChange = function (values) {
            var propsAPI = _this.props.propsAPI;
            var getSelected = propsAPI.getSelected, executeCommand = propsAPI.executeCommand, update = propsAPI.update;
            setTimeout(function () {
                var item = getSelected()[0];
                if (!item) {
                    return;
                }
                executeCommand(function () {
                    update(item, __assign({}, values));
                });
            }, 0);
        };
        _this.handleInputBlur = function (type) { return function (e) {
            var _a;
            e.preventDefault();
            _this.handleFieldChange((_a = {},
                _a[type] = e.currentTarget.value,
                _a));
        }; };
        _this.renderNodeDetail = function () {
            var label = _this.item.getModel().label;
            return (<antd_1.Form initialValues={{ label: label }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <antd_1.Input onBlur={_this.handleInputBlur('label')}/>
        </Item>
      </antd_1.Form>);
        };
        _this.renderEdgeDetail = function () {
            var _a = _this.item.getModel(), _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.shape, shape = _c === void 0 ? 'flow-smooth' : _c;
            return (<antd_1.Form initialValues={{ label: label, shape: shape }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <antd_1.Input onBlur={_this.handleInputBlur('label')}/>
        </Item>
        <Item label="Shape" name="shape" {...inlineFormItemLayout}>
          <antd_1.Select onChange={function (value) { return _this.handleFieldChange({ shape: value }); }}>
            <Option value="flow-smooth">Smooth</Option>
            <Option value="flow-polyline">Polyline</Option>
            <Option value="flow-polyline-round">Polyline Round</Option>
          </antd_1.Select>
        </Item>
      </antd_1.Form>);
        };
        _this.renderGroupDetail = function () {
            var _a = _this.item.getModel().label, label = _a === void 0 ? '新建分组' : _a;
            return (<antd_1.Form initialValues={{ label: label }}>
        <Item label="Label" name="label" {...inlineFormItemLayout}>
          <antd_1.Input onBlur={_this.handleInputBlur('label')}/>
        </Item>
      </antd_1.Form>);
        };
        return _this;
    }
    Object.defineProperty(DetailForm.prototype, "item", {
        get: function () {
            var propsAPI = this.props.propsAPI;
            return propsAPI.getSelected()[0];
        },
        enumerable: false,
        configurable: true
    });
    DetailForm.prototype.render = function () {
        var type = this.props.type;
        if (!this.item) {
            return null;
        }
        return (<antd_1.Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'group' && this.renderGroupDetail()}
      </antd_1.Card>);
    };
    return DetailForm;
}(react_1.default.Component));
exports.default = gg_editor_1.withPropsAPI(DetailForm);
//# sourceMappingURL=DetailForm.js.map