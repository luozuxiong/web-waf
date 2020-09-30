"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var CreateForm = function (props) {
    var modalVisible = props.modalVisible, onCancel = props.onCancel;
    return (<antd_1.Modal destroyOnClose title="新建规则" visible={modalVisible} onCancel={function () { return onCancel(); }} footer={null}>
      {props.children}
    </antd_1.Modal>);
};
exports.default = CreateForm;
//# sourceMappingURL=CreateForm.js.map