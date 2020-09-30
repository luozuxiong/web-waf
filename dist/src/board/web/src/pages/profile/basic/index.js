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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var react_1 = __importStar(require("react"));
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
var style_less_1 = __importDefault(require("./style.less"));
var progressColumns = [
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '当前进度',
        dataIndex: 'rate',
        key: 'rate',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: function (text) {
            if (text === 'success') {
                return <antd_1.Badge status="success" text="成功"/>;
            }
            return <antd_1.Badge status="processing" text="进行中"/>;
        },
    },
    {
        title: '操作员ID',
        dataIndex: 'operator',
        key: 'operator',
    },
    {
        title: '耗时',
        dataIndex: 'cost',
        key: 'cost',
    },
];
var Basic = /** @class */ (function (_super) {
    __extends(Basic, _super);
    function Basic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Basic.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch({
            type: 'profileAndbasic/fetchBasic',
        });
    };
    Basic.prototype.render = function () {
        var _a = this.props, profileAndbasic = _a.profileAndbasic, loading = _a.loading;
        var basicGoods = profileAndbasic.basicGoods, basicProgress = profileAndbasic.basicProgress;
        var goodsData = [];
        if (basicGoods.length) {
            var num_1 = 0;
            var amount_1 = 0;
            basicGoods.forEach(function (item) {
                num_1 += Number(item.num);
                amount_1 += Number(item.amount);
            });
            goodsData = basicGoods.concat({
                id: '总计',
                num: num_1,
                amount: amount_1,
            });
        }
        var renderContent = function (value, row, index) {
            var obj = {
                children: value,
                props: {},
            };
            if (index === basicGoods.length) {
                obj.props.colSpan = 0;
            }
            return obj;
        };
        var goodsColumns = [
            {
                title: '商品编号',
                dataIndex: 'id',
                key: 'id',
                render: function (text, row, index) {
                    if (index < basicGoods.length) {
                        return <a href="">{text}</a>;
                    }
                    return {
                        children: <span style={{ fontWeight: 600 }}>总计</span>,
                        props: {
                            colSpan: 4,
                        },
                    };
                },
            },
            {
                title: '商品名称',
                dataIndex: 'name',
                key: 'name',
                render: renderContent,
            },
            {
                title: '商品条码',
                dataIndex: 'barcode',
                key: 'barcode',
                render: renderContent,
            },
            {
                title: '单价',
                dataIndex: 'price',
                key: 'price',
                align: 'right',
                render: renderContent,
            },
            {
                title: '数量（件）',
                dataIndex: 'num',
                key: 'num',
                align: 'right',
                render: function (text, row, index) {
                    if (index < basicGoods.length) {
                        return text;
                    }
                    return <span style={{ fontWeight: 600 }}>{text}</span>;
                },
            },
            {
                title: '金额',
                dataIndex: 'amount',
                key: 'amount',
                align: 'right',
                render: function (text, row, index) {
                    if (index < basicGoods.length) {
                        return text;
                    }
                    return <span style={{ fontWeight: 600 }}>{text}</span>;
                },
            },
        ];
        return (<pro_layout_1.PageHeaderWrapper>
        <antd_1.Card bordered={false}>
          <antd_1.Descriptions title="退款申请" style={{ marginBottom: 32 }}>
            <antd_1.Descriptions.Item label="取货单号">1000000000</antd_1.Descriptions.Item>
            <antd_1.Descriptions.Item label="状态">已取货</antd_1.Descriptions.Item>
            <antd_1.Descriptions.Item label="销售单号">1234123421</antd_1.Descriptions.Item>
            <antd_1.Descriptions.Item label="子订单">3214321432</antd_1.Descriptions.Item>
          </antd_1.Descriptions>
          <antd_1.Divider style={{ marginBottom: 32 }}/>
          <antd_1.Descriptions title="用户信息" style={{ marginBottom: 32 }}>
            <antd_1.Descriptions.Item label="用户姓名">付小小</antd_1.Descriptions.Item>
            <antd_1.Descriptions.Item label="联系电话">18100000000</antd_1.Descriptions.Item>
            <antd_1.Descriptions.Item label="常用快递">菜鸟仓储</antd_1.Descriptions.Item>
            <antd_1.Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</antd_1.Descriptions.Item>
            <antd_1.Descriptions.Item label="备注">无</antd_1.Descriptions.Item>
          </antd_1.Descriptions>
          <antd_1.Divider style={{ marginBottom: 32 }}/>
          <div className={style_less_1.default.title}>退货商品</div>
          <antd_1.Table style={{ marginBottom: 24 }} pagination={false} loading={loading} dataSource={goodsData} columns={goodsColumns} rowKey="id"/>
          <div className={style_less_1.default.title}>退货进度</div>
          <antd_1.Table style={{ marginBottom: 16 }} pagination={false} loading={loading} dataSource={basicProgress} columns={progressColumns}/>
        </antd_1.Card>
      </pro_layout_1.PageHeaderWrapper>);
    };
    return Basic;
}(react_1.Component));
exports.default = umi_1.connect(function (_a) {
    var profileAndbasic = _a.profileAndbasic, loading = _a.loading;
    return ({
        profileAndbasic: profileAndbasic,
        loading: loading.effects['profileAndbasic/fetchBasic'],
    });
})(Basic);
//# sourceMappingURL=index.js.map