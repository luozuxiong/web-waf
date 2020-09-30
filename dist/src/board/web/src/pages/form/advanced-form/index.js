"use strict";
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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var TableForm_1 = __importDefault(require("./components/TableForm"));
var FooterToolbar_1 = __importDefault(require("./components/FooterToolbar"));
var style_less_1 = __importDefault(require("./style.less"));
var Option = antd_1.Select.Option;
var RangePicker = antd_1.DatePicker.RangePicker;
var fieldLabels = {
    name: '仓库名',
    url: '仓库域名',
    owner: '仓库管理员',
    approver: '审批人',
    dateRange: '生效日期',
    type: '仓库类型',
    name2: '任务名',
    url2: '任务描述',
    owner2: '执行人',
    approver2: '责任人',
    dateRange2: '生效日期',
    type2: '任务类型',
};
var tableData = [
    {
        key: '1',
        workId: '00001',
        name: 'John Brown',
        department: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        workId: '00002',
        name: 'Jim Green',
        department: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        workId: '00003',
        name: 'Joe Black',
        department: 'Sidney No. 1 Lake Park',
    },
];
var AdvancedForm = function (_a) {
    var submitting = _a.submitting, dispatch = _a.dispatch;
    var form = antd_1.Form.useForm()[0];
    var _b = react_1.useState([]), error = _b[0], setError = _b[1];
    var getErrorInfo = function (errors) {
        var errorCount = errors.filter(function (item) { return item.errors.length > 0; }).length;
        if (!errors || errorCount === 0) {
            return null;
        }
        var scrollToField = function (fieldKey) {
            var labelNode = document.querySelector("label[for=\"" + fieldKey + "\"]");
            if (labelNode) {
                labelNode.scrollIntoView(true);
            }
        };
        var errorList = errors.map(function (err) {
            if (!err || err.errors.length === 0) {
                return null;
            }
            var key = err.name[0];
            return (<li key={key} className={style_less_1.default.errorListItem} onClick={function () { return scrollToField(key); }}>
          <icons_1.CloseCircleOutlined className={style_less_1.default.errorIcon}/>
          <div className={style_less_1.default.errorMessage}>{err.errors[0]}</div>
          <div className={style_less_1.default.errorField}>{fieldLabels[key]}</div>
        </li>);
        });
        return (<span className={style_less_1.default.errorIcon}>
        <antd_1.Popover title="表单校验信息" content={errorList} overlayClassName={style_less_1.default.errorPopover} trigger="click" getPopupContainer={function (trigger) {
            if (trigger && trigger.parentNode) {
                return trigger.parentNode;
            }
            return trigger;
        }}>
          <icons_1.CloseCircleOutlined />
        </antd_1.Popover>
        {errorCount}
      </span>);
    };
    var onFinish = function (values) {
        setError([]);
        dispatch({
            type: 'formAndadvancedForm/submitAdvancedForm',
            payload: values,
        });
    };
    var onFinishFailed = function (errorInfo) {
        setError(errorInfo.errorFields);
    };
    return (<antd_1.Form form={form} layout="vertical" hideRequiredMark initialValues={{ members: tableData }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <pro_layout_1.PageHeaderWrapper content="高级表单常见于一次性输入和提交大批量数据的场景。">
        <antd_1.Card title="仓库管理" className={style_less_1.default.card} bordered={false}>
          <antd_1.Row gutter={16}>
            <antd_1.Col lg={6} md={12} sm={24}>
              <antd_1.Form.Item label={fieldLabels.name} name="name" rules={[{ required: true, message: '请输入仓库名称' }]}>
                <antd_1.Input placeholder="请输入仓库名称"/>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.url} name="url" rules={[{ required: true, message: '请选择' }]}>
                <antd_1.Input style={{ width: '100%' }} addonBefore="http://" addonAfter=".com" placeholder="请输入"/>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.owner} name="owner" rules={[{ required: true, message: '请选择管理员' }]}>
                <antd_1.Select placeholder="请选择管理员">
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </antd_1.Select>
              </antd_1.Form.Item>
            </antd_1.Col>
          </antd_1.Row>
          <antd_1.Row gutter={16}>
            <antd_1.Col lg={6} md={12} sm={24}>
              <antd_1.Form.Item label={fieldLabels.approver} name="approver" rules={[{ required: true, message: '请选择审批员' }]}>
                <antd_1.Select placeholder="请选择审批员">
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </antd_1.Select>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.dateRange} name="dateRange" rules={[{ required: true, message: '请选择生效日期' }]}>
                <RangePicker placeholder={['开始日期', '结束日期']} style={{ width: '100%' }}/>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.type} name="type" rules={[{ required: true, message: '请选择仓库类型' }]}>
                <antd_1.Select placeholder="请选择仓库类型">
                  <Option value="private">私密</Option>
                  <Option value="public">公开</Option>
                </antd_1.Select>
              </antd_1.Form.Item>
            </antd_1.Col>
          </antd_1.Row>
        </antd_1.Card>
        <antd_1.Card title="任务管理" className={style_less_1.default.card} bordered={false}>
          <antd_1.Row gutter={16}>
            <antd_1.Col lg={6} md={12} sm={24}>
              <antd_1.Form.Item label={fieldLabels.name2} name="name2" rules={[{ required: true, message: '请输入' }]}>
                <antd_1.Input placeholder="请输入"/>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.url2} name="url2" rules={[{ required: true, message: '请选择' }]}>
                <antd_1.Input placeholder="请输入"/>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.owner2} name="owner2" rules={[{ required: true, message: '请选择管理员' }]}>
                <antd_1.Select placeholder="请选择管理员">
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </antd_1.Select>
              </antd_1.Form.Item>
            </antd_1.Col>
          </antd_1.Row>
          <antd_1.Row gutter={16}>
            <antd_1.Col lg={6} md={12} sm={24}>
              <antd_1.Form.Item label={fieldLabels.approver2} name="approver2" rules={[{ required: true, message: '请选择审批员' }]}>
                <antd_1.Select placeholder="请选择审批员">
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </antd_1.Select>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.dateRange2} name="dateRange2" rules={[{ required: true, message: '请输入' }]}>
                <antd_1.TimePicker placeholder="提醒时间" style={{ width: '100%' }} getPopupContainer={function (trigger) {
        if (trigger && trigger.parentNode) {
            return trigger.parentNode;
        }
        return trigger;
    }}/>
              </antd_1.Form.Item>
            </antd_1.Col>
            <antd_1.Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
              <antd_1.Form.Item label={fieldLabels.type2} name="type2" rules={[{ required: true, message: '请选择仓库类型' }]}>
                <antd_1.Select placeholder="请选择仓库类型">
                  <Option value="private">私密</Option>
                  <Option value="public">公开</Option>
                </antd_1.Select>
              </antd_1.Form.Item>
            </antd_1.Col>
          </antd_1.Row>
        </antd_1.Card>
        <antd_1.Card title="成员管理" bordered={false}>
          <antd_1.Form.Item name="members">
            <TableForm_1.default />
          </antd_1.Form.Item>
        </antd_1.Card>
      </pro_layout_1.PageHeaderWrapper>
      <FooterToolbar_1.default>
        {getErrorInfo(error)}
        <antd_1.Button type="primary" onClick={function () { return form === null || form === void 0 ? void 0 : form.submit(); }} loading={submitting}>
          提交
        </antd_1.Button>
      </FooterToolbar_1.default>
    </antd_1.Form>);
};
exports.default = umi_1.connect(function (_a) {
    var loading = _a.loading;
    return ({
        submitting: loading.effects['formAndadvancedForm/submitAdvancedForm'],
    });
})(AdvancedForm);
//# sourceMappingURL=index.js.map