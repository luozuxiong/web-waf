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
exports.BasicList = void 0;
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_dom_1 = require("react-dom");
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var moment_1 = __importDefault(require("moment"));
var OperationModal_1 = __importDefault(require("./components/OperationModal"));
var style_less_1 = __importDefault(require("./style.less"));
var RadioButton = antd_1.Radio.Button;
var RadioGroup = antd_1.Radio.Group;
var Search = antd_1.Input.Search;
var Info = function (_a) {
    var title = _a.title, value = _a.value, bordered = _a.bordered;
    return (<div className={style_less_1.default.headerInfo}>
    <span>{title}</span>
    <p>{value}</p>
    {bordered && <em />}
  </div>);
};
var ListContent = function (_a) {
    var _b = _a.data, owner = _b.owner, createdAt = _b.createdAt, percent = _b.percent, status = _b.status;
    return (<div className={style_less_1.default.listContent}>
    <div className={style_less_1.default.listContentItem}>
      <span>Owner</span>
      <p>{owner}</p>
    </div>
    <div className={style_less_1.default.listContentItem}>
      <span>开始时间</span>
      <p>{moment_1.default(createdAt).format('YYYY-MM-DD HH:mm')}</p>
    </div>
    <div className={style_less_1.default.listContentItem}>
      <antd_1.Progress percent={percent} status={status} strokeWidth={6} style={{ width: 180 }}/>
    </div>
  </div>);
};
exports.BasicList = function (props) {
    var addBtn = react_1.useRef(null);
    var loading = props.loading, dispatch = props.dispatch, list = props.listAndbasicList.list;
    var _a = react_1.useState(false), done = _a[0], setDone = _a[1];
    var _b = react_1.useState(false), visible = _b[0], setVisible = _b[1];
    var _c = react_1.useState(undefined), current = _c[0], setCurrent = _c[1];
    react_1.useEffect(function () {
        dispatch({
            type: 'listAndbasicList/fetch',
            payload: {
                count: 5,
            },
        });
    }, [1]);
    var paginationProps = {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 5,
        total: 50,
    };
    var showModal = function () {
        setVisible(true);
        setCurrent(undefined);
    };
    var showEditModal = function (item) {
        setVisible(true);
        setCurrent(item);
    };
    var deleteItem = function (id) {
        dispatch({
            type: 'listAndbasicList/submit',
            payload: { id: id },
        });
    };
    var editAndDelete = function (key, currentItem) {
        if (key === 'edit')
            showEditModal(currentItem);
        else if (key === 'delete') {
            antd_1.Modal.confirm({
                title: '删除任务',
                content: '确定删除该任务吗？',
                okText: '确认',
                cancelText: '取消',
                onOk: function () { return deleteItem(currentItem.id); },
            });
        }
    };
    var extraContent = (<div className={style_less_1.default.extraContent}>
      <RadioGroup defaultValue="all">
        <RadioButton value="all">全部</RadioButton>
        <RadioButton value="progress">进行中</RadioButton>
        <RadioButton value="waiting">等待中</RadioButton>
      </RadioGroup>
      <Search className={style_less_1.default.extraContentSearch} placeholder="请输入" onSearch={function () { return ({}); }}/>
    </div>);
    var MoreBtn = function (_a) {
        var item = _a.item;
        return (<antd_1.Dropdown overlay={<antd_1.Menu onClick={function (_a) {
            var key = _a.key;
            return editAndDelete(key, item);
        }}>
          <antd_1.Menu.Item key="edit">编辑</antd_1.Menu.Item>
          <antd_1.Menu.Item key="delete">删除</antd_1.Menu.Item>
        </antd_1.Menu>}>
      <a>
        更多 <icons_1.DownOutlined />
      </a>
    </antd_1.Dropdown>);
    };
    var setAddBtnblur = function () {
        if (addBtn.current) {
            // eslint-disable-next-line react/no-find-dom-node
            var addBtnDom_1 = react_dom_1.findDOMNode(addBtn.current);
            setTimeout(function () { return addBtnDom_1.blur(); }, 0);
        }
    };
    var handleDone = function () {
        setAddBtnblur();
        setDone(false);
        setVisible(false);
    };
    var handleCancel = function () {
        setAddBtnblur();
        setVisible(false);
    };
    var handleSubmit = function (values) {
        var id = current ? current.id : '';
        setAddBtnblur();
        setDone(true);
        dispatch({
            type: 'listAndbasicList/submit',
            payload: __assign(__assign({}, values), { id: id }),
        });
    };
    return (<div>
      <pro_layout_1.PageHeaderWrapper>
        <div className={style_less_1.default.standardList}>
          <antd_1.Card bordered={false}>
            <antd_1.Row>
              <antd_1.Col sm={8} xs={24}>
                <Info title="我的待办" value="8个任务" bordered/>
              </antd_1.Col>
              <antd_1.Col sm={8} xs={24}>
                <Info title="本周任务平均处理时间" value="32分钟" bordered/>
              </antd_1.Col>
              <antd_1.Col sm={8} xs={24}>
                <Info title="本周完成任务数" value="24个任务"/>
              </antd_1.Col>
            </antd_1.Row>
          </antd_1.Card>

          <antd_1.Card className={style_less_1.default.listCard} bordered={false} title="基本列表" style={{ marginTop: 24 }} bodyStyle={{ padding: '0 32px 40px 32px' }} extra={extraContent}>
            <antd_1.Button type="dashed" style={{ width: '100%', marginBottom: 8 }} onClick={showModal} ref={addBtn}>
              <icons_1.PlusOutlined />
              添加
            </antd_1.Button>

            <antd_1.List size="large" rowKey="id" loading={loading} pagination={paginationProps} dataSource={list} renderItem={function (item) { return (<antd_1.List.Item actions={[
        <a key="edit" onClick={function (e) {
            e.preventDefault();
            showEditModal(item);
        }}>
                      编辑
                    </a>,
        <MoreBtn key="more" item={item}/>,
    ]}>
                  <antd_1.List.Item.Meta avatar={<antd_1.Avatar src={item.logo} shape="square" size="large"/>} title={<a href={item.href}>{item.title}</a>} description={item.subDescription}/>
                  <ListContent data={item}/>
                </antd_1.List.Item>); }}/>
          </antd_1.Card>
        </div>
      </pro_layout_1.PageHeaderWrapper>

      <OperationModal_1.default done={done} current={current} visible={visible} onDone={handleDone} onCancel={handleCancel} onSubmit={handleSubmit}/>
    </div>);
};
exports.default = umi_1.connect(function (_a) {
    var listAndbasicList = _a.listAndbasicList, loading = _a.loading;
    return ({
        listAndbasicList: listAndbasicList,
        loading: loading.models.listAndbasicList,
    });
})(exports.BasicList);
//# sourceMappingURL=index.js.map