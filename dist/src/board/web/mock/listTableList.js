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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
// mock tableListDataSource
var genList = function (current, pageSize) {
    var tableListDataSource = [];
    for (var i = 0; i < pageSize; i += 1) {
        var index = (current - 1) * 10 + i;
        tableListDataSource.push({
            key: index,
            disabled: i % 6 === 0,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i % 2],
            name: "TradeCode " + index,
            owner: '曲丽丽',
            desc: '这是一段描述',
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 4,
            updatedAt: new Date(),
            createdAt: new Date(),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    tableListDataSource.reverse();
    return tableListDataSource;
};
var tableListDataSource = genList(1, 100);
function getRule(req, res, u) {
    var realUrl = u;
    if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
        realUrl = req.url;
    }
    var _a = req.query, _b = _a.current, current = _b === void 0 ? 1 : _b, _c = _a.pageSize, pageSize = _c === void 0 ? 10 : _c;
    var params = url_1.parse(realUrl, true).query;
    var dataSource = __spreadArrays(tableListDataSource).slice((current - 1) * pageSize, current * pageSize);
    var sorter = JSON.parse(params.sorter);
    if (sorter) {
        dataSource = dataSource.sort(function (prev, next) {
            var sortNumber = 0;
            Object.keys(sorter).forEach(function (key) {
                if (sorter[key] === 'descend') {
                    if (prev[key] - next[key] > 0) {
                        sortNumber += -1;
                    }
                    else {
                        sortNumber += 1;
                    }
                    return;
                }
                if (prev[key] - next[key] > 0) {
                    sortNumber += 1;
                }
                else {
                    sortNumber += -1;
                }
            });
            return sortNumber;
        });
    }
    if (params.filter) {
        var filter_1 = JSON.parse(params.filter);
        if (Object.keys(filter_1).length > 0) {
            dataSource = dataSource.filter(function (item) {
                return Object.keys(filter_1).some(function (key) {
                    if (!filter_1[key]) {
                        return true;
                    }
                    if (filter_1[key].includes("" + item[key])) {
                        return true;
                    }
                    return false;
                });
            });
        }
    }
    if (params.name) {
        dataSource = dataSource.filter(function (data) { return data.name.includes(params.name || ''); });
    }
    var result = {
        data: dataSource,
        total: tableListDataSource.length,
        success: true,
        pageSize: pageSize,
        current: parseInt("" + params.currentPage, 10) || 1,
    };
    return res.json(result);
}
function postRule(req, res, u, b) {
    var realUrl = u;
    if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
        realUrl = req.url;
    }
    var body = (b && b.body) || req.body;
    var method = body.method, name = body.name, desc = body.desc, key = body.key;
    switch (method) {
        /* eslint no-case-declarations:0 */
        case 'delete':
            tableListDataSource = tableListDataSource.filter(function (item) { return key.indexOf(item.key) === -1; });
            break;
        case 'post':
            (function () {
                var i = Math.ceil(Math.random() * 10000);
                var newRule = {
                    key: tableListDataSource.length,
                    href: 'https://ant.design',
                    avatar: [
                        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
                    ][i % 2],
                    name: name,
                    owner: '曲丽丽',
                    desc: desc,
                    callNo: Math.floor(Math.random() * 1000),
                    status: Math.floor(Math.random() * 10) % 2,
                    updatedAt: new Date(),
                    createdAt: new Date(),
                    progress: Math.ceil(Math.random() * 100),
                };
                tableListDataSource.unshift(newRule);
                return res.json(newRule);
            })();
            return;
        case 'update':
            (function () {
                var newRule = {};
                tableListDataSource = tableListDataSource.map(function (item) {
                    if (item.key === key) {
                        newRule = __assign(__assign({}, item), { desc: desc, name: name });
                        return __assign(__assign({}, item), { desc: desc, name: name });
                    }
                    return item;
                });
                return res.json(newRule);
            })();
            return;
        default:
            break;
    }
    var result = {
        list: tableListDataSource,
        pagination: {
            total: tableListDataSource.length,
        },
    };
    res.json(result);
}
exports.default = {
    'GET /api/rule': getRule,
    'POST /api/rule': postRule,
};
//# sourceMappingURL=listTableList.js.map