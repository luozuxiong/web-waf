"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var PhoneView_less_1 = __importDefault(require("./PhoneView.less"));
var PhoneView = function (props) {
    var value = props.value, onChange = props.onChange;
    var values = ['', ''];
    if (value) {
        values = value.split('-');
    }
    return (<>
      <antd_1.Input className={PhoneView_less_1.default.area_code} value={values[0]} onChange={function (e) {
        if (onChange) {
            onChange(e.target.value + "-" + values[1]);
        }
    }}/>
      <antd_1.Input className={PhoneView_less_1.default.phone_number} onChange={function (e) {
        if (onChange) {
            onChange(values[0] + "-" + e.target.value);
        }
    }} value={values[1]}/>
    </>);
};
exports.default = PhoneView;
//# sourceMappingURL=PhoneView.js.map