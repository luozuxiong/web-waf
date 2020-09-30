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
var umi_1 = require("umi");
var antd_1 = require("antd");
var groupBy_1 = __importDefault(require("lodash/groupBy"));
var moment_1 = __importDefault(require("moment"));
var NoticeIcon_1 = __importDefault(require("../NoticeIcon"));
var index_less_1 = __importDefault(require("./index.less"));
var GlobalHeaderRight = /** @class */ (function (_super) {
    __extends(GlobalHeaderRight, _super);
    function GlobalHeaderRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeReadState = function (clickedItem) {
            var id = clickedItem.id;
            var dispatch = _this.props.dispatch;
            if (dispatch) {
                dispatch({
                    type: 'global/changeNoticeReadState',
                    payload: id,
                });
            }
        };
        _this.handleNoticeClear = function (title, key) {
            var dispatch = _this.props.dispatch;
            antd_1.message.success('清空了' + " " + title);
            if (dispatch) {
                dispatch({
                    type: 'global/clearNotices',
                    payload: key,
                });
            }
        };
        _this.getNoticeData = function () {
            var _a = _this.props.notices, notices = _a === void 0 ? [] : _a;
            if (!notices || notices.length === 0 || !Array.isArray(notices)) {
                return {};
            }
            var newNotices = notices.map(function (notice) {
                var newNotice = __assign({}, notice);
                if (newNotice.datetime) {
                    newNotice.datetime = moment_1.default(notice.datetime).fromNow();
                }
                if (newNotice.id) {
                    newNotice.key = newNotice.id;
                }
                if (newNotice.extra && newNotice.status) {
                    var color = {
                        todo: '',
                        processing: 'blue',
                        urgent: 'red',
                        doing: 'gold',
                    }[newNotice.status];
                    newNotice.extra = (<antd_1.Tag color={color} style={{
                        marginRight: 0,
                    }}>
            {newNotice.extra}
          </antd_1.Tag>);
                }
                return newNotice;
            });
            return groupBy_1.default(newNotices, 'type');
        };
        _this.getUnreadData = function (noticeData) {
            var unreadMsg = {};
            Object.keys(noticeData).forEach(function (key) {
                var value = noticeData[key];
                if (!unreadMsg[key]) {
                    unreadMsg[key] = 0;
                }
                if (Array.isArray(value)) {
                    unreadMsg[key] = value.filter(function (item) { return !item.read; }).length;
                }
            });
            return unreadMsg;
        };
        return _this;
    }
    GlobalHeaderRight.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        if (dispatch) {
            dispatch({
                type: 'global/fetchNotices',
            });
        }
    };
    GlobalHeaderRight.prototype.render = function () {
        var _this = this;
        var _a = this.props, currentUser = _a.currentUser, fetchingNotices = _a.fetchingNotices, onNoticeVisibleChange = _a.onNoticeVisibleChange;
        var noticeData = this.getNoticeData();
        var unreadMsg = this.getUnreadData(noticeData);
        return (<NoticeIcon_1.default className={index_less_1.default.action} count={currentUser && currentUser.unreadCount} onItemClick={function (item) {
            _this.changeReadState(item);
        }} loading={fetchingNotices} clearText="清空" viewMoreText="查看更多" onClear={this.handleNoticeClear} onPopupVisibleChange={onNoticeVisibleChange} onViewMore={function () { return antd_1.message.info('Click on view more'); }} clearClose>
        <NoticeIcon_1.default.Tab tabKey="notification" count={unreadMsg.notification} list={noticeData.notification} title="通知" emptyText="你已查看所有通知" showViewMore/>
        <NoticeIcon_1.default.Tab tabKey="message" count={unreadMsg.message} list={noticeData.message} title="消息" emptyText="您已读完所有消息" showViewMore/>
        <NoticeIcon_1.default.Tab tabKey="event" title="待办" emptyText="你已完成所有待办" count={unreadMsg.event} list={noticeData.event} showViewMore/>
      </NoticeIcon_1.default>);
    };
    return GlobalHeaderRight;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var user = _a.user, global = _a.global, loading = _a.loading;
    return ({
        currentUser: user.currentUser,
        collapsed: global.collapsed,
        fetchingMoreNotices: loading.effects['global/fetchMoreNotices'],
        fetchingNotices: loading.effects['global/fetchNotices'],
        notices: global.notices,
    });
})(GlobalHeaderRight);
//# sourceMappingURL=NoticeIconView.js.map