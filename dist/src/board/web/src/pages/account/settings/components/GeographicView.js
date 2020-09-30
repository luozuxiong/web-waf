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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var umi_1 = require("umi");
var GeographicView_less_1 = __importDefault(require("./GeographicView.less"));
var Option = antd_1.Select.Option;
var nullSelectItem = {
    label: '',
    value: '',
    key: '',
};
var GeographicView = /** @class */ (function (_super) {
    __extends(GeographicView, _super);
    function GeographicView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentDidMount = function () {
            var dispatch = _this.props.dispatch;
            if (dispatch) {
                dispatch({
                    type: 'accountAndsettings/fetchProvince',
                });
            }
        };
        _this.getCityOption = function () {
            var city = _this.props.city;
            if (city) {
                return _this.getOption(city);
            }
            return [];
        };
        _this.getOption = function (list) {
            if (!list || list.length < 1) {
                return (<Option key={0} value={0}>
          没有找到选项
        </Option>);
            }
            return list.map(function (item) { return (<Option key={item.id} value={item.id}>
        {item.name}
      </Option>); });
        };
        _this.selectProvinceItem = function (item) {
            var _a = _this.props, dispatch = _a.dispatch, onChange = _a.onChange;
            if (dispatch) {
                dispatch({
                    type: 'accountAndsettings/fetchCity',
                    payload: item.key,
                });
            }
            if (onChange) {
                onChange({
                    province: item,
                    city: nullSelectItem,
                });
            }
        };
        _this.selectCityItem = function (item) {
            var _a = _this.props, value = _a.value, onChange = _a.onChange;
            if (value && onChange) {
                onChange({
                    province: value.province,
                    city: item,
                });
            }
        };
        return _this;
    }
    GeographicView.prototype.componentDidUpdate = function (props) {
        var _a = this.props, dispatch = _a.dispatch, value = _a.value;
        if (!props.value && !!value && !!value.province) {
            if (dispatch) {
                dispatch({
                    type: 'accountAndsettings/fetchCity',
                    payload: value.province.key,
                });
            }
        }
    };
    GeographicView.prototype.getProvinceOption = function () {
        var province = this.props.province;
        if (province) {
            return this.getOption(province);
        }
        return [];
    };
    GeographicView.prototype.conversionObject = function () {
        var value = this.props.value;
        if (!value) {
            return {
                province: nullSelectItem,
                city: nullSelectItem,
            };
        }
        var province = value.province, city = value.city;
        return {
            province: province || nullSelectItem,
            city: city || nullSelectItem,
        };
    };
    GeographicView.prototype.render = function () {
        var _a = this.conversionObject(), province = _a.province, city = _a.city;
        var loading = this.props.loading;
        return (<antd_1.Spin spinning={loading} wrapperClassName={GeographicView_less_1.default.row}>
        <antd_1.Select className={GeographicView_less_1.default.item} value={province} labelInValue showSearch onSelect={this.selectProvinceItem}>
          {this.getProvinceOption()}
        </antd_1.Select>
        <antd_1.Select className={GeographicView_less_1.default.item} value={city} labelInValue showSearch onSelect={this.selectCityItem}>
          {this.getCityOption()}
        </antd_1.Select>
      </antd_1.Spin>);
    };
    return GeographicView;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var accountAndsettings = _a.accountAndsettings, loading = _a.loading;
    var province = accountAndsettings.province, city = accountAndsettings.city;
    return {
        province: province,
        city: city,
        loading: loading.models.accountAndsettings,
    };
})(GeographicView);
//# sourceMappingURL=GeographicView.js.map