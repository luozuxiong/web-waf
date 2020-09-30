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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var style_less_1 = __importDefault(require("../style.less"));
var TableForm = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    var _b = react_1.useState(false), clickedCancel = _b[0], setClickedCancel = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(0), index = _d[0], setIndex = _d[1];
    var _e = react_1.useState({}), cacheOriginData = _e[0], setCacheOriginData = _e[1];
    var _f = react_1.useState(value), data = _f[0], setData = _f[1];
    var getRowByKey = function (key, newData) { var _a; return (_a = (newData || data)) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.key === key; })[0]; };
    var toggleEditable = function (e, key) {
        e.preventDefault();
        var newData = data === null || data === void 0 ? void 0 : data.map(function (item) { return (__assign({}, item)); });
        var target = getRowByKey(key, newData);
        if (target) {
            // 进入编辑状态时保存原始数据
            if (!target.editable) {
                cacheOriginData[key] = __assign({}, target);
                setCacheOriginData(cacheOriginData);
            }
            target.editable = !target.editable;
            setData(newData);
        }
    };
    var newMember = function () {
        var newData = (data === null || data === void 0 ? void 0 : data.map(function (item) { return (__assign({}, item)); })) || [];
        newData.push({
            key: "NEW_TEMP_ID_" + index,
            workId: '',
            name: '',
            department: '',
            editable: true,
            isNew: true,
        });
        setIndex(index + 1);
        setData(newData);
    };
    var remove = function (key) {
        var newData = data === null || data === void 0 ? void 0 : data.filter(function (item) { return item.key !== key; });
        setData(newData);
        if (onChange) {
            onChange(newData);
        }
    };
    var handleFieldChange = function (e, fieldName, key) {
        var newData = __spreadArrays(data);
        var target = getRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            setData(newData);
        }
    };
    var saveRow = function (e, key) {
        e.persist();
        setLoading(true);
        setTimeout(function () {
            if (clickedCancel) {
                setClickedCancel(false);
                return;
            }
            var target = getRowByKey(key) || {};
            if (!target.workId || !target.name || !target.department) {
                antd_1.message.error('请填写完整成员信息。');
                e.target.focus();
                setLoading(false);
                return;
            }
            delete target.isNew;
            toggleEditable(e, key);
            if (onChange) {
                onChange(data);
            }
            setLoading(false);
        }, 500);
    };
    var handleKeyPress = function (e, key) {
        if (e.key === 'Enter') {
            saveRow(e, key);
        }
    };
    var cancel = function (e, key) {
        setClickedCancel(true);
        e.preventDefault();
        var newData = __spreadArrays(data);
        // 编辑前的原始数据
        var cacheData = [];
        cacheData = newData.map(function (item) {
            if (item.key === key) {
                if (cacheOriginData[key]) {
                    var originItem = __assign(__assign(__assign({}, item), cacheOriginData[key]), { editable: false });
                    delete cacheOriginData[key];
                    setCacheOriginData(cacheOriginData);
                    return originItem;
                }
            }
            return item;
        });
        setData(cacheData);
        setClickedCancel(false);
    };
    var columns = [
        {
            title: '成员姓名',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            render: function (text, record) {
                if (record.editable) {
                    return (<antd_1.Input value={text} autoFocus onChange={function (e) { return handleFieldChange(e, 'name', record.key); }} onKeyPress={function (e) { return handleKeyPress(e, record.key); }} placeholder="成员姓名"/>);
                }
                return text;
            },
        },
        {
            title: '工号',
            dataIndex: 'workId',
            key: 'workId',
            width: '20%',
            render: function (text, record) {
                if (record.editable) {
                    return (<antd_1.Input value={text} onChange={function (e) { return handleFieldChange(e, 'workId', record.key); }} onKeyPress={function (e) { return handleKeyPress(e, record.key); }} placeholder="工号"/>);
                }
                return text;
            },
        },
        {
            title: '所属部门',
            dataIndex: 'department',
            key: 'department',
            width: '40%',
            render: function (text, record) {
                if (record.editable) {
                    return (<antd_1.Input value={text} onChange={function (e) { return handleFieldChange(e, 'department', record.key); }} onKeyPress={function (e) { return handleKeyPress(e, record.key); }} placeholder="所属部门"/>);
                }
                return text;
            },
        },
        {
            title: '操作',
            key: 'action',
            render: function (text, record) {
                if (!!record.editable && loading) {
                    return null;
                }
                if (record.editable) {
                    if (record.isNew) {
                        return (<span>
                <a onClick={function (e) { return saveRow(e, record.key); }}>添加</a>
                <antd_1.Divider type="vertical"/>
                <antd_1.Popconfirm title="是否要删除此行？" onConfirm={function () { return remove(record.key); }}>
                  <a>删除</a>
                </antd_1.Popconfirm>
              </span>);
                    }
                    return (<span>
              <a onClick={function (e) { return saveRow(e, record.key); }}>保存</a>
              <antd_1.Divider type="vertical"/>
              <a onClick={function (e) { return cancel(e, record.key); }}>取消</a>
            </span>);
                }
                return (<span>
            <a onClick={function (e) { return toggleEditable(e, record.key); }}>编辑</a>
            <antd_1.Divider type="vertical"/>
            <antd_1.Popconfirm title="是否要删除此行？" onConfirm={function () { return remove(record.key); }}>
              <a>删除</a>
            </antd_1.Popconfirm>
          </span>);
            },
        },
    ];
    return (<>
      <antd_1.Table loading={loading} columns={columns} dataSource={data} pagination={false} rowClassName={function (record) { return (record.editable ? style_less_1.default.editable : ''); }}/>
      <antd_1.Button style={{ width: '100%', marginTop: 16, marginBottom: 8 }} type="dashed" onClick={newMember}>
        <icons_1.PlusOutlined />
        新增成员
      </antd_1.Button>
    </>);
};
exports.default = TableForm;
//# sourceMappingURL=TableForm.js.map