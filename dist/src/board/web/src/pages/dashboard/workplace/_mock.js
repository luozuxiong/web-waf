"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
// mock data
var visitData = [];
var beginDay = new Date().getTime();
var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (var i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: moment_1.default(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: fakeY[i],
    });
}
var visitData2 = [];
var fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (var i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: moment_1.default(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: fakeY2[i],
    });
}
var salesData = [];
for (var i = 0; i < 12; i += 1) {
    salesData.push({
        x: i + 1 + "\u6708",
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
var searchData = [];
for (var i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: "\u641C\u7D22\u5173\u952E\u8BCD-" + i,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}
var salesTypeData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];
var salesTypeDataOnline = [
    {
        x: '家用电器',
        y: 244,
    },
    {
        x: '食用酒水',
        y: 321,
    },
    {
        x: '个护健康',
        y: 311,
    },
    {
        x: '服饰箱包',
        y: 41,
    },
    {
        x: '母婴产品',
        y: 121,
    },
    {
        x: '其他',
        y: 111,
    },
];
var salesTypeDataOffline = [
    {
        x: '家用电器',
        y: 99,
    },
    {
        x: '食用酒水',
        y: 188,
    },
    {
        x: '个护健康',
        y: 344,
    },
    {
        x: '服饰箱包',
        y: 255,
    },
    {
        x: '其他',
        y: 65,
    },
];
var offlineData = [];
for (var i = 0; i < 10; i += 1) {
    offlineData.push({
        name: "Stores " + i,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
var offlineChartData = [];
for (var i = 0; i < 20; i += 1) {
    offlineChartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}
var titles = [
    'Alipay',
    'Angular',
    'Ant Design',
    'Ant Design Pro',
    'Bootstrap',
    'React',
    'Vue',
    'Webpack',
];
var avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
var avatars2 = [
    'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
    'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
    'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
    'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];
var getNotice = [
    {
        id: 'xxx1',
        title: titles[0],
        logo: avatars[0],
        description: '那是一种内在的东西，他们到达不了，也无法触及的',
        updatedAt: new Date(),
        member: '科学搬砖组',
        href: '',
        memberLink: '',
    },
    {
        id: 'xxx2',
        title: titles[1],
        logo: avatars[1],
        description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
        updatedAt: new Date('2017-07-24'),
        member: '全组都是吴彦祖',
        href: '',
        memberLink: '',
    },
    {
        id: 'xxx3',
        title: titles[2],
        logo: avatars[2],
        description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
        updatedAt: new Date(),
        member: '中二少女团',
        href: '',
        memberLink: '',
    },
    {
        id: 'xxx4',
        title: titles[3],
        logo: avatars[3],
        description: '那时候我只会想自己想要什么，从不想自己拥有什么',
        updatedAt: new Date('2017-07-23'),
        member: '程序员日常',
        href: '',
        memberLink: '',
    },
    {
        id: 'xxx5',
        title: titles[4],
        logo: avatars[4],
        description: '凛冬将至',
        updatedAt: new Date('2017-07-23'),
        member: '高逼格设计天团',
        href: '',
        memberLink: '',
    },
    {
        id: 'xxx6',
        title: titles[5],
        logo: avatars[5],
        description: '生命就像一盒巧克力，结果往往出人意料',
        updatedAt: new Date('2017-07-23'),
        member: '骗你来学计算机',
        href: '',
        memberLink: '',
    },
];
var getActivities = [
    {
        id: 'trend-1',
        updatedAt: new Date(),
        user: {
            name: '曲丽丽',
            avatar: avatars2[0],
        },
        group: {
            name: '高逼格设计天团',
            link: 'http://github.com/',
        },
        project: {
            name: '六月迭代',
            link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
    },
    {
        id: 'trend-2',
        updatedAt: new Date(),
        user: {
            name: '付小小',
            avatar: avatars2[1],
        },
        group: {
            name: '高逼格设计天团',
            link: 'http://github.com/',
        },
        project: {
            name: '六月迭代',
            link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
    },
    {
        id: 'trend-3',
        updatedAt: new Date(),
        user: {
            name: '林东东',
            avatar: avatars2[2],
        },
        group: {
            name: '中二少女团',
            link: 'http://github.com/',
        },
        project: {
            name: '六月迭代',
            link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
    },
    {
        id: 'trend-4',
        updatedAt: new Date(),
        user: {
            name: '周星星',
            avatar: avatars2[4],
        },
        project: {
            name: '5 月日常迭代',
            link: 'http://github.com/',
        },
        template: '将 @{project} 更新至已发布状态',
    },
    {
        id: 'trend-5',
        updatedAt: new Date(),
        user: {
            name: '朱偏右',
            avatar: avatars2[3],
        },
        project: {
            name: '工程效能',
            link: 'http://github.com/',
        },
        comment: {
            name: '留言',
            link: 'http://github.com/',
        },
        template: '在 @{project} 发布了 @{comment}',
    },
    {
        id: 'trend-6',
        updatedAt: new Date(),
        user: {
            name: '乐哥',
            avatar: avatars2[5],
        },
        group: {
            name: '程序员日常',
            link: 'http://github.com/',
        },
        project: {
            name: '品牌迭代',
            link: 'http://github.com/',
        },
        template: '在 @{group} 新建项目 @{project}',
    },
];
var radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
    },
];
var radarData = [];
var radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
};
radarOriginData.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key],
            });
        }
    });
});
exports.default = {
    'GET  /api/project/notice': getNotice,
    'GET  /api/activities': getActivities,
    'GET  /api/fake_chart_data': {
        visitData: visitData,
        visitData2: visitData2,
        salesData: salesData,
        searchData: searchData,
        offlineData: offlineData,
        offlineChartData: offlineChartData,
        salesTypeData: salesTypeData,
        salesTypeDataOnline: salesTypeDataOnline,
        salesTypeDataOffline: salesTypeDataOffline,
        radarData: radarData,
    },
    'GET  /api/currentUser': {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注设计',
            },
            {
                key: '2',
                label: '辣~',
            },
            {
                key: '3',
                label: '大长腿',
            },
            {
                key: '4',
                label: '川妹子',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        geographic: {
            province: {
                label: '浙江省',
                key: '330000',
            },
            city: {
                label: '杭州市',
                key: '330100',
            },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
    },
};
//# sourceMappingURL=_mock.js.map