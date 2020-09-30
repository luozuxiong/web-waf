"use strict";
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
var moment_1 = __importDefault(require("moment"));
var antd_1 = require("antd");
var style_less_1 = __importDefault(require("../style.less"));
var TextArea = antd_1.Input.TextArea;
var formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
};
var OperationModal = function (props) {
    var form = antd_1.Form.useForm()[0];
    var done = props.done, visible = props.visible, current = props.current, onDone = props.onDone, onCancel = props.onCancel, onSubmit = props.onSubmit;
    react_1.useEffect(function () {
        if (form && !visible) {
            form.resetFields();
        }
    }, [props.visible]);
    react_1.useEffect(function () {
        if (current) {
            form.setFieldsValue(__assign(__assign({}, current), { createdAt: current.createdAt ? moment_1.default(current.createdAt) : null }));
        }
    }, [props.current]);
    var handleSubmit = function () {
        if (!form)
            return;
        form.submit();
    };
    var handleFinish = function (values) {
        if (onSubmit) {
            onSubmit(values);
        }
    };
    var modalFooter = done
        ? { footer: null, onCancel: onDone }
        : { okText: '保存', onOk: handleSubmit, onCancel: onCancel };
    var getModalContent = function () {
        if (done) {
            return (<antd_1.Result status="success" title="操作成功" subTitle="一系列的信息描述，很短同样也可以带标点。" extra={<antd_1.Button type="primary" onClick={onDone}>
              知道了
            </antd_1.Button>} className={style_less_1.default.formResult}/>);
        }
        return (<antd_1.Form {...formLayout} form={form} onFinish={handleFinish}>
        <antd_1.Form.Item name="title" label="任务名称" rules={[{ required: true, message: '请输入任务名称' }]}>
          <antd_1.Input placeholder="请输入"/>
        </antd_1.Form.Item>
        <antd_1.Form.Item name="createdAt" label="开始时间" rules={[{ required: true, message: '请选择开始时间' }]}>
          <antd_1.DatePicker showTime placeholder="请选择" format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }}/>
        </antd_1.Form.Item>
        <antd_1.Form.Item name="owner" label="任务负责人" rules={[{ required: true, message: '请选择任务负责人' }]}>
          <antd_1.Select placeholder="请选择">
            <antd_1.Select.Option value="付晓晓">付晓晓</antd_1.Select.Option>
            <antd_1.Select.Option value="周毛毛">周毛毛</antd_1.Select.Option>
          </antd_1.Select>
        </antd_1.Form.Item>
        <antd_1.Form.Item name="subDescription" label="产品描述" rules={[{ message: '请输入至少五个字符的产品描述！', min: 5 }]}>
          <TextArea rows={4} placeholder="请输入至少五个字符"/>
        </antd_1.Form.Item>
      </antd_1.Form>);
    };
    return (<antd_1.Modal title={done ? null : "\u4EFB\u52A1" + (current ? '编辑' : '添加')} className={style_less_1.default.standardListForm} width={640} bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }} destroyOnClose visible={visible} {...modalFooter}>
      {getModalContent()}
    </antd_1.Modal>);
};
exports.default = OperationModal;
//# sourceMappingURL=OperationModal.js.map