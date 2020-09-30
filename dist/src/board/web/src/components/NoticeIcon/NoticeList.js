"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var NoticeList_less_1 = __importDefault(require("./NoticeList.less"));
var NoticeList = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, onClick = _a.onClick, onClear = _a.onClear, title = _a.title, onViewMore = _a.onViewMore, emptyText = _a.emptyText, _c = _a.showClear, showClear = _c === void 0 ? true : _c, clearText = _a.clearText, viewMoreText = _a.viewMoreText, _d = _a.showViewMore, showViewMore = _d === void 0 ? false : _d;
    if (!data || data.length === 0) {
        return (<div className={NoticeList_less_1.default.notFound}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg" alt="not found"/>
        <div>{emptyText}</div>
      </div>);
    }
    return (<div>
      <antd_1.List className={NoticeList_less_1.default.list} dataSource={data} renderItem={function (item, i) {
        var _a;
        var itemCls = classnames_1.default(NoticeList_less_1.default.item, (_a = {},
            _a[NoticeList_less_1.default.read] = item.read,
            _a));
        // eslint-disable-next-line no-nested-ternary
        var leftIcon = item.avatar ? (typeof item.avatar === 'string' ? (<antd_1.Avatar className={NoticeList_less_1.default.avatar} src={item.avatar}/>) : (<span className={NoticeList_less_1.default.iconElement}>{item.avatar}</span>)) : null;
        return (<antd_1.List.Item className={itemCls} key={item.key || i} onClick={function () { return onClick && onClick(item); }}>
              <antd_1.List.Item.Meta className={NoticeList_less_1.default.meta} avatar={leftIcon} title={<div className={NoticeList_less_1.default.title}>
                    {item.title}
                    <div className={NoticeList_less_1.default.extra}>{item.extra}</div>
                  </div>} description={<div>
                    <div className={NoticeList_less_1.default.description}>{item.description}</div>
                    <div className={NoticeList_less_1.default.datetime}>{item.datetime}</div>
                  </div>}/>
            </antd_1.List.Item>);
    }}/>
      <div className={NoticeList_less_1.default.bottomBar}>
        {showClear ? (<div onClick={onClear}>
            {clearText} {title}
          </div>) : null}
        {showViewMore ? (<div onClick={function (e) {
        if (onViewMore) {
            onViewMore(e);
        }
    }}>
            {viewMoreText}
          </div>) : null}
      </div>
    </div>);
};
exports.default = NoticeList;
//# sourceMappingURL=NoticeList.js.map