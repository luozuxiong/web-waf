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
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var style_less_1 = __importDefault(require("./style.less"));
var Paragraph = antd_1.Typography.Paragraph;
var CardList = /** @class */ (function (_super) {
    __extends(CardList, _super);
    function CardList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardList.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'listAndcardList/fetch',
            payload: {
                count: 8,
            },
        });
    };
    CardList.prototype.render = function () {
        var _a = this.props, list = _a.listAndcardList.list, loading = _a.loading;
        var content = (<div className={style_less_1.default.pageHeaderContent}>
        <p>
          段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。
        </p>
        <div className={style_less_1.default.contentLink}>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"/>{' '}
            快速开始
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"/>{' '}
            产品简介
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"/>{' '}
            产品文档
          </a>
        </div>
      </div>);
        var extraContent = (<div className={style_less_1.default.extraImg}>
        <img alt="这是一个标题" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"/>
      </div>);
        var nullData = {};
        return (<pro_layout_1.PageHeaderWrapper content={content} extraContent={extraContent}>
        <div className={style_less_1.default.cardList}>
          <antd_1.List rowKey="id" loading={loading} grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
        }} dataSource={__spreadArrays([nullData], list)} renderItem={function (item) {
            if (item && item.id) {
                return (<antd_1.List.Item key={item.id}>
                    <antd_1.Card hoverable className={style_less_1.default.card} actions={[<a key="option1">操作一</a>, <a key="option2">操作二</a>]}>
                      <antd_1.Card.Meta avatar={<img alt="" className={style_less_1.default.cardAvatar} src={item.avatar}/>} title={<a>{item.title}</a>} description={<Paragraph className={style_less_1.default.item} ellipsis={{ rows: 3 }}>
                            {item.description}
                          </Paragraph>}/>
                    </antd_1.Card>
                  </antd_1.List.Item>);
            }
            return (<antd_1.List.Item>
                  <antd_1.Button type="dashed" className={style_less_1.default.newButton}>
                    <icons_1.PlusOutlined /> 新增产品
                  </antd_1.Button>
                </antd_1.List.Item>);
        }}/>
        </div>
      </pro_layout_1.PageHeaderWrapper>);
    };
    return CardList;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var listAndcardList = _a.listAndcardList, loading = _a.loading;
    return ({
        listAndcardList: listAndcardList,
        loading: loading.models.listAndcardList,
    });
})(CardList);
//# sourceMappingURL=index.js.map