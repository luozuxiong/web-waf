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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTabChange = function (key) {
            var match = _this.props.match;
            var url = match.url === '/' ? '' : match.url;
            switch (key) {
                case 'articles':
                    umi_1.history.push(url + "/articles");
                    break;
                case 'applications':
                    umi_1.history.push(url + "/applications");
                    break;
                case 'projects':
                    umi_1.history.push(url + "/projects");
                    break;
                default:
                    break;
            }
        };
        _this.handleFormSubmit = function (value) {
            // eslint-disable-next-line no-console
            console.log(value);
        };
        _this.getTabKey = function () {
            var _a = _this.props, match = _a.match, location = _a.location;
            var url = match.path === '/' ? '' : match.path;
            var tabKey = location.pathname.replace(url + "/", '');
            if (tabKey && tabKey !== '/') {
                return tabKey;
            }
            return 'articles';
        };
        return _this;
    }
    Search.prototype.render = function () {
        var tabList = [
            {
                key: 'articles',
                tab: '文章',
            },
            {
                key: 'projects',
                tab: '项目',
            },
            {
                key: 'applications',
                tab: '应用',
            },
        ];
        var mainSearch = (<div style={{ textAlign: 'center' }}>
        <antd_1.Input.Search placeholder="请输入" enterButton="搜索" size="large" onSearch={this.handleFormSubmit} style={{ maxWidth: 522, width: '100%' }}/>
      </div>);
        var children = this.props.children;
        return (<pro_layout_1.PageHeaderWrapper content={mainSearch} tabList={tabList} tabActiveKey={this.getTabKey()} onTabChange={this.handleTabChange}>
        {children}
      </pro_layout_1.PageHeaderWrapper>);
    };
    return Search;
}(react_1.Component));
exports.default = Search;
//# sourceMappingURL=index.js.map