"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var umi_1 = require("umi");
var react_1 = __importDefault(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var style_less_1 = __importDefault(require("./style.less"));
var FormItem = antd_1.Form.Item;
var Option = antd_1.Select.Option;
var RangePicker = antd_1.DatePicker.RangePicker;
var TextArea = antd_1.Input.TextArea;
var BasicForm = function (props) {
    var submitting = props.submitting;
    var form = antd_1.Form.useForm()[0];
    var _a = react_1.default.useState(false), showPublicUsers = _a[0], setShowPublicUsers = _a[1];
    var formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 7 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
            md: { span: 10 },
        },
    };
    var submitFormLayout = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 10, offset: 7 },
        },
    };
    var onFinish = function (values) {
        var dispatch = props.dispatch;
        dispatch({
            type: 'formAndbasicForm/submitRegularForm',
            payload: values,
        });
    };
    var onFinishFailed = function (errorInfo) {
        // eslint-disable-next-line no-console
        console.log('Failed:', errorInfo);
    };
    var onValuesChange = function (changedValues) {
        var publicType = changedValues.publicType;
        if (publicType)
            setShowPublicUsers(publicType === '2');
    };
    return (<pro_layout_1.PageHeaderWrapper content={<umi_1.FormattedMessage id="formandbasic-form.basic.description"/>}>
      <antd_1.Card bordered={false}>
        <antd_1.Form hideRequiredMark style={{ marginTop: 8 }} form={form} name="basic" initialValues={{ public: '1' }} onFinish={onFinish} onFinishFailed={onFinishFailed} onValuesChange={onValuesChange}>
          <FormItem {...formItemLayout} label={<umi_1.FormattedMessage id="formandbasic-form.title.label"/>} name="title" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'formandbasic-form.title.required' }),
        },
    ]}>
            <antd_1.Input placeholder={umi_1.formatMessage({ id: 'formandbasic-form.title.placeholder' })}/>
          </FormItem>
          <FormItem {...formItemLayout} label={<umi_1.FormattedMessage id="formandbasic-form.date.label"/>} name="date" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'formandbasic-form.date.required' }),
        },
    ]}>
            <RangePicker style={{ width: '100%' }} placeholder={[
        umi_1.formatMessage({ id: 'formandbasic-form.placeholder.start' }),
        umi_1.formatMessage({ id: 'formandbasic-form.placeholder.end' }),
    ]}/>
          </FormItem>
          <FormItem {...formItemLayout} label={<umi_1.FormattedMessage id="formandbasic-form.goal.label"/>} name="goal" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'formandbasic-form.goal.required' }),
        },
    ]}>
            <TextArea style={{ minHeight: 32 }} placeholder={umi_1.formatMessage({ id: 'formandbasic-form.goal.placeholder' })} rows={4}/>
          </FormItem>
          <FormItem {...formItemLayout} label={<umi_1.FormattedMessage id="formandbasic-form.standard.label"/>} name="standard" rules={[
        {
            required: true,
            message: umi_1.formatMessage({ id: 'formandbasic-form.standard.required' }),
        },
    ]}>
            <TextArea style={{ minHeight: 32 }} placeholder={umi_1.formatMessage({ id: 'formandbasic-form.standard.placeholder' })} rows={4}/>
          </FormItem>
          <FormItem {...formItemLayout} label={<span>
                <umi_1.FormattedMessage id="formandbasic-form.client.label"/>
                <em className={style_less_1.default.optional}>
                  <umi_1.FormattedMessage id="formandbasic-form.form.optional"/>
                  <antd_1.Tooltip title={<umi_1.FormattedMessage id="formandbasic-form.label.tooltip"/>}>
                    <icons_1.InfoCircleOutlined style={{ marginRight: 4 }}/>
                  </antd_1.Tooltip>
                </em>
              </span>} name="client">
            <antd_1.Input placeholder={umi_1.formatMessage({ id: 'formandbasic-form.client.placeholder' })}/>
          </FormItem>
          <FormItem {...formItemLayout} label={<span>
                <umi_1.FormattedMessage id="formandbasic-form.invites.label"/>
                <em className={style_less_1.default.optional}>
                  <umi_1.FormattedMessage id="formandbasic-form.form.optional"/>
                </em>
              </span>} name="invites">
            <antd_1.Input placeholder={umi_1.formatMessage({ id: 'formandbasic-form.invites.placeholder' })}/>
          </FormItem>
          <FormItem {...formItemLayout} label={<span>
                <umi_1.FormattedMessage id="formandbasic-form.weight.label"/>
                <em className={style_less_1.default.optional}>
                  <umi_1.FormattedMessage id="formandbasic-form.form.optional"/>
                </em>
              </span>} name="weight">
            <antd_1.InputNumber placeholder={umi_1.formatMessage({ id: 'formandbasic-form.weight.placeholder' })} min={0} max={100}/>
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem {...formItemLayout} label={<umi_1.FormattedMessage id="formandbasic-form.public.label"/>} help={<umi_1.FormattedMessage id="formandbasic-form.label.help"/>} name="publicType">
            <div>
              <antd_1.Radio.Group>
                <antd_1.Radio value="1">
                  <umi_1.FormattedMessage id="formandbasic-form.radio.public"/>
                </antd_1.Radio>
                <antd_1.Radio value="2">
                  <umi_1.FormattedMessage id="formandbasic-form.radio.partially-public"/>
                </antd_1.Radio>
                <antd_1.Radio value="3">
                  <umi_1.FormattedMessage id="formandbasic-form.radio.private"/>
                </antd_1.Radio>
              </antd_1.Radio.Group>
              <FormItem style={{ marginBottom: 0 }} name="publicUsers">
                <antd_1.Select mode="multiple" placeholder={umi_1.formatMessage({ id: 'formandbasic-form.publicUsers.placeholder' })} style={{
        margin: '8px 0',
        display: showPublicUsers ? 'block' : 'none',
    }}>
                  <Option value="1">
                    <umi_1.FormattedMessage id="formandbasic-form.option.A"/>
                  </Option>
                  <Option value="2">
                    <umi_1.FormattedMessage id="formandbasic-form.option.B"/>
                  </Option>
                  <Option value="3">
                    <umi_1.FormattedMessage id="formandbasic-form.option.C"/>
                  </Option>
                </antd_1.Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <antd_1.Button type="primary" htmlType="submit" loading={submitting}>
              <umi_1.FormattedMessage id="formandbasic-form.form.submit"/>
            </antd_1.Button>
            <antd_1.Button style={{ marginLeft: 8 }}>
              <umi_1.FormattedMessage id="formandbasic-form.form.save"/>
            </antd_1.Button>
          </FormItem>
        </antd_1.Form>
      </antd_1.Card>
    </pro_layout_1.PageHeaderWrapper>);
};
exports.default = umi_1.connect(function (_a) {
    var loading = _a.loading;
    return ({
        submitting: loading.effects['formAndbasicForm/submitRegularForm'],
    });
})(BasicForm);
//# sourceMappingURL=index.js.map