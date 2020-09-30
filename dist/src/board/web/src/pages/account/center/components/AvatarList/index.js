"use strict";
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
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var index_less_1 = __importDefault(require("./index.less"));
var avatarSizeToClassName = function (size) {
    var _a;
    return classnames_1.default(index_less_1.default.avatarItem, (_a = {},
        _a[index_less_1.default.avatarItemLarge] = size === 'large',
        _a[index_less_1.default.avatarItemSmall] = size === 'small',
        _a[index_less_1.default.avatarItemMini] = size === 'mini',
        _a));
};
var Item = function (_a) {
    var src = _a.src, size = _a.size, tips = _a.tips, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b;
    var cls = avatarSizeToClassName(size);
    return (<li className={cls} onClick={onClick}>
      {tips ? (<antd_1.Tooltip title={tips}>
          <antd_1.Avatar src={src} size={size} style={{ cursor: 'pointer' }}/>
        </antd_1.Tooltip>) : (<antd_1.Avatar src={src} size={size}/>)}
    </li>);
};
var AvatarList = function (_a) {
    var children = _a.children, size = _a.size, _b = _a.maxLength, maxLength = _b === void 0 ? 5 : _b, excessItemsStyle = _a.excessItemsStyle, other = __rest(_a, ["children", "size", "maxLength", "excessItemsStyle"]);
    var numOfChildren = react_1.default.Children.count(children);
    var numToShow = maxLength >= numOfChildren ? numOfChildren : maxLength;
    var childrenArray = react_1.default.Children.toArray(children);
    var childrenWithProps = childrenArray.slice(0, numToShow).map(function (child) {
        return react_1.default.cloneElement(child, {
            size: size,
        });
    });
    if (numToShow < numOfChildren) {
        var cls = avatarSizeToClassName(size);
        childrenWithProps.push(<li key="exceed" className={cls}>
        <antd_1.Avatar size={size} style={excessItemsStyle}>{"+" + (numOfChildren - maxLength)}</antd_1.Avatar>
      </li>);
    }
    return (<div {...other} className={index_less_1.default.avatarList}>
      <ul> {childrenWithProps} </ul>
    </div>);
};
AvatarList.Item = Item;
exports.default = AvatarList;
//# sourceMappingURL=index.js.map