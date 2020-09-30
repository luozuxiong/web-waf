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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var pro_table_1 = __importDefault(require("@ant-design/pro-table"));
var CreateForm_1 = __importDefault(require("./components/CreateForm"));
var UpdateForm_1 = __importDefault(require("./components/UpdateForm"));
var service_1 = require("./service");
/**
 * 添加节点
 * @param fields
 */
var handleAdd = function (fields) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading('正在添加');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, service_1.addRule(__assign({}, fields))];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success('添加成功');
                return [2 /*return*/, true];
            case 3:
                error_1 = _a.sent();
                hide();
                antd_1.message.error('添加失败请重试！');
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 * 更新节点
 * @param fields
 */
var handleUpdate = function (fields) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading('正在配置');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, service_1.updateRule({
                        name: fields.name,
                        desc: fields.desc,
                        key: fields.key,
                    })];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success('配置成功');
                return [2 /*return*/, true];
            case 3:
                error_2 = _a.sent();
                hide();
                antd_1.message.error('配置失败请重试！');
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 *  删除节点
 * @param selectedRows
 */
var handleRemove = function (selectedRows) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading('正在删除');
                if (!selectedRows)
                    return [2 /*return*/, true];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, service_1.removeRule({
                        key: selectedRows.map(function (row) { return row.key; }),
                    })];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success('删除成功，即将刷新');
                return [2 /*return*/, true];
            case 3:
                error_3 = _a.sent();
                hide();
                antd_1.message.error('删除失败，请重试');
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
var TableList = function () {
    var _a = react_1.useState(false), createModalVisible = _a[0], handleModalVisible = _a[1];
    var _b = react_1.useState(false), updateModalVisible = _b[0], handleUpdateModalVisible = _b[1];
    var _c = react_1.useState({}), stepFormValues = _c[0], setStepFormValues = _c[1];
    var actionRef = react_1.useRef();
    var columns = [
        {
            title: '规则名称',
            dataIndex: 'name',
            rules: [
                {
                    required: true,
                    message: '规则名称为必填项',
                },
            ],
        },
        {
            title: '描述',
            dataIndex: 'desc',
            valueType: 'textarea',
        },
        {
            title: '服务调用次数',
            dataIndex: 'callNo',
            sorter: true,
            hideInForm: true,
            renderText: function (val) { return val + " \u4E07"; },
        },
        {
            title: '状态',
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: { text: '关闭', status: 'Default' },
                1: { text: '运行中', status: 'Processing' },
                2: { text: '已上线', status: 'Success' },
                3: { text: '异常', status: 'Error' },
            },
        },
        {
            title: '上次调度时间',
            dataIndex: 'updatedAt',
            sorter: true,
            valueType: 'dateTime',
            hideInForm: true,
            renderFormItem: function (item, _a, form) {
                var defaultRender = _a.defaultRender, rest = __rest(_a, ["defaultRender"]);
                var status = form.getFieldValue('status');
                if ("" + status === '0') {
                    return false;
                }
                if ("" + status === '3') {
                    return <antd_1.Input {...rest} placeholder="请输入异常原因！"/>;
                }
                return defaultRender(item);
            },
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: function (_, record) { return (<>
          <a onClick={function () {
                handleUpdateModalVisible(true);
                setStepFormValues(record);
            }}>
            配置
          </a>
          <antd_1.Divider type="vertical"/>
          <a href="">订阅警报</a>
        </>); },
        },
    ];
    return (<pro_layout_1.PageHeaderWrapper>
      <pro_table_1.default headerTitle="查询表格" actionRef={actionRef} rowKey="key" toolBarRender={function (action, _a) {
        var selectedRows = _a.selectedRows;
        return [
            <antd_1.Button type="primary" onClick={function () { return handleModalVisible(true); }}>
            <icons_1.PlusOutlined /> 新建
          </antd_1.Button>,
            selectedRows && selectedRows.length > 0 && (<antd_1.Dropdown overlay={<antd_1.Menu onClick={function (e) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(e.key === 'remove')) return [3 /*break*/, 2];
                            return [4 /*yield*/, handleRemove(selectedRows)];
                        case 1:
                            _a.sent();
                            action.reload();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); }} selectedKeys={[]}>
                  <antd_1.Menu.Item key="remove">批量删除</antd_1.Menu.Item>
                  <antd_1.Menu.Item key="approval">批量审批</antd_1.Menu.Item>
                </antd_1.Menu>}>
              <antd_1.Button>
                批量操作 <icons_1.DownOutlined />
              </antd_1.Button>
            </antd_1.Dropdown>),
        ];
    }} tableAlertRender={function (_a) {
        var selectedRowKeys = _a.selectedRowKeys, selectedRows = _a.selectedRows;
        return (<div>
            已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
            <span>
              服务调用次数总计 {selectedRows.reduce(function (pre, item) { return pre + item.callNo; }, 0)} 万
            </span>
          </div>);
    }} request={function (params, sorter, filter) { return service_1.queryRule(__assign(__assign({}, params), { sorter: sorter, filter: filter })); }} columns={columns} rowSelection={{}}/>
      <CreateForm_1.default onCancel={function () { return handleModalVisible(false); }} modalVisible={createModalVisible}>
        <pro_table_1.default onSubmit={function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var success;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleAdd(value)];
                case 1:
                    success = _a.sent();
                    if (success) {
                        handleModalVisible(false);
                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); }} rowKey="key" type="form" columns={columns} rowSelection={{}}/>
      </CreateForm_1.default>
      {stepFormValues && Object.keys(stepFormValues).length ? (<UpdateForm_1.default onSubmit={function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var success;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleUpdate(value)];
                case 1:
                    success = _a.sent();
                    if (success) {
                        handleUpdateModalVisible(false);
                        setStepFormValues({});
                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); }} onCancel={function () {
        handleUpdateModalVisible(false);
        setStepFormValues({});
    }} updateModalVisible={updateModalVisible} values={stepFormValues}/>) : null}
    </pro_layout_1.PageHeaderWrapper>);
};
exports.default = TableList;
//# sourceMappingURL=index.js.map