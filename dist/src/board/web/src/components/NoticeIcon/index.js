"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var use_merge_value_1 = __importDefault(require("use-merge-value"));
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var NoticeList_1 = __importDefault(require("./NoticeList"));
var HeaderDropdown_1 = __importDefault(require("../HeaderDropdown"));
var index_less_1 = __importDefault(require("./index.less"));
var TabPane = antd_1.Tabs.TabPane;
var NoticeIcon = function (props) {
    var getNotificationBox = function () {
        var children = props.children, loading = props.loading, onClear = props.onClear, onTabChange = props.onTabChange, onItemClick = props.onItemClick, onViewMore = props.onViewMore, clearText = props.clearText, viewMoreText = props.viewMoreText;
        if (!children) {
            return null;
        }
        var panes = [];
        react_1.default.Children.forEach(children, function (child) {
            if (!child) {
                return;
            }
            var _a = child.props, list = _a.list, title = _a.title, count = _a.count, tabKey = _a.tabKey, showClear = _a.showClear, showViewMore = _a.showViewMore;
            var len = list && list.length ? list.length : 0;
            var msgCount = count || count === 0 ? count : len;
            var tabTitle = msgCount > 0 ? title + " (" + msgCount + ")" : title;
            panes.push(<TabPane tab={tabTitle} key={tabKey}>
          <NoticeList_1.default {...child.props} clearText={clearText} viewMoreText={viewMoreText} data={list} onClear={function () { return onClear && onClear(title, tabKey); }} onClick={function (item) { return onItemClick && onItemClick(item, child.props); }} onViewMore={function (event) { return onViewMore && onViewMore(child.props, event); }} showClear={showClear} showViewMore={showViewMore} title={title}/>
        </TabPane>);
        });
        return (<antd_1.Spin spinning={loading} delay={300}>
        <antd_1.Tabs className={index_less_1.default.tabs} onChange={onTabChange}>
          {panes}
        </antd_1.Tabs>
      </antd_1.Spin>);
    };
    var className = props.className, count = props.count, bell = props.bell;
    var _a = use_merge_value_1.default(false, {
        value: props.popupVisible,
        onChange: props.onPopupVisibleChange,
    }), visible = _a[0], setVisible = _a[1];
    var noticeButtonClass = classnames_1.default(className, index_less_1.default.noticeButton);
    var notificationBox = getNotificationBox();
    var NoticeBellIcon = bell || <icons_1.BellOutlined className={index_less_1.default.icon}/>;
    var trigger = (<span className={classnames_1.default(noticeButtonClass, { opened: visible })}>
      <antd_1.Badge count={count} style={{ boxShadow: 'none' }} className={index_less_1.default.badge}>
        {NoticeBellIcon}
      </antd_1.Badge>
    </span>);
    if (!notificationBox) {
        return trigger;
    }
    return (<HeaderDropdown_1.default placement="bottomRight" overlay={notificationBox} overlayClassName={index_less_1.default.popover} trigger={['click']} visible={visible} onVisibleChange={setVisible}>
      {trigger}
    </HeaderDropdown_1.default>);
};
NoticeIcon.defaultProps = {
    emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
};
NoticeIcon.Tab = NoticeList_1.default;
exports.default = NoticeIcon;
//# sourceMappingURL=index.js.map